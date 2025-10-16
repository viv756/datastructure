var findWordsContaining = function (words, x) {
  const res = [];

  for (let i = 0; i < words.length; i++) {
    const s = words[i];
    let n = 0;
    while (n < s.length) {
      if (s[n] === x) {
        res.push(i);
        break;
      }
      n++;
    }
  }

  return res;
};