import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSumbit(e) {
    e.preventDefault();

    // Check if the description is empty
    if (!description.trim()) {
      alert("Description is empty!");
      return;
    }

    const newItems = { description, packed: false, id: Date.now() };
    console.log(newItems);
    onAddItems(newItems);
    setDescription("");
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSumbit}>
        <h3>What do you need for your 😍 trip?</h3>
        {/* <select
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          style={{
            maxHeight: "60px",
            overflowY: "auto",
          }}
        >
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select> */}
        <input
          type="text"
          style={{ cursor: "text" }}
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </>
  );
}

export default Form;
