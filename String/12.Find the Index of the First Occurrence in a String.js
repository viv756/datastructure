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

// Time Complexity: O(h × n) (worst case)
// Space Complexity: O(1)

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const haystackLength = haystack.length;
    const needleLength = needle.length;

    if (needleLength === 0) return 0; // Edge case

    // Step 1: Build the LPS (Longest Prefix Suffix) array for the pattern (needle)
    const lps = new Array(needleLength).fill(0);
    let prefixIndex = 0; // length of previous longest prefix suffix
    let currentIndex = 1;

    while (currentIndex < needleLength) {
        if (needle[prefixIndex] === needle[currentIndex]) {
            prefixIndex++;
            lps[currentIndex] = prefixIndex;
            currentIndex++;
        } else {
            if (prefixIndex !== 0) {
                prefixIndex = lps[prefixIndex - 1];
            } else {
                lps[currentIndex] = 0;
                currentIndex++;
            }
        }
    }

    // Step 2: Search the needle inside the haystack using LPS array
    let textIndex = 0;    // index for haystack
    let patternIndex = 0; // index for needle

    while (textIndex < haystackLength) {
        if (haystack[textIndex] === needle[patternIndex]) {
            textIndex++;
            patternIndex++;
        } else {
            if (patternIndex !== 0) {
                patternIndex = lps[patternIndex - 1];
            } else {
                textIndex++;
            }
        }

        // If full pattern matched
        if (patternIndex === needleLength) {
            return textIndex - needleLength; // return starting index
        }
    }

    return -1; // If not found
};
