import React from "react";

function UserListEmpty({ users }) {
  return (
    <div>
      <h2>Daftar Pengguna</h2>

      {users.length === 0 ? (
        <p>Tidak ada pengguna yang terdaftar.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserListEmpty;
