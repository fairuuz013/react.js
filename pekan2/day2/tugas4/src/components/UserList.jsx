import React from "react";

function UserList({ users }) {
  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map((user) => (
        <li key={users.id}>
          {user.name} - {user.email}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
