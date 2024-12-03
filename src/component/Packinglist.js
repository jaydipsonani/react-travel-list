import { useState } from "react";
import Item from "./item";

function PackingList({ items, onDeleteItems, onToggleItems, onClearItems }) {
    const [sortby, setSortBy] = useState("input")
    let sortedItems;

    if (sortby === 'input') {
        sortedItems = items
    }

    if (sortby === 'description') {
        sortedItems = items.sort((a, b) => a.description.localeCompare(b.description))
    }
    if (sortby === 'packed') {
        sortedItems = items.sort((a, b) => Number(b.packed) - Number(a.packed))
    }

    return (
        <>
            <div className='list'>
                <ul>
                    {sortedItems.map((item) => (
                        <Item item={item} onDeleteItem={onDeleteItems}
                            key={item.id} onToggleItems={onToggleItems} onClearItems={onClearItems} />))
                    }
                </ul>
                <div className='actions'>
                    <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="input">sort by input order</option>
                        <option value="description">sort by description</option>
                        <option value="packed">sort by packed</option>
                    </select>
                    <button onClick={onClearItems}>clear list</button>
                </div>

            </div>
        </>
    )
}
export default PackingList;