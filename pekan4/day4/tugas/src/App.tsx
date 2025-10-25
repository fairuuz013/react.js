import UseRefExample from "./components/UseRefExample";
import PortalModal from "./components/PortalModal";
import { UserInfoWithLoading } from "./components/withLoading";
import MouseTracker from "./components/MouseTracker";
import "./App.css"


export default function App() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Advanced React Patterns</h1>
      <UseRefExample />
      <PortalModal />
      <div style={{ border: "1px solid gray", borderRadius: 10, padding: 20, marginBottom: 20 }}>
        <h2>🔹 HOC </h2>
        <UserInfoWithLoading />
      </div>

      <div style={{ border: "1px solid gray", borderRadius: 10, padding: 20 }}>
        <h2>🔹 Render Props</h2>

        {/* Implementasi 1 */}
        <MouseTracker
          render={(pos) => (
            <p>
              Posisi Mouse → X: {pos.x}, Y: {pos.y}
            </p>
          )}
        />

        {/* Implementasi 2 */}
        <MouseTracker
          render={(pos) => (
            <div

            />
          )}
        />
      </div>
    </div>
  );
}
