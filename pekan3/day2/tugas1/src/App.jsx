import ToggleButton from "./components/ToggleButton";
import Switch from "./components/Switch";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Custom Hook: useToggle()</h1>
      <ToggleButton />
      <Switch />
    </div>
  );
}
