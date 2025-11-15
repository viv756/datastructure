/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    let n = nums.length

    const backTrack = (path) => {

        if (path.length === n) {
            res.push([...path])
        }

        for (let i = 0; i < n; i++) {
            if (!path.includes(nums[i])) {
                path.push(nums[i])
                backTrack(path)
                path.pop()
            }
        }
    }
    backTrack([])

    return res
};