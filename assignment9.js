///1. yes this innerFunciton is a closure with OuterFunciton
let outerVariable = 100;
function OuterFunction() {
  outerVariable = 300;
  function InnerFunction() {
    outerVariable += 4;
    console.log(outerVariable);
    return outerVariable;
  }
  return InnerFunction();
}
var innerFunc = OuterFunction();
let t = OuterFunction();
console.log(t);
console.log("out side functions : " + outerVariable);
innerFunc;

//2. sol : When you declare a variable in a function, you can only access it in the function. These variables are said to be scoped to the function. If you define any inner function within another function, this inner function is called a closure. It retains access to the variables created in the outer function.


// 3. sol : The lexical scope allows a function scope to access statically the variables from the outer scopes. Finally, a closure is a function that captures variables from its lexical scope. In simple words, the closure remembers the variables from the place where it is defined, no matter where it is executed.


//// 4. 
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
  console.log(i); // What is logged?
  }, 1000);
  }
// output 3  3  3