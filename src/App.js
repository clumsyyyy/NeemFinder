import "./App.css";
import "./Results.css";
import "./loadData.js";
import "./components/displayData.js";
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

  const onSlide = () => {
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });

    // Buat ngeslidenya
  };

  return (
    <div className="App">
      <Search onSlideEffect={onSlide} />
      <Results />
    </div>
  );
}

export default App;
