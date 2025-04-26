import React from "react";

export default function QuizControls({
  timeLeft,
  numQuestions,
  setTimeLeft,
  setNumQuestions,
}) {
  return (
    <div className="flex flex-col items-center gap-4 mb-4">
      <div className="text-center w-full">
        <h3 className="text-lg font-bold mb-2">Tiempo por Pregunta</h3>
        <select
          className="px-4 py-2 border rounded bg-gray-800 text-white w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={timeLeft}
          onChange={(e) => setTimeLeft(parseInt(e.target.value))}
        >
          {[30, 40, 50, 60].map((t) => (
            <option key={t} value={t}>
              {t} segundos por pregunta
            </option>
          ))}
        </select>
      </div>

      <div className="text-center w-full">
        <h3 className="text-lg font-bold mb-2">Número de Preguntas</h3>
        <select
          className="px-4 py-2 border rounded bg-gray-800 text-white w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={numQuestions}
          onChange={(e) => setNumQuestions(parseInt(e.target.value))}
        >
          {[10, 15, 20, 30, 60].map((n) => (
            <option key={n} value={n}>
              {n} preguntas
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
