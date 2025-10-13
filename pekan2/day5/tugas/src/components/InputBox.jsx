import React from "react";

export default function InputBox({ massage, setMasage }) {
  return (
    <div>
      <h3>Input Komponen</h3>

      <input
        type="text"
        value={massage}
        onChange={(e) => setMasage(e.target.value)}
        placeholder="Ketik Naon Baek Lah Sakarep Maneh"
      />
    </div>
  );
}
