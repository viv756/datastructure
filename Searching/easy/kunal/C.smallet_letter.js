var nextGreatestLetter = function (letters, target) {
  let left = 0
  let right = letters.length 
  // We’re not searching for an exact match here — we’re searching for the first letter greater than target.
  // If we used <=, we’d risk:
  // Overshooting left
  // Doing an unnecessary extra iteration
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // If left < letters.length → normal index.
  // If left == letters.length → becomes 0 (wrap to first letter).
  return letters[left % letters.length];
};



// Tiny walkthrough

// letters = ["c","f","j"], target = "f"

// Start: left=0, right=3

// mid=1 → 'f' <= 'f' → left=2

// mid=2 → 'j' > 'f' → right=2

// Stop: left=2 → answer is letters[2] = 'j'.

// letters = ["c","f","j"], target = "j"

// Moves left to 3

// 3 % 3 = 0 → wraps to 'c'.