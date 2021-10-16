import React from "react";
import {generateContainer} from "./displayData.js"


export default function SearchComponent() {
  return (
    <div className="banner">
      <div className="textBox">
        <h1>NEEMFinder</h1>
        <p>(but not really)</p>
      </div>
      <input type="text" id="queryInput" placeholder="Type NIM...."></input>
      <button  id="searchButton" onClick = {generateContainer}>Find...</button>
    </div>
  );
}
