import AlertBox from "./components/AlertBox";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contoh Alert Box</h1>
      <AlertBox type={"success"}>Data berhasil disimpan.</AlertBox>
      <AlertBox type={"warning"}>
        Peringatan: Harap periksa kembali data Anda.
      </AlertBox>
      <AlertBox type={"error"}>Terjadi kesalahan saat menyimpan data.</AlertBox>
    </div>
  );
}
export default App;
