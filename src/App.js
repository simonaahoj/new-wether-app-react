import React from "react"
import './App.css';
import Weather from "./Weather";


function App() {
  return (
  <div className="App">
      <div className="container">
         <h1> Weather App</h1>
         <Weather />
          <footer>
          This project was coded by Simona Obornikova {""}
          <a href="https://github.com/simonaahoj/new-wether-app-react"target="_blank">open-sourced on GitHub</a>
          </footer>
     </div>
  </div>
  );
}

export default App;
