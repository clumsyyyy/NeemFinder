import { useContext } from "react";
import { MahasiswaContext } from "../components/MahasiswaProvider";

export default function useSearchResult() {
  // Ini namanya Custom Hook
  const { database } = useContext(MahasiswaContext);
  return (nim) => {
    var temp = [];
    if (!isNaN(nim) && nim !== "") {
      // misalnya query nya angka
      for (let i = 0; i < database.length; i++) {
        for(let j = 1; j <= 2; j++){
          if (database[i][j].includes(nim)){
            temp.push(database[i]);
          }
        }
      }
    } else if (typeof nim === "string" && nim !== "") {
      for (let i = 0; i < database.length; i++) {
        if (database[i][0].toLowerCase().includes(nim.toLowerCase())){
          temp.push(database[i]);
        }
      }
    }
    return temp; // Nanti disini logik buat searchingnya
  };
}
