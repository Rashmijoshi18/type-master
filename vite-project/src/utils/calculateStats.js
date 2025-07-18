export const calculateStats = (target, input, durationInSeconds) => {
  const inputWords = input.trim().split(/\s+/);
  const targetWords = target.trim().split(/\s+/);

  let correct = 0;
  for (let i = 0; i < inputWords.length; i++) {
    if (inputWords[i] === targetWords[i]) correct++;
  }

  const wpm = Math.round((inputWords.length / durationInSeconds) * 60);
  const accuracy = Math.round((correct / targetWords.length) * 100);

  return { wpm, accuracy, totalWords: inputWords.length, correct };
};
