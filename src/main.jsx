import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import QuizApp from "./QuizApp"; // Asegúrate que el path sea correcto

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
);
