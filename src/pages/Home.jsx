import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      
      .feature-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }
      
      .feature-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
        transition: left 0.5s;
      }
      
      .feature-card:hover::before {
        left: 100%;
      }
      
      .feature-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        border-color: #3b82f6;
      }
      
      .feature-card:hover h3 {
        animation: pulse 1s infinite;
        color: #2563eb;
      }
      
      .cta-button {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      
      .cta-button::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
      }
      
      .cta-button:hover::before {
        width: 300px;
        height: 300px;
      }
      
      .cta-button:hover {
        transform: translateY(-2px);
        animation: glow 2s infinite;
      }
      
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col justify-center px-4 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        
        <h1 className="text-4xl sm:text-5xl font-extrabold ">
          Welcome to <span className="text-blue-600">TypeMaster</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 animate-[fadeInUp_1s_ease-out_0.2s] description-hover cursor-pointer transition-all duration-300">
          Sharpen your typing skills with interactive tests. Choose from{" "}
          <strong className="text-gray-800 hover:text-blue-600 transition-colors duration-200">Easy</strong>,{" "}
          <strong className="text-gray-800 hover:text-green-600 transition-colors duration-200">Medium</strong>, or{" "}
          <strong className="text-gray-800 hover:text-red-600 transition-colors duration-200">Hard</strong> levels and track your{" "}
          <em className="text-blue-500 hover:text-blue-700 transition-colors duration-200">real-time WPM</em> and{" "}
          <em className="text-blue-500 hover:text-blue-700 transition-colors duration-200">accuracy</em>!
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="feature-card bg-white border border-gray-200 rounded-2xl p-10 min-h-[220px] flex flex-col justify-center shadow-md animate-[fadeInUp_1s_ease-out_0.4s] cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 transition-all duration-300">🎯 Real-time WPM</h3>
            <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
              Track your Words Per Minute live as you type — watch your speed grow!
            </p>
          </div>

          <div className="feature-card bg-white border border-gray-200 rounded-2xl p-10 min-h-[220px] flex flex-col justify-center shadow-md animate-[fadeInUp_1s_ease-out_0.6s] cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 transition-all duration-300">📈 Result Insights</h3>
            <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
              Get instant feedback on your typing accuracy, speed, and error stats.
            </p>
          </div>

          <div className="feature-card bg-white border border-gray-200 rounded-2xl p-10 min-h-[220px] flex flex-col justify-center shadow-md animate-[fadeInUp_1s_ease-out_0.8s] cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 transition-all duration-300">⚙ Difficulty Levels</h3>
            <p className="text-gray-700 text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
              Try typing tests with short, long, easy, or advanced paragraph levels.
            </p>
          </div>
        </div>

        <div className="mt-8 animate-[fadeInUp_1s_ease-out_1s]">
          <button
            onClick={() => navigate("/test")}
            className="cta-button bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg relative z-10 transition-all duration-300"
          >
            <span className="relative z-10">Start Typing Test</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;