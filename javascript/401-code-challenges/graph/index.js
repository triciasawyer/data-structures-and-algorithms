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

  addEdge(node1, node2, weight = null) {
    if (this.graph.has(node1) && this.graph.has(node2)) {
      const edge = new Edge(node1, node2, weight);
      this.graph.get(node1).push(edge);
      this.graph.get(node2).push(edge);
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


module.exports = { Graph, Node, Edge };
