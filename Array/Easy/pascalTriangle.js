var generate = function (numRows) {
  const res = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    let dummyRow = [0, ...res[res.length - 1], 0];
    let row = [];

    for (let j = 0; j < dummyRow.length - 1; j++) {
      row.push(dummyRow[j] + dummyRow[j + 1]);
    }

    res.push(row);
  }

  return res;
};


// dummyRow is created by padding the previous row with 0 on both sides.

// Example:

// Previous row: [1, 2, 1]

// dummyRow: [0, 1, 2, 1, 0]

// You're adding adjacent pairs: dummyRow[j] + dummyRow[j + 1]

// So you must stop at j = dummyRow.length - 2

// because dummyRow[j + 1] would be undefined after that

// Therefore, loop runs until j < dummyRow.length - 1

