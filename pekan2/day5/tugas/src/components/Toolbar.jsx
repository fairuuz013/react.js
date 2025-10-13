import React from "react";
import Profile from "./Profile";

export default function Toolbar({ user }) {
  return (
    <div style={{ border: "2px solid #290202ff", padding: "10px", margin: "10px" }}>
      <h2>Toolbar Component</h2>
      <Profile user={user} />
    </div>
  );
}
