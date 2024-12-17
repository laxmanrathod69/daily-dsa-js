# Arrays in Data Structures

- Arrays are one of the most fundamental data structures in computer science. They are used to store collections of elements in contiguous memory locations, where each element can be accessed using an index.

- Refer the simple array implementation in the `arrays.js` file.

## Key Characteristics:

- Fixed size (in most programming languages)
- Elements stored in contiguous memory
- Constant time O(1) access to elements using index
- Linear time O(n) for insertion/deletion at arbitrary positions

## Basic Operations and Time Complexities:

1. Access: O(1)
2. Search: O(n)
3. Insertion: O(n)
4. Deletion: O(n)

# Custom Array Implementation

In the file `customeArray.js`, we've implemented a custom array class `MyArray` that mimics the behavior of JavaScript arrays. Here's a breakdown of its methods:

## Custom Methods:

### 1. push(item)

- Adds an element to the end of the array
- Time Complexity: O(1)
- Returns the new length of the array

### 2. get(index)

- Retrieves an element at the specified index
- Time Complexity: O(1)
- Returns the element at the given index

### 3. pop()

- Removes the last element from the array
- Time Complexity: O(1)
- Returns the removed element

### 4. shift()

- Removes the first element from the array
- Time Complexity: O(n) as it requires shifting all elements
- Returns the removed element

### 5. delete(index)

- Removes an element at the specified index
- Time Complexity: O(n) as it requires shifting elements
- Returns the deleted element

## Implementation Details:

The custom array is implemented using:

- An object (`this.data`) to store elements
- A length property to track array size
- Methods that manipulate the data object and length accordingly
