var numJewelsInStones = function(jewels, stones) {
    let jewelSet = new Set(jewels)
    let count  = 0

    for(let ch of stones){
        if(jewelSet.has(ch)){
            count++
        }
    }
    return count
};

// time : n+m

