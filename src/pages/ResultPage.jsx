import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

const ResultPage = () => {
  const location = useLocation();
  const { wpm = 0, accuracy = 0 } = location.state || {};

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeScale {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const getFeedback = () => {
    if (wpm >= 80) return "🔥 You're a typing pro!";
    if (wpm >= 50) return "⚡ Great job!";
    if (wpm >= 30) return "👍 Keep practicing!";
    return "💡 Let's type some more!";
  };

  const getLevel = () => {
    if (wpm >= 80) return "Expert";
    if (wpm >= 50) return "Intermediate";
    if (wpm >= 30) return "Beginner";
    return "Novice";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center animate-[fadeScale_0.8s_ease-out]">
        
        <div className="text-5xl mb-4">{getFeedback().split(" ")[0]}</div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-2">🎉 Typing Test Results</h2>
        <p className="text-gray-500 mb-6">Here’s how you did:</p>

        <div className="bg-slate-100 rounded-xl py-6 px-4 mb-6 space-y-4">
          <div className="flex justify-between text-lg">
            <span className="font-medium text-gray-700">💬 Words Per Minute</span>
            <span className="text-blue-600 font-bold">{wpm}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="font-medium text-gray-700">🎯 Accuracy</span>
            <span className="text-green-600 font-bold">{accuracy}%</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="font-medium text-gray-700">🏅 Typing Level</span>
            <span className="text-purple-600 font-bold">{getLevel()}</span>
          </div>
        </div>

        <p className="text-lg font-medium text-gray-600 italic mb-6">{getFeedback()}</p>

        <div className="flex justify-center gap-4">
          <Link to="/test">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg transition-transform transform hover:scale-105">
              Try Again
            </button>
          </Link>
          <Link to="/">
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full text-lg transition-transform transform hover:scale-105">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;