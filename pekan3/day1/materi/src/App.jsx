import ThemeButton from "./components/ThemeButton";
import ThemeParagraph from "./components/ThemeParagraph";
import ThemeProvider from "./components/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <h2>Apilkasi dengan Context API</h2>

        <ThemeButton />
        <ThemeParagraph />
      </ThemeProvider>
    </>
  );
}

export default App;
