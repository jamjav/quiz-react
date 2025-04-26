import React from "react";
import { Button } from "./ui/button";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function QuestionCard({
  current,
  questions,
  selected,
  setSelected,
  handleNext,
  timeLeft,
  timeLeftInitial,
}) {
  const question = questions[current];

  return (
    <div className="space-y-4">
      <div className="text-lg font-bold text-center text-blue-700 bg-gray-100 py-2 rounded-md shadow-md mb-4">
        Progreso: {current + 1} de {questions.length} preguntas (
        {Math.round(((current + 1) / questions.length) * 100)}%)
      </div>
      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-blue-600"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      <div className="text-sm font-medium text-center text-green-700 bg-gray-100 py-2 rounded-md shadow-md mb-4">
        Subtema: {question.subtheme || "Sin subtema"}
      </div>
      <div className="text-2xl font-bold text-center text-white bg-blue-800 p-4 rounded-md shadow-md">
        <ReactMarkdown>{question.question}</ReactMarkdown>
      </div>
      {question.code && (
        <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mb-4">
          <SyntaxHighlighter language="javascript" style={materialDark}>
            {question.code}
          </SyntaxHighlighter>
        </div>
      )}
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-full text-left px-4 py-2 border rounded-md ${
              selected === index
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            <div className="answer text-center">
              <ReactMarkdown>{option}</ReactMarkdown>
            </div>
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="w-full flex items-center space-x-2">
          <span className="text-gray-400">Tiempo restante: {timeLeft}s</span>
          <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className={`h-full ${
                timeLeft <= 15 ? "bg-red-600" : "bg-blue-600"
              }`}
              style={{ width: `${(timeLeft / timeLeftInitial) * 100}%` }}
            ></div>
          </div>
        </div>
        <Button
          onClick={handleNext}
          disabled={selected === null}
          className={`bg-blue-600 hover:bg-blue-700 ${
            selected === null ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
