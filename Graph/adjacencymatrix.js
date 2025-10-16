class Graph {
  constructor(size) {
    this.size = size; // Number of vertices in the graph
    this.adjacencyMatrix = Array.from({ length: size }, () => Array(size).fill(0));
  }

  // Method to add an edge to the graph
  addEdge(vertex1, vertex2, weight = 1) {
    if (vertex1 >= this.size || vertex2 >= this.size) {
      console.log("Vertex does not exist.");
      return;
    }
    this.adjacencyMatrix[vertex1][vertex2] = weight; // Add the edge with the specified weight
    this.adjacencyMatrix[vertex2][vertex1] = weight; // Since it's an undirected graph
  }

  // Method to remove an edge from the graph
  removeEdge(vertex1, vertex2) {
    if (vertex1 >= this.size || vertex2 >= this.size) {
      console.log("Vertex does not exist.");
      return;
    }
    this.adjacencyMatrix[vertex1][vertex2] = 0; // Remove the edge by setting its value to 0
    this.adjacencyMatrix[vertex2][vertex1] = 0; // Since it's an undirected graph
  }

  // Method to check if there's an edge between two vertices
  hasEdge(vertex1, vertex2) {
    return this.adjacencyMatrix[vertex1][vertex2] !== 0;
  }

  // Method to print the adjacency matrix
  printMatrix() {
    console.log(this.adjacencyMatrix.map((row) => row.join(" ")).join("\n"));
  }

  // Method to perform Depth-First Search (DFS)
  depthFirstSearch(start) {
    const visited = Array(this.size).fill(false);
    const result = [];
    const stack = [start];

    while (stack.length) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);

        for (let i = this.size - 1; i >= 0; i--) {
          if (this.adjacencyMatrix[vertex][i] !== 0 && !visited[i]) {
            stack.push(i);
          }
        }
      }
    }
    return result;
  }

  // Method to perform Breadth-First Search (BFS)
  breadthFirstSearch(start) {
    const visited = Array(this.size).fill(false);
    const result = [];
    const queue = [start];

    visited[start] = true;
    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      for (let i = 0; i < this.size; i++) {
        if (this.adjacencyMatrix[vertex][i] !== 0 && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
    return result;
  }
}

// Example usage:
const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

console.log("Adjacency Matrix:");
graph.printMatrix(); // Print the adjacency matrix

console.log("DFS from vertex 0:", graph.depthFirstSearch(0)); // Depth-First Search from vertex 0
console.log("BFS from vertex 0:", graph.breadthFirstSearch(0)); // Breadth-First Search from vertex 0
