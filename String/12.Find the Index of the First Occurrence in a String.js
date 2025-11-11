/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const h = haystack.length;
  const n = needle.length;

  for (let i = 0; i <= h - n; i++) {
    let j = 0;
    while (j < n) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      j++;
    }
    if (j === n) return i;
  }

  return -1;
};

