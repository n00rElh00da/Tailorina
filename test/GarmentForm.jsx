import { useState } from "react"

function GarmentForm() {
        const [garment, setGarment] = useState({ type: "", color: "", price: "" });

    function handleSubmit(event) {
        event.preventDefault();//to do not refresh from html

        console.log("Garment:", garment);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>type</p>
                <input type="text"
                    value={garment.type}
                    onChange={(event) => setGarment({ ...garment, type: event.target.value })}
                />
                <p>color</p>
                <input type="text"
                    value={garment.color}
                    onChange={(event) => setGarment({ ...garment, color: event.target.value })}
                />
                <p>price</p>
                <input type="number"
                    value={garment.price}
                    onChange={(event) => setGarment({ ...garment, price: event.target.value })}
                />
                <button type="submit">submit</button>
            </form>


        </>
    );

}

export default GarmentForm;
