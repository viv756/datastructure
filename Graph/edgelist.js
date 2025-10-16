class Graph {
  constructor() {
    this.edges = [];  // Array to store edges
  }

  // Method to add an edge to the graph
  addEdge(vertex1, vertex2, weight = 1) {
    this.edges.push([vertex1, vertex2, weight]);
  }

  // Method to remove an edge from the graph
  removeEdge(vertex1, vertex2) {
    this.edges = this.edges.filter(edge => !(edge[0] === vertex1 && edge[1] === vertex2));
  }

  // Method to print the edge list
  printEdgeList() {
    console.log("Edge List:");
    this.edges.forEach(edge => {
      console.log(`(${edge[0]}, ${edge[1]}, weight: ${edge[2]})`);
    });
  }

  // Method to check if there's an edge between two vertices
  hasEdge(vertex1, vertex2) {
    return this.edges.some(edge => edge[0] === vertex1 && edge[1] === vertex2);
  }

  // Method to perform Depth-First Search (DFS)
  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];
    const stack = [start];

    while (stack.length) {
      const vertex = stack.pop();
      if (!visited.has(vertex)) {
        visited.add(vertex); 
        result.push(vertex);

        this.edges.forEach(edge => {
          if (edge[0] === vertex && !visited.has(edge[1])) {
            stack.push(edge[1]);
          } else if (edge[1] === vertex && !visited.has(edge[0])) {
            stack.push(edge[0]);
          }
        });
      }
    }
    return result;
  }

  // Method to perform Breadth-First Search (BFS)
  breadthFirstSearch(start) {
    const visited = new Set();
    const result = [];
    const queue = [start];
    visited.add(start);

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.edges.forEach(edge => {
        if (edge[0] === vertex && !visited.has(edge[1])) {
          visited.add(edge[1]);
          queue.push(edge[1]);
        } else if (edge[1] === vertex && !visited.has(edge[0])) {
          visited.add(edge[0]);
          queue.push(edge[0]);
        }
      });
    }
    return result;
  }
}

// Example usage:
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

console.log("Edge List:");
graph.printEdgeList();  // Print the edge list

console.log("DFS from vertex 0:", graph.depthFirstSearch(0));  // Depth-First Search from vertex 0
console.log("BFS from vertex 0:", graph.breadthFirstSearch(0));  // Breadth-First Search from vertex 0
