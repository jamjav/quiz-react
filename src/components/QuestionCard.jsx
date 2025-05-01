import React from "react";
import { Button } from "./ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

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
        <div className="flex-none bg-gray-800 border-b border-gray-700 p-3">
          <div className="text-center space-y-1.5">
            <div className="text-blue-400 text-base md:text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Progreso:** ${
                current + 1
              } de ${questions.length} preguntas (${Math.round(
                ((current + 1) / questions.length) * 100
              )}%)`}</ReactMarkdown>
            </div>
            <div className="text-green-400 text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text drop-shadow-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Subtema:** ${
                question.subtheme || "Sin subtema"
              }`}</ReactMarkdown>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden mt-2">
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
          <div className="p-4 md:p-5 max-w-3xl mx-auto">
            <div className="w-full space-y-6">
              {/* Pregunta con nuevo diseño */}
              <div className="bg-gray-900/50 rounded-lg p-4 md:p-5 shadow-lg border border-gray-700">
                <div className="text-white text-lg md:text-xl font-medium leading-relaxed">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({children}) => <p className="mb-3 last:mb-0">{children}</p>,
                      strong: ({children}) => <strong className="text-blue-400">{children}</strong>,
                      code: ({children}) => <code className="bg-gray-800 px-1 py-0.5 rounded text-pink-400">{children}</code>
                    }}
                  >
                    {question.question}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Código si existe */}
              {question.code && (
                <div className="bg-gray-900 rounded-lg w-full overflow-hidden border border-gray-700 shadow-lg">
                  <div className="bg-gray-800 px-3 py-1.5 border-b border-gray-700">
                    <div className="text-sm font-mono text-gray-400">Código</div>
                  </div>
                  <div className="min-w-full">
                    <SyntaxHighlighter
                      language="java"
                      style={materialDark}
                      customStyle={{
                        margin: 0,
                        padding: "1rem",
                        backgroundColor: "transparent",
                        fontSize: "0.9rem",
                        maxHeight: "350px",
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

              {/* Opciones con nuevo diseño */}
              <div className="grid gap-3 w-full">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelected(index)}
                    className={`group relative w-full text-left rounded-lg transition-all duration-300 transform hover:scale-[1.01] ${
                      selected === index
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
                        : "bg-gray-800 text-white hover:bg-gray-750 border border-gray-700"
                    }`}
                  >
                    <div className="flex items-start p-3 gap-3">
                      <div className={`flex-none w-8 h-8 flex items-center justify-center rounded-lg ${
                        selected === index 
                          ? 'bg-white/20 text-white' 
                          : 'bg-gray-900 group-hover:bg-gray-800'
                      } font-bold text-base transition-colors duration-200`}>
                        {LETTERS[index]}
                      </div>
                      <div className="flex-1">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({children}) => <p className="mb-2 last:mb-0 text-base">{children}</p>,
                            code: ({children}) => <code className="bg-gray-900/50 px-1.5 py-0.5 rounded text-pink-400">{children}</code>
                          }}
                        >
                          {option}
                        </ReactMarkdown>
                      </div>
                    </div>
                    {selected === index && (
                      <div className="absolute inset-0 border-2 border-white/25 rounded-lg pointer-events-none"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pie con timer y botón */}
        <div className="flex-none bg-gray-800/95 backdrop-blur border-t border-gray-700 p-3">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full">
                <div className="flex items-center gap-3 text-white mb-2 sm:mb-0">
                  <span className="whitespace-nowrap">
                    ⏱️ <span className="font-semibold">{timeLeft}s</span>
                  </span>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        timeLeft <= 15 
                          ? "bg-gradient-to-r from-red-500 to-red-600" 
                          : "bg-gradient-to-r from-blue-500 to-blue-600"
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
                className={`w-full sm:w-auto px-6 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  selected === null
                    ? "bg-gray-600 cursor-not-allowed opacity-50"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/25"
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