import React from "react";

// Objek untuk menyimpan konfigurasi style dan ikon untuk setiap tipe alert
const alertConfig = {
  success: {
    icon: "✅",
    backgroundColor: "#d4edda",
    borderColor: "#c3e6cb",
    color: "#155724",
  },
  warning: {
    icon: "⚠️",
    backgroundColor: "#fff3cd",
    borderColor: "#ffeeba",
    color: "#856404",
  },
  error: {
    icon: "❌",
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
    color: "#721c24",
  },
};

function AlertBox({ type = "success", children }) {
  // Ambil konfigurasi berdasarkan `type`
  const config = alertConfig[type] || alertConfig.success;

  // Style dasar untuk box
  const boxStyle = {
    padding: "16px",
    margin: "16px",
    border: `1px solid ${config.borderColor}`,
    borderRadius: "8px",
    backgroundColor: config.backgroundColor,
    color: config.color,
    fontFamily: "sans-serif",
    display: "flex",
    alignItems: "center",
    gap: "12px", // Jarak antara ikon dan teks
  };

  return (
    <div style={boxStyle}>
      <span style={{ fontSize: "20px" }}>{config.icon}</span>
      <span>{children}</span>
    </div>
  );
}

export default AlertBox;