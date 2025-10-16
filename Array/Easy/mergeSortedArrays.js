var merge = function (nums1, m, nums2, n) {


    let midx = m - 1
    let nidx = n - 1
    let right = m + n - 1

    while (nidx >= 0) {
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[right] = nums1[midx]
            midx--
        } else {
            nums1[right] = nums2[nidx]
            nidx--
        }
        right--
    }

}


console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
