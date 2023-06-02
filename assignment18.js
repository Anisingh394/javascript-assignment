/*
1. What is the difference between a generator and a function?

Generator Functions are memory efficient, as they save a lot of memory while using generators. A normal function will return a sequence of items, but before giving the result, it creates a sequence in memory and then gives us the result, whereas the generator function produces one output at a time.
*/

/*
2. What is the syntax of a generator?

To create a generator, we need a special syntax construct: function* , so-called “generator function”. Generator functions behave differently from regular ones. When such function is called, it doesn't run its code. Instead it returns a special object, called “generator object”, to manage the execution.

*/

/*
Are function generators iterable in JavaScript?

Generator functions once called, returns the Generator object, which holds the entire Generator iterable and can be iterated using next() method. Every next() call on the generator executes every line of code until it encounters the next yield and suspends its execution temporarily.

*/

/**
 * Create a generator for multiplying?
 */

var x, y;
  
function generateNumbers() {
    function getRandom12() {
        return Math.floor((Math.random() * 12) + 1);
    }
    x = getRandom12();
    y = getRandom12();
}


/*
5. Print an infinite series of natural numbers using a generator.
*/
function* nat() {
   let i = 1;
   while (true) {
     yield i++;
   }
 }
