import React, { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isEditing, setIsEditing] = useState (false);
  return (
    <div>
      <h2>Profil data</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />

          <button onClick={() => setIsEditing(false)}>Simpan</button>
        </div>
      ) : (
        <div>
          <p>Nama: {name}</p>
          <p>Usia: {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit profile</button>
        </div>
      )}
    </div>
  );
}
