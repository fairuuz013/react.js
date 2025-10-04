import AlertBox from "./components/AlertBox";

function App() {
  return (
    <div>
      <AlertBox type={"success"}>Data berasil di simpan </AlertBox>
      <AlertBox type={"warning"}>Data gagal di simpan bjir </AlertBox>
      <AlertBox type={"error"}>Data ada yang salah jadi error </AlertBox>
    </div>
  );
}
export default App;
