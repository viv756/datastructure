function star(n) {
  for (let i = n; i > 0; i--) {
    let row = " ";
    for (let j = 0; j <= n; j++) {
      if (j >= i) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }

    console.log(row);
  }
}

star(5);
