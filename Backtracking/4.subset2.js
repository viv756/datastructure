/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // duplicate elememnts need to come together
    nums.sort((a,b)=> a-b)

    const res = []
    const backTrack = (path, start) => {
        res.push([...path])

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i - 1] === nums[i]) continue

            path.push(nums[i])
            backTrack(path, i + 1)
            path.pop()
        }
    }

    backTrack([], 0)
    return res

};

// T = O(n*2^n)
// S = o(n)