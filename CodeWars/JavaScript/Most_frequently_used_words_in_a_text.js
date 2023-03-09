function topThreeWords(text) {
  const matches = text.toLowerCase().match(/[a-z]+('[a-z]+)*/g) || [];
  const counts = matches.reduce(
    (acc, word) => ((acc[word] = -~acc[word]), acc),
    {}
  );
  return Object.keys(counts)
    .sort((a, b) => counts[b] - counts[a])
    .slice(0, 3);
}
