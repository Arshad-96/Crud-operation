import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import UserForm from "./UserForm";

const UserList = () => {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <div>
      <h1>CRUD operations</h1>
      <UserForm />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <UserForm user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
