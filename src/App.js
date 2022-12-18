import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import Cart from "./Pages/Cart";

function App() {
  const [genero, setGenero] = useState("");

  console.log(genero);
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Libreria</h2>
        <NavBar setGenero={setGenero} />
        <ItemListContainer genero={genero} />
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home greeting={"Welcome to the Bookstore"} />}
        />

        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
