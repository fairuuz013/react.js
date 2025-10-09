import React from "react";
import Userlist from "./components/UserList";

function App () {
  const userData = [
    {id: 1, name: "Fairuuz", email: "fairuuz@gmail.com"},
    {id: 1, name: "Seorina", email: "seorina@gmail.com"},
  ]

  return <Userlist users={userData}/>
}

export default App