var findInMountainArray = function(target, mountainArr) {
    const length = mountainArr.length();

    function findTarget(left, right, target, isUpside) {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const midVal = mountainArr.get(mid);

            if (midVal === target) {
                return mid;
            }

            if (isUpside) {
                if (target > midVal) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                if (target > midVal) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }

        return -1;
    }

    function findPeak() {
        let left = 0;
        let right = length - 1;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    const peakIndex = findPeak();

    let result = findTarget(0, peakIndex, target, true);
    if (result !== -1) {
        return result;
    }

    return findTarget(peakIndex + 1, length - 1, target, false);    
};