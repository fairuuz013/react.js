import MyButton from "./components/Mybutton";
function App() {
  return (
    <div>
      <MyButton
        onClick={() => alert("Hayo loh!")}
      >
        Default Button
      </MyButton>
      <MyButton type="primary" onClick={() => alert(" Everbody falling in love im falling behind!")}>
        Primary Button
      </MyButton>
      <p>Tolong ajirin aku dong aku mah masih pemula</p>
    </div>
  );
}

export default App;
