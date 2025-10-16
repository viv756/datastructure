// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
      if (haystack.length < needle.length) {
        return -1;
    }

    for(let i =0 ; i<=haystack.length - needle.length ;i++){
        if(haystack.substring(i,i+needle.length) === needle){
            return i
        }

    }

    return -1
};
// Time: O(n·m)

// Space: O(m) (due to substring creation in JS)


// knut map

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var buildLPS = function (pattern) {
    let lps = new Array(pattern.length).fill(0)
    let len = 0     // length of current most suffix and prefix
    let i = 1

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++
            lps[i] = len
            i++
        } else {
            if (len !== 0) {
                len = lps[len - 1]
            } else {
                lps[i] = 0
                i++
            }
        }
    }

    return lps
}

var strStr = function (haystack, needle) {
    if (needle.length === 0) return 0;
    if (haystack.length < needle.length) return -1;

    const lps = buildLPS(needle);

    let i = 0; // index for haystack
    let j = 0; // index for needle

    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            if (j === needle.length) {
                return i - j; // match found
            }
        } else {
            if (j !== 0) {
                j = lps[j - 1]; // use LPS to avoid unnecessary checks
            } else {
                i++;
            }
        }
    }

    return -1; // no match found
};
