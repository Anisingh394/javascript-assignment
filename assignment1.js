
// program to ckeck leap year

function checkYear (year) {
    if(year % 400 == 0) return true;
    if(year % 100 == 0) return false;
    if(year % 4 == 0) return true;
    return false;
  }
  
  let year = 2000;
  
  checkYear(year) ? console.log("Leap Year.\n") : console.log("Not a Leap Year./n"); 
  
  
  
  // celcius to farenhiet change vice versa
  
  let cel = 60 // in celcius
  let far = 45
  
  // function to change it into celcius
  function changeToCel(far) {
    return (far - 32)*(5/9);
  }
  
  // function to change it into farenheit
  function changeToFar(cel) {
    return (9*cel/5)+32;
  }
  
  console.log(cel+"%c to "+ changeToCel(far) + " f");
  console.log(far + "far to "+ changeToFar(cel) + " %c");
  
  
  // program to find factorial of a number
  let num = 5;
  function fact(num) {
    if(num === 0) return 1;
    return num * fact(num-1);
  }
  
  console.log(fact(num));