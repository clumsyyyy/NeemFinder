import { useContext } from "react";
import { MahasiswaContext } from "../components/MahasiswaProvider";

export function useLoadLocalData() {
  const { setDatabase } = useContext(MahasiswaContext);

  return () => {
    const data = localStorage.getItem("database");

    if (data) {
      try {
        setDatabase(JSON.parse(data));
      } catch {
        return false;
      }
    } else {
      return false;
    }
  };
}

export async function downloadDatabase() {
  // Dummy data

  return [
    ["Mahasiswa 1", "16520001", "13520001"],
    ["Mahasiswa 2", "16520002", "13520002"],
    ["Mahasiswa 3", "16520003"],
  ];
}

export function useLoadData() {
  const { setDatabase } = useContext(MahasiswaContext);
  const localData = useLoadLocalData();

  return async () => {
    if (!localData()) {
      const data = await downloadDatabase();
      localStorage.setItem("database", JSON.stringify(data));
      setDatabase(data);
    }

    return true;
  };
}
