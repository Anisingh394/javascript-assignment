// 1. A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some sort action.
// Any Higher Order function that takes in a function or returns one out is a higher-order function. This is just a term to depict these functions - we call any function that does that a higher-order function - yet there’s nothing unique about them inherently.
 
// 2> ilter is a higher-order function that processes a data structure (usually a list) in some order to produce a new data structure containing exactly those elements of the original data structure for which a given predicate returns the boolean value true .

// 3. Give an example of a Higher Order function and a call back function
// used in the same program.
let arr = [1, 2, 3, 4, 5];


function addONe(num) {
  return num+1;
}

function HigherFun(arr, cbFun) {
  arr.forEach((element, index) => {
    arr[index] = cbFun(element);
  });
}

HigherFun(arr, addONe);
console.log(arr);


// 4. Carefully check the example below:
// a) What will be the output of this program ?
// b) Which function is a Higher Order function here ?
const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
for(let i=0; i<arr.length; i++){
fn(arr[i]);
}
}
function argFn (name){
console.log("Hello " + name );
}
useFunction(names,argFn);

// a => all the names will printed with hello
// b=> useFunction is Higher ordre function