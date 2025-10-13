import React from "react";

export default function UserDetail({ user }) {
  return (
    <div
      style={{
        border: "2px solid #191515ff",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        background: "#1d0505ff",
      }}
    >
      <h4>User Detail Component</h4>
      <p>👤 Nama: {user.name}</p>
      <p>💼 Role: {user.role}</p>
      <p>🎮 Hobi: {user.hobby}</p>
    </div>
  );
}
