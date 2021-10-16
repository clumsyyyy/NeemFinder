import React, { useContext } from "react";
import ResultItem from "./ResultItem";
import { MahasiswaContext } from "./MahasiswaProvider";

export default function ResultsComponent() {
  const { mahasiswa } = useContext(MahasiswaContext);
  return (
    <div className="results" id="results">
      {mahasiswa.map(([nama, nim_tpb, nim_jurusan]) => (
        <ResultItem
          key={nim_tpb}
          nama={nama}
          nim_tpb={nim_tpb}
          nim_jurusan={nim_jurusan}
        ></ResultItem>
      ))}
    </div>
  );
}
