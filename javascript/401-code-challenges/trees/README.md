# Code challenge 15

## Challenge Title

Features
Node: Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Binary Tree: Create a Binary Tree class and define a method for each of the depth first traversals:

- pre order
- in order
- post order

Each depth first traversal method should return an array of values, ordered appropriately.
Binary Search Tree: Create a Binary Search Tree class. This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
Add: Arguments: value, Return: nothing, Adds a new node with that value in the correct location in the binary search tree.

Contains: Argument: value, Returns: boolean indicating whether or not the value is in the tree at least once.

## Whiteboard process

![Code challenge 15](../whiteboard-images/whiteboard15.png)

## Approach and Efficiency

My BigO:

Trees
Time: O(n) for traversals, O(h) for add() and contains()
Space: O(n) for traversals, O(h) for add() and contains()

KaryTrees
Time: Add method is O(k) worst case, contains method is O(n)
Space: Add method is O(1), contains method is O(h)

## Collaborators

Used chatgtp to help me with the step through, and just reworded it to help my understanding of the trees in general.
