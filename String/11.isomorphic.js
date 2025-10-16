/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const charIndexs = {};
  const charIndext = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in charIndexs)) {
      charIndexs[s[i]] = i;
    }

    if (!(t[i] in charIndext)) {
      charIndext[t[i]] = i;
    }

    // This checks whether the pattern of appearance is the same.
    if (charIndexs[s[i]] !== charIndext[t[i]]) {
      return false;
    }
  }

  return true;
};

// 🧠 Why use indices?

// We use indices to track the position where each character first appeared.

// 🧩 The key idea:

// If two strings are isomorphic, then the pattern of first occurrences must match.