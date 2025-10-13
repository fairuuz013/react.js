import React from "react";

export default function DisplayBox({ massage }) {
  return (
    <div>
      <h3>Display Componen</h3>
      <p>Pesan dari saudara: {massage || "(belum ada input"}</p>{" "}
    </div>
  );
}
