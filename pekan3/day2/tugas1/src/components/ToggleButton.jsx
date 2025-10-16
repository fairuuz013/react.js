import useToggle from "../hooks/useToggle";

export default function ToggleButton() {
  const [isViseble, toggleVisible] = useToggle(false);

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={toggleVisible}>
        {isViseble ? "Hide Text" : "Show Text"} </button>
        {isViseble && <p> Hidup jokowi ytta </p>}
    </div>
  );
}
