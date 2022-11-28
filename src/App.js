import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Welcome to the Book Store "} />
      <h2>Libreria</h2>
    </div>
  );
}

export default App;
