import React from "react";

function Card({ children }) {
  return (
    <div style={{
      border: "2px solid black",
      borderRadius: "12px",
      padding: "15px",
      margin: "10px",
      backgroundColor: "#aeaeaeff"
    
      
    }}>
      {children}
    </div>
  );
}

export default Card;
