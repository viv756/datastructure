

// bruteforce
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;

    function allUnique(substring) {
        let set = new Set();
        for (let char of substring) {
            if (set.has(char)) return false;
            set.add(char);
        }
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substring = s.slice(i, j);
            if (allUnique(substring)) {
                maxLen = Math.max(maxLen, substring.length);
            }
        }
    }

    return maxLen;
};


// sliding window using set
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

  for (let right = 0; right < s.length; right++) {
      // using while because some charcters at the middle so to remove it we need to remove all left charcters of the charcter that we need to remove
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;    
};