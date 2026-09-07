import { useEffect, useState } from "react";


function User() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  useEffect(
    () => {
      async function getUser() {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.log("Error");
          setError(true);
        }

      }
      getUser();
    }, []
  );

  return (
    <>
      {
        user ? (
          <><p>{user.name}</p> <p>{user.email}</p> <p>{user.address.city}</p></>
        ) : error ?
          (console.log("error")) : (
            <p>..loading</p>
          )
      }
    </>
  );
}

export default User;