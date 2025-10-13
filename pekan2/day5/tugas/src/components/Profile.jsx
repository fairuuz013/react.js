import React from "react";
import UserDetail from "./UserDetail";

export default function Profile({ user }) {
  return (
    <div style={{ border: "2px solid #bbb", padding: "10px", margin: "10px" }}>
      <h3>Profile Component</h3>
      <UserDetail user={user} />
    </div>
  );
}
