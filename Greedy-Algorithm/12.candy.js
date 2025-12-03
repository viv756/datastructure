/**
 * @param {number[]} ratings
 * @return {number}
 */

// in here we right to left and left to right because when the rating increases we need to add more candy to the right side children but when decreasing we are not adding any candy. so we need to come from right to left and give the candys. and take the maximum from that
var candy = function (ratings) {
  let n = ratings.length;
  let ltr = Array(n).fill(1);

  let min = n;

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      ltr[i] = ltr[i - 1] + 1;
    }
  }

  let rtl = Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rtl[i] = rtl[i + 1] + 1;
    }
  }
  let ans = 0;

  for (let i = 0; i < n; i++) {
    ans += Math.max(rtl[i], ltr[i]);
  }
  return ans;
};

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let ans = ratings.length;
  let n = ratings.length;

  let i = 1;

  while (i < n) {
    if (ratings[i] === ratings[i - 1]) {
      i++;
      continue;
    }
    let up = 0;
    while (ratings[i] > ratings[i - 1]) {
      up++;
      ans += up;
      i++;
    }
    let down = 0;
    while (ratings[i] < ratings[i - 1]) {
      down++;
      ans += down;
      i++;
    }
    ans = ans - Math.min(up, down);
  }

  return ans;
};
