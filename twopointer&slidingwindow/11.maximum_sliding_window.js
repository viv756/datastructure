
// Brute Force Approach

// For each possible window (from index i to i+k-1):

// Look at all k elements inside the window.

// Find the maximum using a loop.

// Store it in the result.

// Continue until the last window.

// 🔹 Time Complexity

// For each of the n-k+1 windows, we scan k elements → O(n * k).

// Space complexity is O(1) (ignoring output array).

var maxSlidingWindow = function(nums, k) {
    let res = [];     // final result: list of maximums for each window
    let deque = [];   // monotonic deque (stores candidates for max in decreasing order)

    for (let idx = 0; idx < nums.length; idx++) {
        let num = nums[idx];

        // Step 1: Maintain decreasing order in deque
        // Remove all smaller elements from the back
        // because they can't be max if current `num` is bigger
        while (deque.length && deque[deque.length - 1] < num) {
            deque.pop();
        }
        deque.push(num);

        // Step 2: Remove elements that are outside the current window
        // Window range: [idx - k + 1, ..., idx]
        // If the element leaving the window (nums[idx - k]) 
        // is equal to the max (deque[0]), remove it
        if (idx >= k && nums[idx - k] === deque[0]) {
            deque.shift();
        }

        // Step 3: Record the max once the first full window is formed
        // That happens when idx >= k - 1
        if (idx >= k - 1) {
            res.push(deque[0]);  // front of deque is the max in current window
        }
    }

    return res;    
};


// We use a deque instead of just a queue because we need:

// fast max lookup (always at the front)

// ability to remove from both ends (small elements at the back, expired max at the front).



var maxSlidingWindow = function (nums, k) {
  const res = [];

  for (let i = 0; i <= nums.length - k; i++) {
    console.log("f");

    let left = i;
    let max = nums[left];

    while (left < i + k) {
      max = Math.max(max, nums[left]);
      left++;
    }

    res.push(max);
  }

  console.log(res);

  return res;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
