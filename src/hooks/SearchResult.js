import { useContext } from "react";
import { MahasiswaContext } from "../components/MahasiswaProvider";

export default function useSearchResult() {
  // Ini namanya Custom Hook
  const { database } = useContext(MahasiswaContext);
  return (nim) => {
    var temp = [];
    if (!isNaN(nim) && nim !== "" && nim.length >= 3) {
      // misalnya query nya angka
      var ident;
      if (
        require("../components/data/kodeTPB.json").hasOwnProperty(
          nim.substr(0, 3)
        )
      ) {
        ident = 1;
      } else if (
        require("../components/data/kodeJurusan.json").hasOwnProperty(
          nim.substr(0, 3)
        )
      ) {
        ident = 2;
      }

      for (let i = 0; i < database.length; i++) {
        var found = false;
        var matchedNIM = database[i][ident].substr(0, nim.length);
        if (matchedNIM === nim) {
          var j = 0;
          while (!found && j < temp.length) {
            if (temp[j][ident] === database[i][ident]) {
              found = true;
            }
            j++;
          }
          if (found === false) {
            temp.push(database[i]);
          }
        }
      }
    } else if (typeof nim === "string" && nim !== "") {
      for (let i = 0; i < database.length; i++) {
        let found = false;
        let j = 0;
        var splittedName = database[i][0];
        if (!nim.includes(" ")) {
          splittedName = splittedName.split(" ");
        }

        if (!nim.includes(" ")) {
          while (!found && j < splittedName.length) {
            var splittedSubName = splittedName[j].substr(0, nim.length);
            if (splittedSubName.toLowerCase() === nim.toLowerCase()) {
              found = true;
            }
            j++;
          }
          if (found === true) {
            temp.push(database[i]);
          }
        } else {
          if (
            splittedName.substr(0, nim.length).toLowerCase() ===
            nim.toLowerCase()
          ) {
            temp.push(database[i]);
          }
        }
      }
    }
    return temp; // Nanti disini logik buat searchingnya
  };
}
