
function Stats({ items }) {
    if (!items.length) {
        return (
            <>
                <p className='stats'><em>start adding some items to your packing list 🚌</em></p>
            </>
        )
    }

    const numList = items.length
    const numPacked = items.filter(item => item.packed).length
    const average = Math.round(numPacked / numList * 100);
    return (
        <>
            <footer className='stats'>
                <em>{average === 100 ? 'you got everything! ready to go 🚌' : `you have ${numList} items in your list and you have already packed ${numPacked} (${average}%)`}</em>
            </footer>
        </>
    )
}
export default Stats