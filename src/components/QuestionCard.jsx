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
    <div className="fixed inset-0 bg-gray-900">
      <div className="h-full w-full flex flex-col">
        {/* Cabecera fija */}
        <div className="flex-none bg-gray-800 border-b border-gray-700 p-4">
          <div className="text-center space-y-2">
            <div className="text-blue-400 text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Progreso:** ${
                current + 1
              } de ${questions.length} preguntas (${Math.round(
                ((current + 1) / questions.length) * 100
              )}%)`}</ReactMarkdown>
            </div>
            <div className="text-green-400 text-md font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text drop-shadow-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Subtema:** ${
                question.subtheme || "Sin subtema"
              }`}</ReactMarkdown>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Área de pregunta y respuestas con scroll */}
        <div className="flex-1 overflow-y-auto bg-gray-800">
          <div className="p-4 max-w-4xl mx-auto">
            <div className="w-full space-y-6">
              {/* Pregunta */}
              <div className="text-white text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-sm min-h-[4rem]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {question.question}
                </ReactMarkdown>
              </div>

              {/* Código si existe */}
              {question.code && (
                <div className="bg-gray-900 rounded-md w-full overflow-x-auto">
                  <div className="min-w-full">
                    <SyntaxHighlighter
                      language="java"
                      style={materialDark}
                      customStyle={{
                        margin: 0,
                        padding: "1rem",
                        backgroundColor: "transparent",
                        fontSize: "0.875rem",
                        maxHeight: "400px",
                        overflowY: "auto",
                      }}
                      wrapLongLines={true}
                      showLineNumbers={true}
                    >
                      {question.code}
                    </SyntaxHighlighter>
                  </div>
                </div>
              )}

              {/* Opciones */}
              <div className="grid gap-3 w-full">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelected(index)}
                    className={`p-4 w-full text-left rounded-lg transition-all duration-200 min-h-[4rem] ${
                      selected === index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                    }`}
                  >
                    <div className="break-words">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {option}
                      </ReactMarkdown>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pie con timer y botón */}
        <div className="flex-none bg-gray-800 border-t border-gray-700 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full">
                <div className="flex items-center gap-3 text-white mb-2 sm:mb-0">
                  <span className="whitespace-nowrap">
                    ⏱️ <span className="font-semibold">{timeLeft}s</span>
                  </span>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        timeLeft <= 15 ? "bg-red-600" : "bg-blue-500"
                      }`}
                      style={{
                        width: `${(timeLeft / timeLeftInitial) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => {
                  if (selected !== null) {
                    handleNext();
                  }
                }}
                disabled={selected === null}
                className={`w-full sm:w-auto px-6 py-2 ${
                  selected === null
                    ? "bg-gray-600 cursor-not-allowed opacity-50"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
