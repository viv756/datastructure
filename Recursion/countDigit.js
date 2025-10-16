function loop(num, target) {
  let count = 0;

  while (num > 0) {
    let last = num % 10;
    if (last === target) {
      count += 1;
    }

    num = Math.floor(num / 10);
  }

  return count;
}

console.log(loop(23356733, 3));



function countDigit(n, target) {
  if (n === 0) return 0; // Base case

  const lastDigit = n % 10;
  const count = lastDigit === target ? 1 : 0;

  return count + countDigit(Math.floor(n / 10), target);
}
