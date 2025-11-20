/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];

  let backTrack = (path, remainingString) => {
    if (!remainingString.length) {
      res.push([...path]);
    }

    for (let i = 1; i <= remainingString.length; i++) {
      let choice = remainingString.substring(0, i);

      if (!isPalindrome(choice)) continue;

      path.push(choice);
      backTrack(path, remainingString.substring(i));
      path.pop();
    }
  };
  backTrack([], s);
  return res;
};

function isPalindrome(s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i++] !== s[j--]) return false;
  }
  return true;
}
