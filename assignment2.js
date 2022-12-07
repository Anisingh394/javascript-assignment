// program to check for triangle type
let l1 = 7, l2 = 7, l3 = 5;
function getType(l1, l2, l3) {
  if(l1 === l2 && l2 === l3){
    return "equilateral";
  }
  else if(l1 == l2 || l2 === l3 || l1 === l3) {
    return "isosceles";
  }else return "scalene";
}

console.log("Triangle type is "+ getType(l1, l2, l3));




// check grades with switch


let marks = 85;
// console.log("grades is "+ getGrades(marks));
let out;
marks = marks/10;
  switch(marks) {
    case 9:
      out =  "Grade S";
      break;
    
      case 8:
        out = "Grade A";
      break;

      case 7:
        out = "Grade B ";
      break;

      case 6:
        out = "Grade C";
      break;

      case 5:
        out = "Grade D";
      break;

      default :
      out = "You are fail";
  }

  console.log(out);

// // sum of multiplea of 3 and 5 under 1000
let sum3 = 0, sum5 = 0;
for(let i = 3; i <= 1000; i++) {
  if(i % 3 == 0 ) sum3 += i;
  if(i % 5 == 0 ) sum5 += i;
}
console.log(sum3 +" "+ sum5);