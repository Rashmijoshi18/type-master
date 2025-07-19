import { useLocation, Link } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { wpm = 0, accuracy = 0 } = location.state || {};

  const getFeedback = () => {
    if (wpm >= 80) return "🔥 You're a typing pro!";
    if (wpm >= 50) return "⚡ Great job!";
    if (wpm >= 30) return "👍 Keep practicing!";
    return "💡 Let's type some more!";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center animate-fade-in">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🎉 Typing Test Results</h2>
        <p className="text-xl text-gray-700 mb-2">
          <strong className="font-bold">Words Per Minute:</strong>{" "}
          <span className="text-blue-600 font-bold">{wpm}</span>
        </p>
        <p className="text-xl text-gray-700 mb-4">
          <strong className="font-bold">Accuracy:</strong>{" "}
          <span className="text-green-600 font-bold">{accuracy}%</span>
        </p>
        <p className="text-lg font-medium text-gray-600 italic mb-6">{getFeedback()}</p>

        <Link to="/test">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg transition-transform transform hover:scale-105">
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;