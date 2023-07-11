'use strict';

class Graph {
  constructor() {
    this.graph = new Map();
  }

  addNode(value) {
    const node = new Node(value);
    this.graph.set(node, []);
    return node;
  }

  // directed graph -- undirected graph will have an edge between two nodes that represents a connection that works in both directions
  addEdge(node1, node2, weight = null) {
    if (this.graph.has(node1) && this.graph.has(node2)) {
      const edge = new Edge(node1, node2, weight);
      this.graph.get(node1).push(edge);
      // this.graph.get(node2).push(edge);
    }
  }

  getNodes() {
    return [...this.graph.keys()];
  }

  getNeighbors(node) {
    const neighbors = this.graph.get(node) || [];
    return neighbors.map(neighbor => {
      return {
        node: neighbor.node2,
        weight: neighbor.weight
      };
    });
  }

  size() {
    return this.graph.size;
  }

  // code challenge 36, graph breadth first implementation
  breadthFirst(node) {
    if (!this.graph.has(node)) {
      return []
    }

    let visited = new Set();
    let visitedOrder = [];
    let queue = [];

    queue.push(node);
    visited.add(node);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      visitedOrder.push(currentNode);

      let neighbors = this.getNeighbors(currentNode);
      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor.node)) {
          visited.add(neighbor.node);
          queue.push(neighbor.node);
        }
      });
    }
    return visitedOrder;
  }
}

class Node {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return String(this.value);
  }
}

class Edge {
  constructor(node1, node2, weight = null) {
    this.node1 = node1;
    this.node2 = node2;
    this.weight = weight;
  }

  toString() {
    if (this.weight !== null) {
      return `(${this.node1} <--> ${this.node2}, weight: ${this.weight})`;
    }
    return `(${this.node1} <--> ${this.node2})`;
  }
}

// Code challenge 37
function businessTrip(graph, cities) {
  let totalCost = 0;

  for (let i = 0; i < cities.length - 1; i++) {
    const currentCity = cities[i];
    const nextCity = cities[i + 1];

    if (!graph[currentCity] || !graph[currentCity][nextCity]) {
      return null; // No direct flight connection
    }

    totalCost += graph[currentCity][nextCity];
  }

  return totalCost;
}


module.exports = { Graph, Node, Edge, businessTrip };
