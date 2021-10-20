import "./App.css";
import "./Results.css";
import "./components/fetchData.js";
import Results from "./components/Results";
import Search from "./components/Search";
import { useLoadData } from "./hooks/LoadData";
import { useEffect } from "react";

function App() {
  const dataLoader = useLoadData();

  useEffect(() => {
    void (async function loadData() {
      await dataLoader();
    })();

    // eslint-disable-next-line
  }, []);


  return (
    <div className="App">
      <Search />
      <Results />
    </div>
  );
}

export default App;
