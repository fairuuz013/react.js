import useToggle from "../hooks/useToggle";

export default function Switch() {
  const [isOn, toggleSwitch] = useToggle(false);

  return (
    <div style={{ margin: "20px" }}>
      <button
        onClick={toggleSwitch}
        style={{
          backgroundColor: isOn ? "limegreen" : "gray",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
        }}
      ></button>
      {isOn ? "ON " : "OFF "}
    </div>
  );
}
