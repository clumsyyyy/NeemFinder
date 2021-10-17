import React, { useState, useContext } from "react";
import useSearchResult from "../hooks/SearchResult";
import { MahasiswaContext } from "./MahasiswaProvider";

export default function SearchComponent({ onSlideEffect }) {
  const { setMahasiswa } = useContext(MahasiswaContext);
  const [keyword, setKeyword] = useState("");
  const searchEngine = useSearchResult();

  const onSearch = () => {
    onSlideEffect && onSlideEffect();
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
        placeholder="Type NIM...."
        value={keyword}
        onInput={({ target: { value } }) => setKeyword(value)} // Two way data binding
      ></input>
      <button id="searchButton" onClick={onSearch}>
        Find...
      </button>
    </div>
  );
}
