var isPalindrome = function(s) {
    
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let right = s.length-1
    
    for(let left = 0;left<s.length-1;left++){
        if(s[left] !== s[right]){
            return false
        }
        right--
    }

    return true

};