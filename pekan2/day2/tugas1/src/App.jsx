import React from "react";

function UserGreeting() {
  return <h1>Wellcome back again my homie </h1>;
}

function GuestGreeting() {
  return <h1>Silakan masuk baginda</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  return (
    <div>
      <h2>Condisional Rendering dengan if/else </h2>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false}/>
    </div>
  );
}

export default App;
