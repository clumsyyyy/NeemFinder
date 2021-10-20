import React, { useContext } from "react";
import ResultItem from "./ResultItem";
import { MahasiswaContext } from "./MahasiswaProvider";

export default function ResultsComponent() {
  const { mahasiswa } = useContext(MahasiswaContext);
  if (mahasiswa.length > 0){
    return (
      <div className="results" id="results" hidden>
        <h3>{mahasiswa.length} hasil</h3>
        {mahasiswa.map(([nama, nim_tpb, nim_jurusan, info]) => (
          <ResultItem
            key={nim_tpb}
            nama={nama}
            nim_tpb={nim_tpb}
            nim_jurusan={nim_jurusan}
            info = {info}
          ></ResultItem>
        ))}
      </div>
    );
  } else {
    return (
      <div className="results" id="results" hidden>
        <h2>Hasil tidak ditemukan :(</h2>
      </div>  
    );
  }
  
}
