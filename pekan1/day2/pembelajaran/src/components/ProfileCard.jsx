import React from "react";

function ProfileCard({ name, photo, bio, skills }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "16px",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: "2px 2px 8px rgba(0,0,0,0,1)",
    margin: "12px",
  };

  const imgStyle = {
    width: "120px",
    borderRadius: "50%",
    marginBottom: "12px",
  };
  return (
    <div style={cardStyle}>
      <img src={photo} alt={name} style={imgStyle} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <h4>keahlian:</h4>
      <ul>
        {skills.map((skills, index) => (
          <li key={index}>✅ {skills}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
