const { Graph, Node, businessTrip } = require('./index');


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

  // testing graph breadth first functionality
  test('Breadth-first traversal should return the correct order of visited nodes', () => {
    const graph = new Graph();
    let nodeA = graph.addNode('Chicago');
    let nodeB = graph.addNode('Denver');
    let nodeC = graph.addNode('New York');
    let nodeD = graph.addNode('Houston');
    let nodeE = graph.addNode('San Francisco');

    graph.addEdge(nodeA, nodeB);
    graph.addEdge(nodeA, nodeC);
    graph.addEdge(nodeB, nodeD);
    graph.addEdge(nodeC, nodeD);
    graph.addEdge(nodeC, nodeE);
    let visitedOrder = graph.breadthFirst(nodeA);

    expect(visitedOrder).toEqual([nodeA, nodeB, nodeC, nodeD, nodeE]);
  });


  test('Breadth-first traversal should handle disconnected nodes', () => {
    const graph = new Graph();
    let nodeA = graph.addNode('A');
    let nodeB = graph.addNode('B');
    let nodeC = graph.addNode('C');

    graph.addEdge(nodeA, nodeB);
    let visitedOrder = graph.breadthFirst(nodeC);

    expect(visitedOrder).toEqual([nodeC]);
  });


  test('Breadth-first traversal should return an empty array when there is an empty graph', () => {
    const graph = new Graph();
    let visitedOrder = graph.breadthFirst();

    expect(visitedOrder).toEqual([]);
  });

});


describe('Business trip using a graph', () => {
  const graphData = {
    Seattle: { LosAngeles: 100, SanFrancisco: 200 },
    LosAngeles: { Seattle: 100, SanFrancisco: 300 },
    SanFrancisco: { Seattle: 200, LosAngeles: 300 },
  };


  test('should return the total cost of a trip', () => {
    const cities = ['Seattle', 'LosAngeles'];
    const result = businessTrip(graphData, cities);

    expect(result).toBe(100);
  });

  test('should return the total cost of a trip with multiple flights', () => {
    const cities = ['Seattle', 'LosAngeles', 'SanFrancisco'];
    const result = businessTrip(graphData, cities);

    expect(result).toBe(400);
  });


  test('should return null for an invalid trip with no direct flight connection', () => {
    const cities = ['Seattle', 'San Francisco'];
    const result = businessTrip(graphData, cities);

    expect(result).toBeNull();
  });

});

// depth first tests
describe('Depth-first functionality', () => {
  test('should apply a depth-first traversal on a simple graph', () => {
    const graph1 = new Graph();
    const nodeA = graph1.addNode('A');
    const nodeB = graph1.addNode('B');
    const nodeC = graph1.addNode('C');
    const nodeD = graph1.addNode('D');
    graph1.addEdge(nodeA, nodeB);
    graph1.addEdge(nodeB, nodeC);
    graph1.addEdge(nodeC, nodeD);

    const traversalOrder1 = graph1.depthFirst(nodeA);
    const nodeValues = traversalOrder1.map(node => node.value);

    expect(nodeValues).toEqual(['A', 'B', 'C', 'D']);
  });


  // Test 2: Depth-first traversal on a disconnected graph
  test('should apply a depth-first traversal on a disconnected graph', () => {
    const graph2 = new Graph();
    const nodeE = graph2.addNode('E');
    const nodeF = graph2.addNode('F');
    graph2.addEdge(nodeE, nodeF);

    const traversalOrder2 = graph2.depthFirst(nodeE);
    const nodeValues = traversalOrder2.map(node => node.value);

    expect(nodeValues).toEqual(['E', 'F']);
  });


  test('should handle an empty graph', () => {
    const graph = new Graph();

    const traversalOrder = graph.depthFirst('A');
    expect(traversalOrder).toEqual([]);
  });


});
