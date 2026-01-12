
// time
var dailyTemperatures = function (temperatures) {
  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length - 1; i++) {
    let j = i + 1;
    while (j < temperatures.length && temperatures[i] >= temperatures[j]) {
      j += 1;
    }

    if (j < temperatures.length) {
      result[i] = j - i;
    } 
  }

  return result;
};

console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]));


var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }

  return result;
};

console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]));

// This avoids checking all future days for every day (which would be O(n²)) and gives us O(n) time complexity because each index is pushed and popped at most once.