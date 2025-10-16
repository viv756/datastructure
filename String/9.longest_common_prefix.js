/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let pref = strs[0];
  let preLen = pref.length;

  for (let i = 1; i < strs.length; i++) {
    const s = strs[i];
    while (pref !== s.substring(0, preLen)) {
      preLen--;

      if (preLen === 0) {
        return "";
      }

      pref = pref.substring(0, preLen);
    }
  }

  return pref;
};
