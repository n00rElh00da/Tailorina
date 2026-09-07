import { useState, useEffect } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(// to send only one request to api in a session 
        () => {
            async function getUsers() {
                try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/users");
                    const data = await response.json();

                    setUsers(data);
                    setLoading(false);
                } catch (error) {
                    console.log("Fetching error");
                    setError(true);
                    setLoading(false);
                }
            }
            getUsers();
        }, []
    )

    return (
        <>
            {
                loading?(
                  <p>loading...</p>
                ):(
                error ? (
                    <p>Error</p>
                ) : (
                    users.map(user =>
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.address.city}</p>
                        </div>
                    )
                )
                )
            }

        </>
    );
}

export default Users;
