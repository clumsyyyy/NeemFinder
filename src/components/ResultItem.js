import React from "react";

export default function ResultItem({ nim_tpb, nim_jurusan, nama }) {
  return (
    <div className="container">
      <div>
        <h2>{nama}</h2>
        <div className="NIMContainer">
          <p>{nim_tpb}</p>
          {nim_jurusan && <p>{nim_jurusan}</p>}
        </div>
      </div>
    </div>
  );
}
