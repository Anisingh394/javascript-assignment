
// get the number of sticks
function getStick(num) {
    let start = 6;
    let end = (num-1) * 5;
    return start+end;
  }
  console.log(getStick(1));
  console.log(getStick(4));
  console.log(getStick(87));