import './App.css';
import './loadData.js';
import './displayData.js';
function App() {
  return (
    <div class = "App">
      <div class = "banner">
        <div class = "textBox">
          <h1>NIMFinder</h1>
          <p>but not really</p>
        </div>
        <input type = 'text' id = "queryInput" placeholder = "Type NIM...."></input>
        <input type = 'button' id = "searchButton" value = "Find..."></input>
      </div>
      <div class = "results">
        <h1>Menggila</h1>
        <div class = "NIM">
        
        </div>
      </div>
    </div>

    
  );
}

export default App;
