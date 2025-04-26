import React from "react";
import { Button } from "./ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
  isNextDisabled,
}) {
  const question = questions[current];

  return (
    <div className="card bg-gray-800 p-2 sm:p-6 rounded-lg shadow-lg space-y-3 sm:space-y-4 w-full max-w-[100vw] mx-auto px-2 sm:px-6">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2 break-words">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {question.question}
          </ReactMarkdown>
        </h1>
        <h2 className="text-base sm:text-lg font-medium text-blue-400">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Progreso:** ${
            current + 1
          } de ${questions.length} preguntas (${Math.round(
            ((current + 1) / questions.length) * 100
          )}%)`}</ReactMarkdown>
        </h2>
        <h3 className="text-sm sm:text-md font-medium text-green-400 break-words">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Subtema:** ${
            question.subtheme || "Sin subtema"
          }`}</ReactMarkdown>
        </h3>
      </div>
      <div className="progress-bar w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="progress-bar-inner h-full bg-blue-500"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      {question.code && (
        <div className="bg-gray-800 text-white p-2 sm:p-4 rounded-md shadow-md mt-2 overflow-x-auto max-w-full">
          <SyntaxHighlighter
            language="java"
            style={materialDark}
            customStyle={{ fontSize: "0.875rem", maxWidth: "100%" }}
            wrapLongLines={true}
          >
            {question.code}
          </SyntaxHighlighter>
        </div>
      )}
      <div className="options grid grid-cols-1 gap-2 sm:gap-4 w-full">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option bg-gray-700 hover:bg-blue-500 text-white font-medium py-2 px-3 sm:px-4 rounded-md shadow-sm text-sm sm:text-base w-full break-words ${
              selected === index ? "selected bg-blue-600" : ""
            }`}
            onClick={() => {
              setSelected(index);
            }}
          >
            <div className="answer text-center break-words">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {option}
              </ReactMarkdown>
            </div>
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mt-4 w-full">
        <div className="timer w-full flex items-center space-x-2 text-white">
          <span className="text-sm sm:text-base whitespace-nowrap">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {`⏱️ **Tiempo:** ${timeLeft}s`}
            </ReactMarkdown>
          </span>
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
          className={`next bg-blue-600 hover:bg-blue-700 w-full sm:w-auto ${
            isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            **Siguiente**
          </ReactMarkdown>
        </Button>
      </div>
    </div>
  );
}
