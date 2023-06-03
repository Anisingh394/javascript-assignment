/*Q- Remove array element by shifting elements from right to left
remove(n) in the comments below indicates remove elements from the nth index of the
array

examples of suggested inputs and outputs-
// [1, 2, 3] -- remove(1) --> [1, 3, 3] --> [1, 3]
// [1, 2, 3, 4, 5, 6] -- remove(2) --> [1, 2, 4, 5, 6, 6] --> [1, 2, 4,
5, 6]
// [1, 2, 3, 4, 5, 6] -- remove(0) --> [2, 3, 4, 5, 6, 6] --> [2, 3, 4,
5, 6]
// [1] -- remove(0) --> [1] --> []
*/
//To remove an array element by shifting elements from right to left based on the given index, you can use the following JavaScript code:

//```javascript
function removeElement(arr, index) {
  if (index < 0 || index >= arr.length) {
    return arr; // Return the array as is if the index is invalid
  }

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // Shift elements from right to left
  }

  arr.pop(); // Remove the last element from the array
  return arr;
}

// Example usage
const arr1 = [1, 2, 3];
console.log(removeElement(arr1, 1)); // Output: [1, 3]

const arr2 = [1, 2, 3, 4, 5, 6];
console.log(removeElement(arr2, 2)); // Output: [1, 2, 4, 5, 6]

const arr3 = [1, 2, 3, 4, 5, 6];
console.log(removeElement(arr3, 0)); // Output: [2, 3, 4, 5, 6]

const arr4 = [1];
console.log(removeElement(arr4, 0)); // Output: []
