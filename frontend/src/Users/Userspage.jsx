import { useState, useEffect } from "react";

function Userpage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Fetching users");
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5191/authentication/users"
        );

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
          console.log("Fetching users - done!");
        }
      } catch (er) {
        console.error("OBS!!! Something happend getting all the users: ", er);
      }
    };
    fetchData();
  }, []);

  const handleRemove = (event) => {
    console.log(event.target.parentNode.firstChild.innerText);
  };

  return (
    <>
      <p>Userpage works</p>
      {users ? (
        users.map((user) => (
          <div key={user.id}>
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <button onClick={handleRemove}>Remove</button>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Userpage;
