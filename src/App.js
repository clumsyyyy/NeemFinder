import "./App.css";
import "./Results.css";
import "./components/fetchData.js";
import Results from "./components/Results";
import Search from "./components/Search";
import { useLoadData } from "./hooks/LoadData";
import { useContext, useEffect } from "react";
import ThemeContext from "./components/ThemeProvider";

function App() {
  const { darkTheme, toggleDark } = useContext(ThemeContext);
  const dataLoader = useLoadData();

  useEffect(() => {
    void (async function loadData() {
      await dataLoader();
    })();

    // eslint-disable-next-line
  }, []);

  console.log(darkTheme);

  return (
    <div className={"App " + (darkTheme ? "dark" : "")}>
      <button class="toggle" onClick={toggleDark}>
        {" "}
        {darkTheme ? "🌞" : "🌜"}
      </button>
      <Search />
      <Results />
    </div>
  );
}

export default App;
