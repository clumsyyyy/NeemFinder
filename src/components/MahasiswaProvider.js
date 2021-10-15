import React, { createContext, useState } from "react";

export const MahasiswaContext = createContext();

export function MahasiswaProvider({ children }) {
  const [mahasiswa, setMahasiswa] = useState([]);

  return (
    <MahasiswaContext.Provider value={{ mahasiswa, setMahasiswa }}>
      {children}
    </MahasiswaContext.Provider>
  );
}
