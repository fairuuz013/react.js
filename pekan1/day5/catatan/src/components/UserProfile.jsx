import React, { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Profil Pengguna</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target, value)}
          />

          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e, target.value))}
          />
          <button onClick={() => isEditing(true)}> Edit Profile</button>
        </div>
      ) : (
        <div>
          <p>Nama: {name}</p>
          <p>Usia: {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profil</button>
        </div>
      )}
    </div>
  );
}
export default UserProfile;
