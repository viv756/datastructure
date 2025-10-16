var balancedStringSplit = function(s) {
    let count  = 0
    let res = 0

    for(let ch of s){
      count += (ch === 'R') ? 1 : -1
       if(count === 0) res++
    }

    return res
};