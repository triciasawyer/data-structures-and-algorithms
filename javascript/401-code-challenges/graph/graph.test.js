const { Graph, Node } = require('./index');

describe("Graph", () => {
  let graph;
  let singleNodeGraph;

  beforeEach(() => {
    graph = new Graph();
    singleNodeGraph = new Graph();
  });


  test("Node can be successfully added to the graph", () => {
    const nodeA = graph.addNode("A");
    const nodes = graph.getNodes();
    expect(nodes).toEqual([nodeA]);
    expect(graph.size()).toBe(1);
  });


  test("An edge can be successfully added to the graph", () => {
    const nodeA = graph.addNode("A");
    const nodeB = graph.addNode("B");
    graph.addEdge(nodeA, nodeB, 5);
    const neighborsA = graph.getNeighbors(nodeA);
    const neighborsB = graph.getNeighbors(nodeB);
    expect(neighborsA).toEqual([{ node: nodeB, weight: 5 }]);
    expect(neighborsB).toEqual([{ node: nodeA, weight: 5 }]);
    expect(graph.size()).toBe(2);
  });


  test("A collection of all nodes can be properly retrieved from the graph", () => {
    const nodeA = graph.addNode("A");
    const nodeB = graph.addNode("B");
    const nodes = graph.getNodes();
    expect(nodes).toEqual([nodeA, nodeB]);
  });


  test("All appropriate neighbors can be retrieved from the graph", () => {
    const nodeA = graph.addNode("A");
    const nodeB = graph.addNode("B");
    graph.addEdge(nodeA, nodeB, 5);
    const neighborsA = graph.getNeighbors(nodeA);
    const neighborsB = graph.getNeighbors(nodeB);
    expect(neighborsA).toEqual([{ node: nodeB, weight: 5 }]);
    expect(neighborsB).toEqual([{ node: nodeA, weight: 5 }]);
  });

});


// Neighbors are returned with the weight between nodes included
// The proper size is returned, representing the number of nodes in the graph
// A graph with only one node and edge can be properly returned
