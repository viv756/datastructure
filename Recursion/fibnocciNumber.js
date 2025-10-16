function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

function fibRec(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibRec(n - 1) + fibRec(n - 2);
}

console.log(fibRec(7));
