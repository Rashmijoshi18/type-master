import { useEffect, useState } from 'react';

const TestPage = () => {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState('easy');
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState({ wpm: 0, accuracy: 0 });

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
      setShowResult(false);
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

  const isWordMeaningless = (word) => {
    // Check for meaningless patterns
    const cleanWord = word.toLowerCase().trim();
    
    // Empty or whitespace only
    if (!cleanWord) return false;
    
    // Random character sequences (more than 2 consecutive same chars)
    if (/(.)\1{2,}/.test(cleanWord)) return true;
    
    // Only numbers
    if (/^\d+$/.test(cleanWord)) return true;
    
    // Random symbols or special characters only
    if (/^[^a-zA-Z]+$/.test(cleanWord) && cleanWord.length > 1) return true;
    
    // Very short random sequences
    if (cleanWord.length <= 2 && !/^(i|a|am|is|in|on|at|to|of|or|an|me|we|he|it|be|do|go|no|so|my|up)$/.test(cleanWord)) {
      return true;
    }
    
    // Random keyboard mashing patterns
    const keyboardRows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    for (let row of keyboardRows) {
      if (cleanWord.length >= 4) {
        for (let i = 0; i <= row.length - 4; i++) {
          const sequence = row.substr(i, 4);
          if (cleanWord.includes(sequence) || cleanWord.includes(sequence.split('').reverse().join(''))) {
            return true;
          }
        }
      }
    }
    
    return false;
  };

  const renderTextWithHighlights = () => {
    const targetWords = text.split(' ');
    
    return targetWords.map((word, index) => {
      return (
        <span key={index} className="inline-block mr-1">
          {word}
        </span>
      );
    });
  };

  const renderUserInputWithErrors = () => {
    const targetWords = text.split(' ');
    const userWords = userInput.split(' ');
    
    return userWords.map((userWord, index) => {
      const targetWord = targetWords[index] || '';
      const isCorrect = userWord === targetWord;
      const isMeaningless = isWordMeaningless(userWord);
      const needsSpace = index < userWords.length - 1 || userInput.endsWith(' ');
      
      let className = 'inline ';
      if (((!isCorrect && targetWord !== '') || isMeaningless) && userWord !== '') {
        className += 'border-b-2 border-red-500';
      }
      
      return (
        <span key={index}>
          <span className={className}>{userWord}</span>
          {needsSpace && ' '}
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

    setResults({ wpm, accuracy });
    setShowResult(true);
  };

  const resetTest = () => {
    setShowResult(false);
    fetchParagraphFromAPI();
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 sm:p-10 border border-gray-200 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8">Test Results</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-2xl font-semibold text-blue-800">Words Per Minute</p>
              <p className="text-4xl font-bold text-blue-600 mt-2">{results.wpm}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-2xl font-semibold text-green-800">Accuracy</p>
              <p className="text-4xl font-bold text-green-600 mt-2">{results.accuracy}%</p>
            </div>
            <button
              onClick={resetTest}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition"
            >
              🔄 Take Another Test
            </button>
          </div>
        </div>
      </div>
    );
  }

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

            <div className="relative">
              <div className="absolute inset-0 p-4 pointer-events-none text-gray-700 whitespace-pre-wrap leading-6 z-10 bg-transparent">
                {renderUserInputWithErrors()}
              </div>
              <textarea
                className="w-full p-4 min-h-[130px] border border-blue-300 rounded-lg resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-transparent bg-transparent relative z-20"
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
                style={{ caretColor: '#374151' }}
              ></textarea>
            </div>

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