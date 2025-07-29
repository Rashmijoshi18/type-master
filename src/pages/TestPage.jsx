import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();

  useEffect(() => {
    fetchParagraphFromAPI();
  }, [difficulty]);

  const fetchParagraphFromAPI = async () => {
    setLoading(true);
    setError(null);

    try {
      let quote = '';
      let found = false;

      while (!found) {
        const res = await fetch('https://dummyjson.com/quotes/random');
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        quote = data.quote;

        const length = quote.length;
        if (
          (difficulty === 'easy' && length <= 80) ||
          (difficulty === 'medium' && length > 80 && length <= 150) ||
          (difficulty === 'hard' && length > 150)
        ) {
          found = true;
        }
      }

      setText(quote);
      setUserInput('');
      setStartTime(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load paragraph from API. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (!startTime) setStartTime(Date.now());
    setUserInput(e.target.value);
  };

  const renderTextWithHighlights = () => {
    const targetWords = text.split(' ');
    const userWords = userInput.split(' ');
    
    return targetWords.map((word, index) => {
      const userWord = userWords[index] || '';
      const isTyped = index < userWords.length;
      const isCorrect = userWord === word;
      const isCurrentWord = index === userWords.length - 1 && userInput.endsWith(' ') === false;
      
      let className = 'inline-block mr-1 ';
      if (isTyped && !isCorrect) {
        className += 'bg-red-100 text-red-700 border-b-2 border-red-500';
      } else if (isTyped && isCorrect) {
        className += 'bg-green-100 text-green-700';
      } else if (isCurrentWord) {
        className += 'bg-blue-100';
      }
      
      return (
        <span key={index} className={className}>
          {word}
        </span>
      );
    });
  };

  const handleSubmit = () => {
    if (!userInput.trim() || !startTime) return;

    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000 / 60; // in minutes

    const inputWords = userInput.trim().split(/\s+/);
    const targetWords = text.trim().split(/\s+/);

    let correct = 0;
    for (let i = 0; i < inputWords.length; i++) {
      if (inputWords[i] === targetWords[i]) correct++;
    }

    const wpm = Math.round(inputWords.length / timeTaken);
    const accuracy = Math.round((correct / targetWords.length) * 100);

    navigate('/result', { state: { wpm, accuracy } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-8 sm:p-10 border border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center mb-8">Typing Speed Test</h2>

        <div className="mb-6 text-center">
          <label className="text-lg font-medium mr-2">Select Difficulty:</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="p-2 border rounded-md bg-white shadow-sm"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {loading ? (
          <p className="text-blue-600 text-center">Loading paragraph...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <>
            <div className="select-none bg-gray-100 p-5 rounded-lg border mb-6 text-gray-800 leading-relaxed text-lg min-h-[130px]">
              {renderTextWithHighlights()}
            </div>

            <textarea
              className="w-full p-4 min-h-[130px] border border-blue-300 rounded-lg resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
              value={userInput}
              onChange={handleChange}
              placeholder="Start typing here..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
            ></textarea>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
              >
                ✅ Submit
              </button>
              <button
                onClick={fetchParagraphFromAPI}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-xl shadow transition"
              >
                🔁 New Paragraph
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;