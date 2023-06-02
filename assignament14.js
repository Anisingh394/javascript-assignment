

/*1. Write a JavaScript program to:
a) filter employees according to department = IT
b) filter employees who earn a salary < 65000
 */

/*
 let emp = [
  {
  "id": 1,
  "name":"Abhinav",
  "department":"IT",
  "Salary":75000
  },
  {
  "id": 2,
  "name":"Gaurav",
  "department":"Sales",
  "Salary":52000
  },
  {
  "id": 3,
  "name":"Raj",
  "department":"IT",
  "Salary":64000
  }];
var mapIt = [];
var mapSal = [];

for(let i = 0; i < emp.length; i++) {
  let employee = emp[i];
  if(employee.id == "IT") mapIt.push(i);
  if(employee.Salary < 65000) mapSal.push(i);
}
console.log("Employees with dept : IT");
for(let i = 0; i < mapIt.length; i++) {
  console.log(emp[mapIt[i]]);
}
console.log("Employees with salary < 65000");
for(let i = 0; i < mapSal.length; i++) {
  console.log(emp[mapSal[i]]);
}

*/

/*
2. Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune
*/

/*

let hospitals = [
  {
  "id": 1,
  "name":"Hospital A",
  "location":"Delhi",
  "noOfBeds":450,
  "availability": "Yes"
  },
  {
  "id": 2,
  "name":"Hospital B",
  
  "location":"Pune",
  "noOfBeds":150,
  "availability":"No"
  },
  {
  "id": 3,
  "name":"Hospital C",
  "location":"Pune",
  "noOfBeds":350,
  "availability":"Yes"
  }];


hospitals.forEach((hospital)=>{
  if(hospital.availability == "Yes" && hospital.location == "Pune" && hospital.noOfBeds > 200){
    console.log(hospital);
  }
});

*/
