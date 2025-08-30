import React, { useState, useEffect, useRef } from "react";
import questions from "./questions.json";

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameMode, setGameMode] = useState("single"); // "single" or "team"
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [showTips, setShowTips] = useState(true);
  const [usedQuestions, setUsedQuestions] = useState(new Set());
  
  const timerRef = useRef(null);

  // Get current question with smart rotation to avoid immediate repetition
  const question = questions[current % questions.length];

  // Countdown timer effect
  useEffect(() => {
    if (gameStarted && !finished && !showExplanation) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Time's up - auto-select wrong answer
            handleTimeUp();
            return 10;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [current, gameStarted, finished, showExplanation]);

  function handleTimeUp() {
    // Auto-select wrong answer when time runs out
    const wrongAnswer = (current % questions.length) < questions.length ? 
      (questions[current % questions.length].fakeIndex === 0 ? 1 : 0) : 0;
    handleAnswer(wrongAnswer);
  }

  function handleAnswer(index) {
    setSelected(index);
    setShowExplanation(true);
    
    if (index === question.fakeIndex) {
      if (gameMode === "single") {
        setScore(score + 10);
      } else {
        if (currentPlayer === 1) {
          setPlayer1Score(player1Score + 10);
        } else {
          setPlayer2Score(player2Score + 10);
        }
      }
    }

    // Clear timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }

  function getNextQuestionIndex() {
    // Smart rotation: try to use questions that haven't been used recently
    const totalQuestions = questions.length;
    let nextIndex = current + 1;
    
    // If we've used most questions, reset the used questions set
    if (usedQuestions.size >= totalQuestions * 0.8) {
      setUsedQuestions(new Set());
    }
    
    // Try to find a question that hasn't been used recently
    let attempts = 0;
    while (attempts < totalQuestions) {
      const candidateIndex = nextIndex % totalQuestions;
      if (!usedQuestions.has(candidateIndex)) {
        setUsedQuestions(prev => new Set([...prev, candidateIndex]));
        return candidateIndex;
      }
      nextIndex++;
      attempts++;
    }
    
    // If all questions have been used, just move to next
    return nextIndex % totalQuestions;
  }

  function nextQuestion() {
    setShowExplanation(false);
    setSelected(null);
    setTimeLeft(10);
    
    if (gameMode === "single") {
      // Infinite mode - always continue with smart rotation
      const nextIndex = getNextQuestionIndex();
      setCurrent(nextIndex);
      setQuestionCount(questionCount + 1);
    } else {
      // Team mode - check if 10 questions completed
      if (questionCount + 1 < 10) {
        const nextIndex = getNextQuestionIndex();
        setCurrent(nextIndex);
        setQuestionCount(questionCount + 1);
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      } else {
        setFinished(true);
      }
    }
  }

  function resetGame() {
    setCurrent(0);
    setScore(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setFinished(false);
    setSelected(null);
    setTimeLeft(10);
    setShowExplanation(false);
    setCurrentPlayer(1);
    setGameStarted(false);
    setQuestionCount(0);
    setUsedQuestions(new Set([0])); // Mark first question as used
  }

  function returnToHome() {
    // Clear timer if running
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    resetGame();
    setShowTips(false);
  }

  function goToGameModes() {
    setShowTips(false);
  }

  if (showTips) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">🎯 How to Play Spot the Fake News</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">📖 Game Rules</h2>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">1</div>
                  <p className="text-gray-700">Read the question carefully - one headline is fake!</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">2</div>
                  <p className="text-gray-700">You have 10 seconds to choose your answer</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">3</div>
                  <p className="text-gray-700">Select the headline you think is fake</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">4</div>
                  <p className="text-gray-700">Review the explanation and learn why it's fake</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">💡 Pro Tips</h2>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">💡</div>
                  <p className="text-gray-700">Look for sensational language and extreme claims</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">💡</div>
                  <p className="text-gray-700">Check if the story seems too good to be true</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">💡</div>
                  <p className="text-gray-700">Pay attention to timing and context</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">💡</div>
                  <p className="text-gray-700">Trust your instincts - if it feels off, it probably is!</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">🎮 Game Modes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-blue-700">Single Player Mode:</p>
                <p className="text-blue-600">Infinite questions - practice and improve your skills!</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Team Mode:</p>
                <p className="text-blue-600">10 questions - two players take turns</p>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <button
              className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              onClick={goToGameModes}
            >
              Let's Play! 🚀
            </button>
            
            <div className="text-sm text-gray-500">
              <p>Ready to test your fake news detection skills?</p>
              <p>Click the button above to choose your game mode!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <h1 className="text-4xl font-bold mb-8 text-indigo-800">Spot the Fake News 📰</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">Choose Game Mode</h2>
          
          <div className="space-y-4">
            <button
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                gameMode === "single" 
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700" 
                  : "border-gray-300 hover:border-indigo-300"
              }`}
              onClick={() => setGameMode("single")}
            >
              <div className="text-lg font-medium">Single Player</div>
              <div className="text-sm text-gray-600">Infinite questions - play as long as you want!</div>
            </button>
            
            <button
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                gameMode === "team" 
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700" 
                  : "border-gray-300 hover:border-indigo-300"
              }`}
              onClick={() => setGameMode("team")}
            >
              <div className="text-lg font-medium">Team Mode</div>
              <div className="text-sm text-gray-600">10 questions - two players take turns</div>
            </button>
          </div>
          
          <div className="space-y-3 mt-6">
            <button
              className="w-full p-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              onClick={() => setGameStarted(true)}
            >
              Start Game
            </button>
            
            <button
              className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              onClick={() => setShowTips(true)}
            >
              📚 View Tips Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const totalScore = gameMode === "single" ? score : player1Score + player2Score;
    const winner = gameMode === "team" ? (player1Score > player2Score ? "Player 1" : player2Score > player1Score ? "Player 2" : "Tie") : null;
    
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-4xl font-bold mb-4 text-green-700">Game Over 🎉</h1>
          
          {gameMode === "single" ? (
            <div className="mb-6">
              <p className="text-2xl mb-2">Final Score: {score}</p>
              <p className="text-lg text-gray-600">Questions Answered: {questionCount}</p>
            </div>
          ) : (
            <div className="mb-6">
              <p className="text-xl mb-2">Final Scores (10 questions):</p>
              <div className="flex justify-center space-x-8">
                <div className="text-lg">
                  <span className="font-semibold">Player 1:</span> {player1Score}
                </div>
                <div className="text-lg">
                  <span className="font-semibold">Player 2:</span> {player2Score}
                </div>
              </div>
              {winner && winner !== "Tie" && (
                <p className="text-xl font-bold text-green-600 mt-2">🏆 {winner} Wins!</p>
              )}
              {winner === "Tie" && (
                <p className="text-xl font-bold text-yellow-600 mt-2">🤝 It's a Tie!</p>
              )}
            </div>
          )}
          
          <div className="space-y-3">
            <button
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              onClick={resetGame}
            >
              Play Again
            </button>
            <button
              className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              onClick={returnToHome}
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showExplanation) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-orange-700">
            {selected === question.fakeIndex ? "✅ Correct!" : "❌ Incorrect!"}
          </h2>
          
          <div className="mb-6">
            <p className="text-lg font-semibold mb-2">Question:</p>
            <p className="text-gray-700 mb-4">{question.question}</p>
            
            <p className="text-lg font-semibold mb-2">Your Answer:</p>
            <p className={`p-3 rounded-lg mb-4 ${
              selected === question.fakeIndex 
                ? "bg-green-100 text-green-800 border border-green-300" 
                : "bg-red-100 text-red-800 border border-red-300"
            }`}>
              {question.options[selected]}
            </p>
            
            <p className="text-lg font-semibold mb-2">Correct Answer:</p>
            <p className="p-3 rounded-lg mb-4 bg-green-100 text-green-800 border border-green-300">
              {question.options[question.fakeIndex]}
            </p>
            
            <p className="text-lg font-semibold mb-2">Explanation:</p>
            <p className="p-3 rounded-lg bg-blue-50 text-blue-800 border border-blue-300">
              {question.explanation}
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <button
              className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              onClick={nextQuestion}
            >
              {gameMode === "single" ? "Next Question" : (questionCount + 1 < 10 ? "Next Question" : "Finish Game")}
            </button>
            <button
              className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              onClick={returnToHome}
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header with game info and Return to Home button */}
      <div className="w-full max-w-4xl mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-indigo-800">Spot the Fake News 📰</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={returnToHome}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors text-sm"
            >
              🏠 Home
            </button>
            <div className="text-right">
              {gameMode === "team" && (
                <div className="text-sm text-gray-600 mb-1">
                  Current Player: <span className="font-bold text-indigo-600">Player {currentPlayer}</span>
                </div>
              )}
              <div className="text-sm text-gray-600">
                {gameMode === "single" ? (
                  `Question ${questionCount + 1} (Infinite Mode)`
                ) : (
                  `Question ${questionCount + 1} of 10`
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Timer */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div 
            className={`h-3 rounded-full transition-all duration-1000 ${
              timeLeft > 6 ? "bg-green-500" : timeLeft > 3 ? "bg-yellow-500" : "bg-red-500"
            }`}
            style={{ width: `${(timeLeft / 10) * 100}%` }}
          ></div>
        </div>
        <div className="text-center text-lg font-semibold text-gray-700">
          Time: {timeLeft}s
        </div>
      </div>

      {/* Scores */}
      <div className="w-full max-w-4xl mb-6">
        {gameMode === "single" ? (
          <div className="text-center text-xl font-semibold text-indigo-700">
            Score: {score}
          </div>
        ) : (
          <div className="flex justify-center space-x-12">
            <div className={`text-center p-3 rounded-lg ${
              currentPlayer === 1 ? "bg-indigo-100 border-2 border-indigo-300" : "bg-gray-100"
            }`}>
              <div className="text-sm text-gray-600">Player 1</div>
              <div className="text-xl font-bold text-indigo-700">{player1Score}</div>
            </div>
            <div className={`text-center p-3 rounded-lg ${
              currentPlayer === 2 ? "bg-indigo-100 border-2 border-indigo-300" : "bg-gray-100"
            }`}>
              <div className="text-sm text-gray-600">Player 2</div>
              <div className="text-xl font-bold text-indigo-700">{player2Score}</div>
            </div>
          </div>
        )}
      </div>

      {/* Question */}
      <div className="w-full max-w-4xl text-center mb-8">
        <p className="text-xl text-gray-800 leading-relaxed">{question.question}</p>
      </div>

      {/* Answer options */}
      <div className="grid gap-4 w-full max-w-2xl">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            disabled={selected !== null}
            className={`p-4 rounded-lg border-2 text-left transition-all hover:scale-105 ${
              selected === null
                ? "bg-white hover:bg-indigo-50 border-gray-300 hover:border-indigo-300"
                : i === question.fakeIndex
                ? "bg-green-100 border-green-400 text-green-800"
                : selected === i
                ? "bg-red-100 border-red-400 text-red-800"
                : "bg-gray-100 border-gray-300 text-gray-600"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;