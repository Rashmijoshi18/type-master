
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import paragraphs from '../data/paragraphs'; 

// const TestPage = () => {
//   const [text, setText] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [startTime, setStartTime] = useState(null);
//   const [level, setLevel] = useState('easy');
//   const navigate = useNavigate();

//   useEffect(() => {
//     generateParagraph();
//   }, [level]);

//   const generateParagraph = () => {
//     const texts = paragraphs[level];
//     const random = texts[Math.floor(Math.random() * texts.length)];
//     setText(random);
//     setUserInput('');
//     setStartTime(null);
//   };

//   const handleChange = (e) => {
//     if (!startTime) setStartTime(Date.now());
//     setUserInput(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (!userInput.trim()) return;

//     const endTime = Date.now();
//     const timeTaken = (endTime - startTime) / 1000 / 60; // in minutes
//     const wordCount = userInput.trim().split(/\s+/).length;
//     const wpm = Math.round(wordCount / timeTaken);

//     const correctChars = userInput
//       .split('')
//       .filter((char, i) => char === text[i]).length;
//     const accuracy = Math.round((correctChars / text.length) * 100);

//     navigate('/result', {
//       state: { wpm, accuracy },
//     });
//   };

//   return (
//     <div className="page">
//       <h2>Typing Test</h2>

//       <label>Select Difficulty:</label>
//       <select value={level} onChange={(e) => setLevel(e.target.value)}>
//         <option value="easy">Easy</option>
//         <option value="medium">Medium</option>
//         <option value="hard">Hard</option>
//       </select>

//       <div className="test-paragraph">
//         <p>{text}</p>
//       </div>

//       <textarea
//         value={userInput}
//         onChange={handleChange}
//         placeholder="Start typing here..."
//       ></textarea>

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default TestPage;

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

  const handleSubmit = () => {
    if (!userInput.trim()) return;

    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000 / 60;
    const wordCount = userInput.trim().split(/\s+/).length;
    const wpm = Math.round(wordCount / timeTaken);

    const correctChars = userInput
      .split('')
      .filter((char, i) => char === text[i]).length;
    const accuracy = Math.round((correctChars / text.length) * 100);

    navigate('/result', { state: { wpm, accuracy } });
  };

  return (
    <div className="page">
      <h2>Typing Test</h2>

      <label>
        Select Difficulty:{' '}
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      {loading ? (
        <p>Loading paragraph...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <>
          <div className="test-paragraph">
            <p>{text}</p>
          </div>

          <textarea
            value={userInput}
            onChange={handleChange}
            placeholder="Start typing here..."
          ></textarea>

          <div style={{ marginTop: '1rem' }}>
            <button onClick={handleSubmit} style={{ marginRight: '1rem' }}>
              ✅ Submit
            </button>
            <button onClick={fetchParagraphFromAPI}>
              🔁 Try Another Paragraph
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TestPage;
