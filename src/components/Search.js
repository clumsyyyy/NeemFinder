import React from "react";

export default function SearchComponent() {
  return (
    <div className="banner">
      <div className="textBox">
        <h1>NIMFinder</h1>
        <p>but not really</p>
      </div>
      <input type="text" id="queryInput" placeholder="Type NIM...."></input>
      <input type="button" id="searchButton" value="Find..."></input>
    </div>
  );
}
