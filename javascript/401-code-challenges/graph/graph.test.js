const { Graph, Node } = require('./index');


describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });


  test('Node can be successfully added to the graph', () => {
    const nodeA = graph.addNode('A');
    expect(graph.getNodes()).toContain(nodeA);
  });


  test('An edge can be successfully added to the graph', () => {
    const nodeA = graph.addNode('A');
    const nodeB = graph.addNode('B');
    graph.addEdge(nodeA, nodeB, 5);
    const neighbors = graph.getNeighbors(nodeA);
    expect(neighbors.length).toBe(1);
    expect(neighbors[0].node).toBe(nodeB);
    expect(neighbors[0].weight).toBe(5);
  });


  test('A collection of all nodes can be properly retrieved from the graph', () => {
    const nodeA = graph.addNode('A');
    const nodeB = graph.addNode('B');
    const nodeC = graph.addNode('C');
    const nodes = graph.getNodes();
    expect(nodes).toContain(nodeA);
    expect(nodes).toContain(nodeB);
    expect(nodes).toContain(nodeC);
  });


  test('All appropriate neighbors can be retrieved from the graph', () => {
    const nodeA = graph.addNode('A');
    const nodeB = graph.addNode('B');
    const nodeC = graph.addNode('C');
    graph.addEdge(nodeA, nodeB, 3);
    graph.addEdge(nodeA, nodeC, 4);
    const neighbors = graph.getNeighbors(nodeA);
    expect(neighbors.length).toBe(2);
    expect(neighbors).toContainEqual({ node: nodeB, weight: 3 });
    expect(neighbors).toContainEqual({ node: nodeC, weight: 4 });
  });


  test('Neighbors are returned with the weight between nodes included', () => {
    const nodeA = graph.addNode('A');
    const nodeB = graph.addNode('B');
    graph.addEdge(nodeA, nodeB, 5);
    const neighbors = graph.getNeighbors(nodeA);
    expect(neighbors.length).toBe(1);
    expect(neighbors[0].weight).toBe(5);
  });


  test('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(graph.size()).toBe(0);
    graph.addNode('A');

    expect(graph.size()).toBe(1);

    graph.addNode('B');
    graph.addNode('C');

    expect(graph.size()).toBe(3);
  });

// Node can connect itself!
  test('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    const nodeA = graph.addNode('A');
    // const nodeB = graph.addNode('B');
    graph.addEdge(nodeA, nodeA, 3);

    const neighbors = graph.getNeighbors(nodeA);

    expect(neighbors.length).toBe(1);
    expect(neighbors[0].node).toBe(nodeA);
    expect(neighbors[0].weight).toBe(3);
  });

});

