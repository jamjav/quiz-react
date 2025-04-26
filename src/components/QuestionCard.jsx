import React from "react";
import { Button } from "./ui/button";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Se agrega la propiedad `isNextDisabled` para controlar el estado del botón de avanzar.
export default function QuestionCard({
  current,
  questions,
  selected,
  setSelected,
  handleNext,
  timeLeft,
  timeLeftInitial,
  isNextDisabled,
}) {
  const question = questions[current];

  return (
    <div className="card bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 max-w-screen-md mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-2">
          <ReactMarkdown>{question.question}</ReactMarkdown>
        </h1>
        <h2 className="text-lg font-medium text-blue-400">
          Progreso: {current + 1} de {questions.length} preguntas (
          {Math.round(((current + 1) / questions.length) * 100)}%)
        </h2>
        <h3 className="text-md font-medium text-green-400">
          Subtema: {question.subtheme || "Sin subtema"}
        </h3>
      </div>
      <div className="progress-bar w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="progress-bar-inner h-full bg-blue-500"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      {question.code && (
        <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
          <SyntaxHighlighter language="javascript" style={materialDark}>
            {question.code}
          </SyntaxHighlighter>
        </div>
      )}
      <div className="options grid grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option bg-gray-700 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow-sm ${
              selected === index ? "selected bg-blue-600" : ""
            }`}
            onClick={() => {
              setSelected(index);
            }}
          >
            <div className="answer text-center">
              <ReactMarkdown>{option}</ReactMarkdown>
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="timer w-full flex items-center space-x-2 text-white">
          <span>Tiempo restante: {timeLeft}s</span>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full ${
                timeLeft <= 15 ? "bg-red-600" : "bg-blue-500"
              }`}
              style={{ width: `${(timeLeft / timeLeftInitial) * 100}%` }}
            ></div>
          </div>
        </div>
        <Button
          onClick={() => {
            if (!isNextDisabled) {
              handleNext();
            }
          }}
          disabled={isNextDisabled}
          className={`next bg-blue-600 hover:bg-blue-700 ${
            isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
