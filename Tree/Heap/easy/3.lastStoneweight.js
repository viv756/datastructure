/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a)

        let first = stones[0]
        let second = stones[1]

        if (first === second) {
            stones.splice(0, 2)
        } else {
            stones.splice(0, 2)
            stones.push(first - second)
        }
    }

     return stones.length === 0 ? 0 : stones[0];
};


var lastStoneWeight = function(stones) {
    let pq = new MaxPriorityQueue()

    for(let i = 0; i < stones.length; i++){
        pq.enqueue(stones[i])
    }

    while(pq.size() > 1){
        const y = pq.dequeue()
        const x = pq.dequeue()

        const diff = y - x

        if(diff > 0) pq.enqueue(diff)
    }

    return pq.size() === 1 ? pq.dequeue() : 0
};