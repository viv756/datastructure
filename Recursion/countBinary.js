function b(n) {
  if (n === 0) return 2;
  if (n === 1) return 3;

  return b(n - 1) + b(n - 2);
}

console.log(b(3))