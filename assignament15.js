function getThirdSide(a, b) {
    return (a+b-1);
  }
  
  function getRightShift(a) {
    let a = Math.floor(x / Math.pow(2 , y));
    return a;
  }
  
  // f(x)=x^b +x* (e^(b*m))
  function getFunVal(b, m, x) {
    return (pow(x, b) + x * (pow(e, (b*m))));
  }
  
  function getSeqTri(x, t) {
    if(x == t) return t;
    return x + getSeqTri(x+1, t);
  }  
  
  