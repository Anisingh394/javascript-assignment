pattern

for(let i = 1; i <= 5; i++) {
  let ans = "";
  for(let j = 1; j <= i; j++) {
    let ch = i.toString();

    ans += (ch + " ");
  }
  console.log(ans);
}


function isArm(num) {
  let t = num;
  let nnum = 0;
  while(num != 0) {
    let rem = num % 10;
    num = parseInt(num / 10);
    nnum += (rem*rem*rem);
  }
  if(t === nnum) return true;
  else return false;
}
console.log(isArm(153));



// to check the special nuber

function isSpe(num) {
  let t = num;
  let sum = 0;
  const fact = new Map ([
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
    [5, 120],
    [6, 720],
    [7, 5040],
    [8, 40320],
    [9, 362880],
    [0, 1]
  ]);
  while(num != 0) {
    let rem = num % 10;
    num = parseInt(num / 10);
    sum += (fact.get(rem));
  }
  if(t === sum) return true;
  else return false;
}
console.log(isSpe(145));
