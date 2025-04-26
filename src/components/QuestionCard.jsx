import React from "react";
import { Button } from "./ui/button";

export default function QuestionCard({
  current,
  questions,
  selected,
  setSelected,
  handleNext,
  timeLeft,
}) {
  const question = questions[current];

  return (
    <div className="space-y-4">
      <div className="text-lg font-medium mb-2">{question.question}</div>
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
            {option}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-400">Tiempo restante: {timeLeft}s</span>
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
