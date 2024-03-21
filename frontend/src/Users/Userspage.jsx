import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  const handleRemove = (userId) => {
    console.log("target userId", userId);

    const deleteUser = async () => {
      console.log(`Removing user ${userId}`);
      try {
        const response = await fetch(
          `http://localhost:5191/authentication/users/${userId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          console.log(`Removing user ${userId} - success`);
          const newArrayOfUsers = users.filter((user) => user.id !== userId);
          setUsers(newArrayOfUsers);
        }
      } catch (er) {
        console.error(
          `OBS!!! Something went wrong tring to delete the user ${userId}: ${er}`
        );
      }
    };
    deleteUser();
  };

  return (
    <>
      <Link to="/home">
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
      {users.length ? (
        users.map((user) => (
          <div key={user.id}>
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <button onClick={() => handleRemove(user.id)}>Remove</button>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Userpage;
