import React from "react";

export default function QuizControls({
  timeLeft,
  numQuestions,
  setTimeLeft,
  setNumQuestions,
}) {
  return (
    <div className="flex flex-col items-center gap-6 mb-4">
      <div className="text-center w-full">
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-sm">
          Tiempo por Pregunta
        </h3>
        <div className="relative inline-block">
          <select
            className="appearance-none px-6 py-3 border-2 border-gray-700 rounded-xl bg-gray-800 text-white w-64 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 hover:bg-gray-700 cursor-pointer"
            value={timeLeft}
            onChange={(e) => setTimeLeft(parseInt(e.target.value))}
          >
            {[30, 40, 50, 60].map((t) => (
              <option key={t} value={t} className="bg-gray-800 py-2">
                {t} segundos por pregunta
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="text-center w-full">
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-sm">
          Número de Preguntas
        </h3>
        <div className="relative inline-block">
          <select
            className="appearance-none px-6 py-3 border-2 border-gray-700 rounded-xl bg-gray-800 text-white w-64 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 hover:bg-gray-700 cursor-pointer"
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
          >
            {[10, 15, 20, 30, 60].map((n) => (
              <option key={n} value={n} className="bg-gray-800 py-2">
                {n} preguntas
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
