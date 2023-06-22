# Code challenge 28

## Challenge Title

In the first half of this code challenge, you will write functions which sort domain objects. Your functions will receive an array of Movie objects. Each Movie object has a title (string), a year (number), and a list of genres (array of strings). One function will sort the movies by most recent year first. One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s. Test outputs for these functions, and an array of sample data, have been provided in test and movies.

In the second half of the code challenge, you will write tests for your comparator functions. This may necessitate refactoring the code you wrote in part one. Your tests will need to call the comparator functions directly, and make assertions about the response values given test inputs.

## Whiteboard process

Not required for this challenge

## Approach and Efficiency

My BigO:

sortByRecentYear
Time: O(n log n)
Space: O(1)

sortAlphabeticallyByTitle
Time: O(n log n)
Space: O(1)

## Collaborators

I referenced chat gpt to help me create the movie data and write tests
