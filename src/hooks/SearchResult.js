import { useContext } from "react";
import { MahasiswaContext } from "../components/MahasiswaProvider";

export default function useSearchResult() {
  // Ini namanya Custom Hook
  const { database } = useContext(MahasiswaContext);
  return (nim) => {
    var ident;
    if (require("../components/data/kodeTPB.json").hasOwnProperty(nim.substr(0, 3))){
      ident = 1;
    } else if (require("../components/data/kodeJurusan.json").hasOwnProperty(nim.substr(0, 3))){
      ident = 2;
    }
   
    const studentData = JSON.parse(localStorage.getItem("studentData"));

    for(let i = 0; i < studentData.length; i++){
      var found = false;
      
      var matchedNIM = studentData[i][ident] && studentData[i][ident].substr(0, nim.length);
      if (matchedNIM == nim && database.length != 0){
        var j = 0;
        while (!found && j < database.length){
          if (database[j][ident] === studentData[i][ident]){
            found = true;
          }
          j++;
        }  
        if (found === false) {
          database.push(studentData[i]);
        }
        
      }
    }
    console.log(database);
    return database; // Nanti disini logik buat searchingnya
  };
}
