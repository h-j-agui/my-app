import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <h2>Libreria</h2>
      <NavBar />
      <ItemListContainer greeting={"Welcome to the Book Store "} />
      {state ? "Complete" : "Not finished"}
      <button onClick={() => setState(true)}>Complete</button>
    </div>
  );
}

export default App;
