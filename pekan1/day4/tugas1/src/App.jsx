function App() {


    const appStyle = {
    background: "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
    minHeight: "100vh", // biar full tinggi layar
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding
  
  };

  const avatarStyle = {
    width: "234px",
    height: "203px",
    borderRadius: "10%",
    border: "2px solid #002f9eff",
    marginBottom: "50px",
  };

  // bikin objek style buat box nama
  const nameBoxStyle = {
    padding: "10px 20px",
    backgroundColor: "#f1f1f1",
    border: "1px solid #8d9ee5ff",
    borderRadius: "8px",
    fontSize: "18px",
    color: "#333",
  };

  return (
    <div style={appStyle}>
      <img
        src="./download.jpeg"
        alt="avatar"
        style={avatarStyle}
      />
      <div style={nameBoxStyle}>Tomiyoka giyu</div>
    </div>
  );
}

export default App;