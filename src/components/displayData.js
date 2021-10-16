var tempData = [
    ["Mahasiswa 1", "16520001", "13520001"],
    ["Mahasiswa 2", "16520002", "13520002"],
    ["Mahasiswa 3", "16520003", "13520003"]
];

localStorage.setItem("tempData", JSON.stringify(tempData));

//anggep udah ada data mahasiswa, terus traversal
//buat box di div results


export function generateContainer(){
    document.getElementById("results").innerHTML = "";
    var i = 0;
    for(i = 0; i < tempData.length; i++){
        const nama = document.createElement("h2");
        nama.innerText = tempData[i][0];
    
        const NIM_TPB = document.createElement("p");
        NIM_TPB.innerText = tempData[i][1];
        
        const NIM_Jurusan = document.createElement("p");
        NIM_Jurusan.innerText = tempData[i][2];

        const NIMContainer = document.createElement("div");
        NIMContainer.append(NIM_TPB, NIM_Jurusan);
        NIMContainer.classList.add("NIMContainer");

        const mahasiswaContainer = document.createElement("div");
        mahasiswaContainer.append(nama, NIMContainer);
    
        const container = document.createElement("div");
        container.classList.add("container")
        container.append(mahasiswaContainer);

        document.getElementById("results").append(container);
        document.getElementById("results").scrollIntoView({behavior: "smooth"});
    }
}
