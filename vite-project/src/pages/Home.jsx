
import { useEffect } from "react";
// import './Home.css';

const Home = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="home-container">
      <h1 className="heading fade-in-up">
        Welcome to <span className="brand">TypeMaster</span>
      </h1>
      <p className="subheading fade-in-up fade-delay-1">
        Sharpen your typing skills with interactive tests. Choose from <strong>Easy</strong>, <strong>Medium</strong>, or <strong>Hard</strong> levels and track your <em>real-time WPM</em> and <em>accuracy</em>!
      </p>

      <div className="features">
        <div className="card fade-in-up fade-delay-1 hover-scale">
          <h3>🎯 Real-time WPM</h3>
          <p>Track your Words Per Minute live as you type!</p>
        </div>
        <div className="card fade-in-up fade-delay-2 hover-scale">
          <h3>📈 Result Insights</h3>
          <p>Get instant feedback on accuracy and speed.</p>
        </div>
        <div className="card fade-in-up fade-delay-3 hover-scale">
          <h3>⚙️ Difficulty Levels</h3>
          <p>Test yourself with short or long, easy or hard paragraphs.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
