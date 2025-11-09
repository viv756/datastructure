/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};

  for (num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  let pq = new MinPriorityQueue((x) => x.freq);

  for (key in map) {
    pq.push({ val: key, freq: map[key] });
    if (pq.size() > k) {
      pq.pop();
    }
  }

  return pq.toArray().map((x) => Number(x.val));
};
