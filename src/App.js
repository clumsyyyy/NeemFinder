import "./App.css";
import "./loadData.js";
import "./components/displayData.js";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <div className="results">
        <h1>Menggila</h1>
        <div className="NIM"></div>
      </div>
    </div>
  );
}

export default App;
