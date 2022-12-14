// 1. Can we put duplicate values in the set object ?
// yes we can put diplicate values but not same objects with same value 

//2. syntax question
let st = new Set();
st.add([1,2, 3, 4]);
st.add([4, 5, 6]);
let arr = [1, 2 ,3, 4];
st.add(arr);
arr = [2, 3, 4, 5];
st.add(arr);
st.add(arr);
st.add(arr);
st.delete([4, 5, 6]);
st.forEach((element) => {
  console.log(element);
})

console.log(st.has([1, 2, 3, 4]));
console.log(st.has(arr));

// 3. 3. Create a set object with four random numbers from 0 to 10. Check if this newly created set object has 8 in it. Use set object methods.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newSet = new Set(arr);
console.log(newSet);
newSet.forEach((element) => {
  console.log(element);
})
let t = 4;
console.log(newSet.has(4));
console.log(newSet.has(t));