import React, { createContext, useState } from "react";

export const MahasiswaContext = createContext();

export function MahasiswaProvider({ children }) {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [database, setDatabase] = useState([]);

  return (
    <MahasiswaContext.Provider
      value={{ mahasiswa, setMahasiswa, database, setDatabase }}
    >
      {children}
    </MahasiswaContext.Provider>
  );
}
