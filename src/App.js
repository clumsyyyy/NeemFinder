import "./App.css";
import "./Results.css";
import "./loadData.js";
import "./components/displayData.js";
import Results from "./components/Results";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Results />
    </div>
  );
}

export default App;
