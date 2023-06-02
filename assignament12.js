

/*1. Write a JavaScript program to map Employee Records according to Employee
IDs.
Employee: { id, name, salary } */

const id = [67, 48, 29];
const nam = [ "Hitanshu", "Ninad", "Amandeep"];
const salary = [ 75000, 82000, 98000 ];

const emp = new Map();
for(let i = 0; i < id.length; i++) {
  emp.set(id[i], [id[i], nam[i], salary[i]]);
}

//  Print an array of all employee ids
emp.forEach(elelment=>{
  console.log(elelment[0]);
});

// Print count of employees
console.log(id.length);

// Print the name of the employee according to their id { key: value }
emp.forEach(elelment=>{
  console.log(elelment[0] + " : " + elelment[1]);
});

const sal = [];
emp.forEach(elelment=>{
  sal.push(elelment[0]);
});
console.log(sal);


// Calculate the average salary the company is paying to its employees
function check(a, b){
  return a+b;
}
let avg = sal.reduce(check);
console.log(avg/sal.length);



