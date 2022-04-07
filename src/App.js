import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <footer>
        Project coded by{" "}
        <a
          href="https://affectionate-swartz-08ee25.netlify.app/"
          target="_blank"
          title="visit Malin´s coding portfolio"
        >
          Malin Kirjonen
        </a>{" "}
        and this is{" "}
        <a
          href="https://github.com/MalinKirjonen/react-weather-app"
          title="open-source link"
          target="_blank"
        >
          Open Sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
