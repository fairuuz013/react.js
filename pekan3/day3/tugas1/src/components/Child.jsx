 import React from "react";

 function Child ({ label, onClick }) {
  console.log("Render Child", label);
  return(
    <div style={{ border: "1px solid gray", padding: 10, marginTop: 10 }}>
      <p>Pesan dari Parent: {label}</p>
      <button onClick={onClick}>Klik bocil</button>
    </div>
  )
 }

 export default React.memo(Child)