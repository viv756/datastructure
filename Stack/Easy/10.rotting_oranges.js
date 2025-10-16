/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let time = 0;
    let fresh = 0;

    // Count initial fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) fresh++;
        }
    }

    // Helper function to check if any neighbor is rotten
    const hasRottenNeighbor = (r, c) => {
        const directions = [[-1,0], [1,0], [0,-1], [0,1]];
        for (let [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                grid[nr][nc] === 2
            ) {
                return true;
            }
        }
        return false;
    };

    // Brute-force loop
    while (true) {
        let changed = false;
        const toRot = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1 && hasRottenNeighbor(r, c)) {
                    toRot.push([r, c]);
                    changed = true;
                }
            }
        }

        if (!changed) break;

        for (let [r, c] of toRot) {
            grid[r][c] = 2;
            fresh--;
        }

        time++;
    }

    return fresh === 0 ? time : -1;
};




var orangesRotting = function(grid) {
    let rows = grid.length, cols = grid[0].length;
    let queue = []; // To store rotten oranges
    let freshCount = 0; // Count of fresh oranges
    let time = 0; // Elapsed time

    // Step 1: Initialize the queue and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) queue.push([r, c]); // Add rotten oranges
            if (grid[r][c] === 1) freshCount++; // Count fresh oranges
        }
    }

    // Directions for 4-neighbor traversal (top, right, bottom, left)
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Step 2: BFS to rot fresh oranges
    while (queue.length && freshCount > 0) {
        let newQueue = []; // Track newly rotten oranges
        for (let [r, c] of queue) {
            for (let [dr, dc] of directions) {
                let nr = r + dr, nc = c + dc; // Neighbor row and column
                if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2; // Make the fresh orange rotten
                    freshCount--; // Decrease fresh orange count
                    newQueue.push([nr, nc]); // Add to the new queue
                }
            }
        }
        queue = newQueue; // Update queue
        time++; // Increment time
    }

    // Step 3: Return result
    return freshCount === 0 ? time : -1; // If fresh oranges remain, return -1
};