import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Project coded by{" "}
          <a
            href="https://affectionate-swartz-08ee25.netlify.app/"
            target="_blank"
            title="visit Malin´s coding portfolio"
            rel="noreferrer"
          >
            Malin Kirjonen
          </a>{" "}
          and this is{" "}
          <a
            href="https://github.com/MalinKirjonen/react-weather-app"
            title="open-source link"
            target="_blank"
            rel="noreferrer"
          >
            Open Sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
