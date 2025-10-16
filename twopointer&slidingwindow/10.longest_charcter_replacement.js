// bruteforce

// “My brute force approach is:
// For every possible substring,
// Count the frequency of characters inside it,
// Track the most frequent character,
// Then check how many replacements would be needed to make all characters the same:
// (substring length - max frequency).
// If that number is ≤ k, then the substring is valid, and I update my answer with its length.”
class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      let count = new Map();
      let maxf = 0;
      for (let j = i; j < s.length; j++) {
        count.set(s[j], (count.get(s[j]) || 0) + 1);
        maxf = Math.max(maxf, count.get(s[j]));
        // This tells us how many characters need to be replaced to make the substring all the same letter.
        if (j - i + 1 - maxf <= k) {
          res = Math.max(res, j - i + 1);
        }
      }
    }
    return res;
  }
}

// sliding window

class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let res = 0;
    let charSet = new Set(s);

    for (let c of charSet) {
      let count = 0,
        l = 0;
      for (let r = 0; r < s.length; r++) {
        if (s[r] === c) {
          count++;
        }

        // this is used to reduce the window size because if the replacement is greater than k
        while (r - l + 1 - count > k) {
          if (s[l] === c) {
            count--;
          }
          l++;
        }

        res = Math.max(res, r - l + 1);
      }
    }
    return res;
  }
}

// optimal sliding window
class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let count = new Map();
    let res = 0;

    let l = 0,
      maxf = 0;
    for (let r = 0; r < s.length; r++) {
      count.set(s[r], (count.get(s[r]) || 0) + 1);
      maxf = Math.max(maxf, count.get(s[r]));

      while (r - l + 1 - maxf > k) {
        count.set(s[l], count.get(s[l]) - 1);
        l++;
      }
      res = Math.max(res, r - l + 1);
    }

    return res;
  }
}
