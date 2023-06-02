/*
1. Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()
*/
/*
let arr = [];
let len = prompt();
for(let i = 0; i < len; i++) {
  let t = prompt();
  arr.push(t);
}
let sum = arr.reduce(function(prev, curr) {
  return prev+curr;
});
console.log(sum);
let avg = arr.reduce(function(prev, curr) {
  return prev+curr;
}) / arr.length;
console.log(avg);
*/
/*
var map = {};

let len = prompt();
for(let i = 0; i < len; i++) {
  let name = prompt();
  let marks = prompt();
  if(marks >= 90) {
    map["A"] = map["A"] || [];
    map["A"].push({name, marks});
  }
  else if(marks >= 80) {
    map["B"] = map["B"] || [];
    map["B"].push({name, marks});
  }
  else if(marks >= 70) {
    map["C"] = map["C"] || [];
    map["C"].push({name, marks});
  }
  else if(marks >= 60) {
    map["D"] = map["D"] || [];
    map["D"].push({name, marks});
  }
  else if(marks >= 50) {
    map["E"] = map["E"] || [];
    map["E"].push({name, marks});
  }
  else {
    map["F"] = map["F"] || [];
    map["F"].push({name, marks});
  }
  
}

for (var key in map) {
  if (!map.hasOwnProperty(key)) {
      continue;
  }
  console.log(key, map[key]);
}

*/
