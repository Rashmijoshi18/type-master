// import { useLocation, Link } from 'react-router-dom';

// const ResultPage = () => {
//   const location = useLocation();
//   const { wpm, accuracy } = location.state || {};

//   return (
//     <div className="page">
//       <h2>Result</h2>
//       <p><strong>WPM:</strong> {wpm}</p>
//       <p><strong>Accuracy:</strong> {accuracy}%</p>
//       <Link to="/test"><button>Try Again</button></Link>
//     </div>
//   );
// };

// export default ResultPage;
import { useLocation, Link } from 'react-router-dom';
// import './ResultPage.css';

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
    <div className="result-container">
      <div className="result-card fade-in">
        <h2>🎉 Typing Test Results</h2>
        <p><strong>Words Per Minute:</strong> <span className="score">{wpm}</span></p>
        <p><strong>Accuracy:</strong> <span className="score">{accuracy}%</span></p>
        <p className="feedback">{getFeedback()}</p>

        <Link to="/test">
          <button className="try-again-btn pulse">Try Again</button>
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
