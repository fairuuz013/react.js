import Comment from "./components/Comment";

function App() {
  return (
    <div>
      <Comment
        user={{
          name: "Fairuuz",
          avatarUrl: "./images.jpeg",
        }}
        text="Sumpah belajar React seru bang"
      />
    </div>
  );
}

export default App;
