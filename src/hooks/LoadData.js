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
  var tempData = [
    ["Mahasiswa 1", "16520001", "13520001"],
    ["Mahasiswa 2", "16520002", "13520002"],
    ["Mahasiswa 3", "16520003"]]
  var i = 0;

  for(i = 0; i < tempData.length; i++){
    var kode = "";
    var data = ""
    
    if (tempData[i].length === 2){
      tempData[i].push("-");
      kode = tempData[i][1].substr(0, 3);
      data = "TPB "+ require("../components/data/kodeTPB.json")[parseInt(kode)];

    } else if (tempData[i].length === 3){
      kode = tempData[i][2].substr(0, 3);
      data = require("../components/data/kodeJurusan.json")[parseInt(kode)];
    }

    tempData[i].push(data);
  }

  return tempData;
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
