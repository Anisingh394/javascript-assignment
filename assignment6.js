// rectangle code
class rectangle {
    constructor(len, bre) {
      this.len = len;
      this.bre = bre;
    }
    area() {
      return this.len* this.bre;
    }
  }
  
  class square extends rectangle {
    constructor(len) {
      super(len, len);
      this.len = len;
    }
  
  }
  
  let sq = new square(8);
  console.log(sq.area());
  let rc = new rectangle(7, 6);
  console.log(rc.area());
  
  
  
  // get nth largerst
  function getNthLar(n, nums) {
    nums.sort(function(a, b) {return b-a});
    return (nums[n-1]);
  }
  const nums = [3,45,6,7,23,5,7,8];
  console.log(getNthLar(3, nums));
  
  // insert - between evens;
  function ins(num) {
    let ans = "";
    let prem = num % 10;
    num = parseInt(num/10);
    let pch = prem.toString();
    ans += pch;
    while(num > 0) {
      nrem = num % 10;
      let nch = nrem.toString();
      if(!(prem&1) && !(nrem&1)) {
        ans += "-";
      }
      ans += nch;
      prem = nrem;
      num = parseInt(num / 10);
    }
    return ans.split('').reverse().join('');
  }
  console.log(ins(1024568));