/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=> a - b)
    const res = []

  for (let i = 0; i < nums.length; i++){
      //  in here we are checking that this element is already used or not duplicate check
        if(i> 0 && nums[i] === nums[i - 1]){
            continue
        }

        let j = i+1
        let k = nums.length-1 

        while(j<k){
            let total = nums[i] + nums[j] + nums[k]

            if(total > 0){
                k--
            }else if(total < 0){
                j++
            }else{
                res.push([nums[i], nums[j], nums[k]]);
                j++;
              // check j is already used duplicate check
                while(j<k && nums[j] === nums[j - 1]){
                    j++
                }
            }
        }
    }

    return res
};



// bruteforce

var threeSum = function(nums) {
  const n = nums.length;
  const result = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          // sort to avoid duplicates like [1, -1, 0] vs [-1, 0, 1]
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          result.add(triplet.toString()); // store as string to avoid duplicate arrays
        }
      }
    }
  }

  // convert back to array format
  // [ "-1,0,1", "-2,1,1" ] this to this [ ["-1", "0", "1"], ["-2", "1", "1"] ]
  return Array.from(result).map(str => str.split(",").map(Number));
};
