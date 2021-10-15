fetch('data.txt')
  .then(response => response.text())
  .then(text => localStorage.setItem("studentData", text))
