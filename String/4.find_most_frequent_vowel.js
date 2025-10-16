var maxFreqSum = function (s) {
  const map = {};
  let maxConstant = 0;
  let maxVowel = 0;

  for (ch of s) {
    map[ch] = (map[ch] || 0 )+ 1;
  }

  const vowels = "aeiou";


  for (let key in map) {
    if (vowels.includes(key)) {
      maxVowel = Math.max(maxVowel, map[key]);
    } else {
      maxConstant = Math.max(maxConstant, map[key]);
    }
  }

  return maxConstant + maxVowel;
};

console.log(maxFreqSum("successes"));


var maxFreqSum = function (s) {

    const map = {}
    let maxConstant = 0
    let maxVowel = 0
    const vowels = 'aeiou'

    for (ch of s) {
        map[ch] = (map[ch] || 0) + 1
        if (vowels.includes(ch)) {
            maxVowel = Math.max(maxVowel, map[ch])
        } else {
            maxConstant = Math.max(maxConstant, map[ch])
        }

    }

    return maxConstant + maxVowel

};