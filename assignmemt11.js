/*
1. Write a JavaScript program to take an array as input from the user and calculate
the sum of numbers in odd places and the sum of numbers at even places.
a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
Places
*/


// solution
let arr = [];
let n = prompt("give len");
for(let i = 0; i < n; i++) {
  let t = prompt();
  arr.push(t);
}

let e = [];
let o = [];
function getEvenOdd(arr){
  arr.forEach((element, idx) => {
    if(arr[idx] % 2 === 0) e.push(element);
    else o.push(element);
  });
}
getEvenOdd(arr);
console.log("Evens are : " + e);
console.log("Odds are : " + o);
let eSum = 0, oSum = 0;
for(const ele of e) {
  eSum += ele;
}
for(const ele of o) {
  oSum += ele;
}
console.log("Even Sum : " + eSum + " \n" + "Odd Sum : "+ oSum);
console.log("Even average : " + eSum/e.length);
console.log("Odd average : " + oSum/o.length);

function getGcd(a, b){
  if(a === 0) return b;
  else if(b === 0) return a;
  if(a > b) return getGcd(a%b, b);
  else return getGcd(a, b%a);
}
console.log("GCC is " + getGcd(eSum, oSum));






/*
2. Write a JavaScript program to take 2 arrays from the user and check if the
number 4 exists in any of the arrays, or both of the arrays.
*/
/**
//  solution
let a1 = [];
let a2 = []
let n1 = prompt("give len");
let n2 = prompt("give len");

for(let i = 0; i < n1; i++) {
  let t = prompt();
  a1.push(t);
}
for(let i = 0; i < n2; i++) {
  let t = prompt();
  a2.push(t);
}

function isFourPre(arr, idx, len) {
  if(idx === len) return false;
  if(arr[idx] === 4) return true;
  return isFourPre(arr, idx+1, len);
}
let a = isFourPre(a1, 0, a1.length);
let b = isFourPre(a2, 0, a2.length);
console.log(a && b);

 */


/*3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
array. */

/*
//solution
const a = [1, [2], 3, [4, 5, [6, 7], 8,], 9, [10]];
const flattenArr = (arr = []) =>{
  const res = [];
  for(let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if(Array.isArray(ele)) {
      res.push(...flattenArr(ele));
    }else{
      res.push(ele);
    };
  };
  return res;
};
console.log(flattenArr(a));

*/

/*
// solution
function thirdLargest(arr, arr_size)
{
// There should be
// at least three elements 
if (arr_size < 3)
{
document.write(" Invalid Input "); return;
}
let first = arr[0];
for (let i = 1; i < arr_size ; i++)
if (arr[i] > first)
arr[i] = first;
let second = Number.MIN_VALUE; for (let i = 0;
i < arr_size ; i++)
if (arr[i] > first &&
arr[i] < second)
arr[i] = second;
let third = Number.MIN_VALUE; for (let i = 0;
i < arr_size ; i++)
if (arr[i] < third &&
arr[i] > second)
third = arr[i];
document.write("The third Largest " + "element is ", third); }
let arr = [12, 13, 1, 10, 34, 16]; let n = arr.length;
thirdLargest(arr, n);

*/
