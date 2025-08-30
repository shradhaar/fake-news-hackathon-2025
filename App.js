import React, { useState } from "react";
import questions from "./questions.json";

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);

  const question = questions[current];

  function handleAnswer(index) {
    setSelected(index);
    if (index === question.fakeIndex) {
      setScore(score + 10);
    }
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  }

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Game Over 🎉</h1>
        <p className="text-xl">Your Score: {score}</p>
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            setCurrent(0);
            setScore(0);
            setFinished(false);
          }}
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Spot the Fake News 📰</h1>
      <p className="mb-4">{question.question}</p>
      <div className="grid gap-3 w-full max-w-md">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className={`p-3 rounded border ${
              selected === null
                ? "bg-white hover:bg-gray-100"
                : i === question.fakeIndex
                ? "bg-green-300"
                : selected === i
                ? "bg-red-300"
                : "bg-white"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {selected !== null && (
        <p className="mt-4 italic text-sm">{question.explanation}</p>
      )}
    </div>
  );
}

export default App;