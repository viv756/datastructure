var removeOuterParentheses = function (s) {
  let result = "";
  let depth = 0;

  for (char of s) {
    if (char === "(") {
      if (depth > 0) result += char;
      depth++;
    } else {
      depth--;
      if (depth > 0) result += char;
    }
  }

  return result;
};

var removeOuterParentheses = function (s) {
  const stack = [];
  let result = "";

  for (let char of s) {
    if (char === "(") {
      if (stack.length > 0) result += char; // not outermost
      stack.push(char);
    } else {
      stack.pop();
      if (stack.length > 0) result += char; // not outermost
    }
  }

  return result;
};
