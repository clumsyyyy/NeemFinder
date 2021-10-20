import React, { useState, useContext } from "react";
import useSearchResult from "../hooks/SearchResult";
import { MahasiswaContext } from "./MahasiswaProvider";

export default function SearchComponent({ onSlideEffect }) {
  const { setMahasiswa } = useContext(MahasiswaContext);
  const [keyword, setKeyword] = useState("");
  const searchEngine = useSearchResult();

  const onSearch = () => {
    onSlideEffect && onSlideEffect();
    document.getElementById("results").removeAttribute("hidden");
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
    setMahasiswa(searchEngine(keyword));
  };

  return (
    <div className="banner">
      <div className="textBox">
        <h1>NEEMFinder</h1>
      </div>
      <input
        type="text"
        id="queryInput"
        placeholder="Type NIM / Name...."
        value={keyword}
        onInput={({ target: { value } }) => setKeyword(value)} // Two way data binding
        onKeyPress = {event => {if (event.key === "Enter") {
          onSearch();
        }}}     
      ></input>
      <div id = "infoBox">
        <p>Panjang NIM minimal 3 karakter (untuk jurusan) dan maksimal 8 karakter.</p>
      </div>
      <button id="searchButton" onClick={onSearch}>
        Find...
      </button>
    </div>
  );
}
