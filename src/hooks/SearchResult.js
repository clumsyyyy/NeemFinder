import { useContext } from "react";
import { MahasiswaContext } from "../components/MahasiswaProvider";

export default function useSearchResult() {
  // Ini namanya Custom Hook
  const { database } = useContext(MahasiswaContext);

  return (nim) => {
    return database; // Nanti disini logik buat searchingnya
  };
}
