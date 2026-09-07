import { useState } from 'react';

function CreateGarment() {
    const [garment, setGarment] = useState({ type: "", color: "", price: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setError(false);
        setLoading(true);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(garment)
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }

            const data = await response.json();
            console.log(data);
            setGarment({ type: "", color: "", price: "" });
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {error && <p>An error occurred.</p>}
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={garment.type}
                    onChange={(event) => setGarment({ ...garment, type: event.target.value })}
                />
                <input 
                    type="text" 
                    value={garment.color}
                    onChange={(event) => setGarment({ ...garment, color: event.target.value })}
                />
                <input 
                    type="number"
                    value={garment.price}
                    onChange={(event) => setGarment({ ...garment, price: event.target.value })}
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </>
    );
}

export default CreateGarment;