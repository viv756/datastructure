/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sHash = {};

  for (let i = 0; i < s.length; i++) {
    sHash[s[i]] = (sHash[s[i]] || 0) + 1;
  }

  for (let j = 0; j < t.length; j++) {
    if (!sHash[t[j]] || sHash[t[j]] === 0) {
      return false;
    }

    sHash[t[j]] -= 1;
  }

  return true;
};

// time = o(n)
// space = o(k)