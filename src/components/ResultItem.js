import React from "react";

export default function ResultItem({ nim_tpb, nim_jurusan, nama, info }) {
  return (
    <div className="container">
      <div>
        <div className="NIContainer">
          <h2>{nama}</h2>
          <p>{info}</p>
        </div>
  
        <div className="NIMContainer">
          <p>{nim_tpb}</p>
          {nim_jurusan && <p>{nim_jurusan}</p>}
        </div>
      </div>
    </div>
  );
}
