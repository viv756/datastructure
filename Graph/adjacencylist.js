class Graph {
  constructor() {
    this.adjacencyList = {};  // Object to store the adjacency list
  }

  // Method to add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];  // Initialize the adjacency list for the vertex
    }
  }

  // Method to add an edge to the graph
  addEdge(vertex1, vertex2) { 
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);  // Ensure vertex1 exists
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);  // Ensure vertex2 exists
    }
    this.adjacencyList[vertex1].push(vertex2);  // Add vertex2 to the adjacency list of vertex1
    this.adjacencyList[vertex2].push(vertex1);  // Add vertex1 to the adjacency list of vertex2 (for undirected graph)
  }

  // Method to perform Depth-First Search (DFS)
  depthFirstSearch(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (stack.length) {
      const current = stack.pop();
      result.push(current);

      this.adjacencyList[current].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  // Method to perform Breadth-First Search (BFS)
  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      const current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  // Helper method to print the graph
  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log("Graph adjacency list:");
graph.printGraph();  // Print the graph

console.log("DFS from A:", graph.depthFirstSearch('A'));  // Depth-First Search from vertex 'A'
console.log("BFS from A:", graph.breadthFirstSearch('A'));  // Breadth-First Search from vertex 'A'


