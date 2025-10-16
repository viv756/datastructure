var maxArea = function(height) {
    let maxArea = 0
    for(let i = 0;i<height.length - 1;i++){
        for(let j = i+1 ; j<height.length;j++){
            let min = Math.min(height[i], height[j])
            let area = min*(j-i)
            maxArea = Math.max(maxArea,area)
        }
    }

    return maxArea

};
// Time: O(n²)
// Space: O(1)

var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let area = minHeight * (right - left);
        maxArea = Math.max(maxArea, area);

        // Move the pointer with smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};