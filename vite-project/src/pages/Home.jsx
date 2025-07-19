
// import { useEffect } from "react";
// // import './Home.css';
// const Home = () => {
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       @keyframes fadeInUp {
//         from { opacity: 0; transform: translateY(20px); }
//         to { opacity: 1; transform: translateY(0); }
//       }
//     `;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <div className="home-container">
//       <h1 className="heading fade-in-up">
//         Welcome to <span className="brand">TypeMaster</span>
//       </h1>
//       <p className="subheading fade-in-up fade-delay-1">
//         Sharpen your typing skills with interactive tests. Choose from <strong>Easy</strong>, <strong>Medium</strong>, or <strong>Hard</strong> levels and track your <em>real-time WPM</em> and <em>accuracy</em>!
//       </p>

//       <div className="features">
//         <div className="card fade-in-up fade-delay-1 hover-scale">
//           <h3>🎯 Real-time WPM</h3>
//           <p>Track your Words Per Minute live as you type!</p>
//         </div>
//         <div className="card fade-in-up fade-delay-2 hover-scale">
//           <h3>📈 Result Insights</h3>
//           <p>Get instant feedback on accuracy and speed.</p>
//         </div>
//         <div className="card fade-in-up fade-delay-3 hover-scale">
//           <h3>⚙️ Difficulty Levels</h3>
//           <p>Test yourself with short or long, easy or hard paragraphs.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import { useEffect } from "react";

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
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col justify-center px-4 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold animate-[fadeInUp_1s_ease-out]">
          Welcome to <span className="text-blue-600">TypeMaster</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 animate-[fadeInUp_1s_ease-out_0.2s]">
          Sharpen your typing skills with interactive tests. Choose from{" "}
          <strong className="text-gray-800">Easy</strong>,{" "}
          <strong className="text-gray-800">Medium</strong>, or{" "}
          <strong className="text-gray-800">Hard</strong> levels and track your{" "}
          <em className="text-blue-500">real-time WPM</em> and{" "}
          <em className="text-blue-500">accuracy</em>!
        </p>

        {/* Features Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white border border-gray-200 rounded-2xl p-10 min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-lg transition duration-300 animate-[fadeInUp_1s_ease-out_0.4s]">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">🎯 Real-time WPM</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Track your Words Per Minute live as you type — watch your speed grow!
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-10 min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-lg transition duration-300 animate-[fadeInUp_1s_ease-out_0.6s]">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">📈 Result Insights</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Get instant feedback on your typing accuracy, speed, and error stats.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-10 min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-lg transition duration-300 animate-[fadeInUp_1s_ease-out_0.8s]">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">⚙️ Difficulty Levels</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Try typing tests with short, long, easy, or advanced paragraph levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
