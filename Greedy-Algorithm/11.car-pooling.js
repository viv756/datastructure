/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let loc = Array(1001).fill(0)

// i used location array to mark when people is get in and get out from the car
    for(let i=0;i<trips.length;i++){
        let [passengers,from,to] = trips[i]

        loc[from] += passengers
        loc[to] -= passengers
    }

    let usedCapacity = 0

    for(let i =0;i<1001;i++){
        usedCapacity += loc[i]
        if(usedCapacity > capacity){
            return false
        }
    }

    return true
};
