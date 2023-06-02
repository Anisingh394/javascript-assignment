function iterate(list) {
    const it = list[Symbol.iterator]();
    for(let val of it) console.log(val);
  }
  
  let l = [1, 2, 3, 4];
  iterate(l);
  let str = "INeuron";
  iterate(str);
  
  function itrFun(list) {
    const it = list[Symbol.iterator]();
    for(let i = 0; i < list.length; i++) {
      console.log(it.next());
    }
  }
  
  let arr = [2, 3, 4, 5,6 ];
  itrFun(arr);
  