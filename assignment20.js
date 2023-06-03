/*
1). How does async/await help with performance and scalability?
Improved performance and scalability
Async/await allows you to write non-blocking code, which means your application can handle more concurrent requests without running into performance bottlenecks
2). Is it possible to use async/await with promise chains? If yes,
how can this be achieved?
Yes, it is possible to use async/await with promise chains. In fact, async/await is built on top of promises and provides a more concise and readable way to work with asynchronous code that utilizes promises. Here's how you can use async/await with promise chains:

Mark the containing function as async: To use await inside a function, you need to declare that function with the async keyword. This indicates that the function will contain asynchronous code and allows you to use await within that function.

Use await to pause execution: When you await a promise, it pauses the execution of the function until the promise is resolved or rejected. This allows you to write code that appears to be synchronous, even though it's performing asynchronous operations.

Wrap promise chains in a try-catch block: When using await, it's a good practice to wrap the entire promise chain in a try-catch block. This allows you to catch and handle any errors that may occur during the asynchronous operations.
3). Give 3 real world examples where async/await has been used?
Example of Async/Await in Real World
1. Web Development: Async/await is extensively used in web development, particularly in server-side frameworks like Node.js. It allows developers to handle asynchronous tasks such as reading from databases, making HTTP requests, or interacting with file systems in a synchronous-like manner. This improves the readability of the code and simplifies error handling. For example, when handling incoming HTTP requests, async/await can be used to perform database queries or API calls asynchronously and await their results before sending a response back to the client.

2. Data Processing: Async/await is valuable when dealing with time-consuming data processing tasks. For instance, in data analysis or machine learning pipelines, async/await can be used to parallelize and concurrently execute multiple data processing steps. This can involve tasks such as data cleaning, feature extraction, model training, or inference. By leveraging async/await, developers can improve performance and efficiency by executing these tasks concurrently while maintaining readable and manageable code.

3. File System Operations: When working with file systems, async/await is commonly used to perform asynchronous operations like reading, writing, or manipulating files. For example, when processing large files or performing batch operations on a directory, async/await can be used to handle these operations asynchronously and avoid blocking the main execution thread. This helps maintain responsiveness in applications while performing file system operations efficiently. Additionally, async/await allows for cleaner error handling and graceful handling of file-related exceptions.

*/
//4-Find output
/*async function inc(x) {
    x = x + await 1
    return x;
    }
    async function increment(x){
    x = x + 1
    return x
    }
    inc(1).then(function(x){
    increment(x).then(function(x){
    console.log(x)
    })
    })
    */
    //output= 3
 //5 
 /*let p = new Promise(function (resolve, reject) {
    reject(new Error("some error"));
    setTimeout(function(){
    reject(new Error("some error"));
    
    },1000)
    reject(new Error("some error"));
    });
    p.then(null, function (err) {
    console.log(1);
    console.log(err);
    }).catch(function (err) {
    console.log(2);
    console.log(err);
    });  */ 
   // output= 1
   //some error
 //6
 /*async function f1() {
    console.log(1);
    }
    async function f1() {
    console.log(2);
    }
    console.log(3);
    f1();
    console.log(1);
    f2();
    async function f2() {
    console.log("Go!");
    }  */
    //output-
//3
//2
//1
//Go!
//7
/*function resolveAfterNSeconds(n,x) {
    return new Promise(resolve => {
    
    setTimeout( ( ) = {
    resolve(x);
    }, n);
    });
    }
    
    (function(){
    let a = resolveAfterNSeconds(1000,1)
    a.then(async function(x){
    let y = await resolveAfterNSeconds(2000,2)
    let z = await resolveAfterNSeconds(1000,3)
    let p = resolveAfterNSeconds(2000,4)
    let q = resolveAfterNSeconds(1000,5)
    console.log(x+y+z+await p +await q);
    })
    })()
    */
   //output= 15
   /*8). Is it possible to nest async functions in JavaScript? Explain with
examples.
Yes, it is possible to nest async functions in JavaScript. Nesting async functions means defining an async function inside another async function. This can be useful when you have multiple levels of asynchronous operations that need to be executed sequentially.

Here's an example to illustrate nesting async functions:

```javascript
async function outerAsyncFunction() {
  console.log('Outer async function started.');

  async function innerAsyncFunction() {
    console.log('Inner async function started.');
    const result = await someAsyncOperation();
    console.log('Inner async function completed with result:', result);
  }

  await innerAsyncFunction();

  console.log('Outer async function completed.');
}

outerAsyncFunction();
```

In this example, we have an outer async function called `outerAsyncFunction`. Inside this function, we define an inner async function called `innerAsyncFunction`. The inner async function performs some asynchronous operation (represented by `someAsyncOperation`) and logs the result.

When `outerAsyncFunction` is called, it executes the code within it sequentially. It first logs a message indicating that the outer async function has started. Then it awaits the execution of the inner async function `innerAsyncFunction`. The execution enters the inner async function, logs a message indicating that the inner async function has started, performs some asynchronous operation, and logs the result. Once the inner async function is completed, the execution returns to the outer async function, which logs a message indicating that the outer async function has completed.

By nesting async functions, you can create a hierarchical structure where each level handles its own asynchronous operations independently and sequentially. This can be useful for organizing and managing complex asynchronous code flows.
9). What is the best way to avoid deadlocks when using
async/await?
To avoid deadlocks when using async/await, you need to be mindful of certain practices and considerations. Here are some best practices to help prevent deadlocks:

1. Use async/await judiciously: Async/await should be used when handling asynchronous operations, such as making API calls or interacting with databases. However, avoid using them unnecessarily in synchronous code or in situations where they don't provide any real benefit. Overusing async/await can lead to complex code that is more prone to deadlocks.

2. Be cautious with blocking operations: Avoid blocking operations inside async functions that can potentially cause deadlocks. For example, using synchronous I/O operations (such as reading from a file synchronously) can block the execution of the entire async function and lead to deadlocks. Instead, prefer non-blocking alternatives or use dedicated worker threads for such blocking operations.

3. Be mindful of nested async/await: When nesting async functions, ensure that you're not inadvertently creating situations where deadlocks can occur. Make sure to design your code in a way that allows for the completion of inner async functions before the outer ones. Avoid circular dependencies or situations where an outer async function is waiting for an inner one to complete while the inner one is waiting for the outer one, leading to a deadlock.

4. Avoid mixing async/await with older asynchronous patterns: If you're working with legacy code or libraries that use older asynchronous patterns like callbacks or event emitters, be cautious when mixing them with async/await. Mixing different asynchronous patterns can lead to code that is difficult to reason about and may introduce deadlocks. Consider using utility functions or wrappers to convert older asynchronous patterns into promises or async/await-friendly code.

5. Handle timeouts and fallbacks: When waiting for asynchronous operations using async/await, it's a good practice to handle timeouts and provide fallback mechanisms. By setting a timeout and implementing appropriate error handling or fallback logic, you can prevent your application from being stuck indefinitely, which could lead to deadlocks.

6. Thoroughly test and monitor your code: Test your async/await code thoroughly, especially when dealing with complex or critical sections of your application. Ensure that it performs as expected under various scenarios and load conditions. Monitor your application for any unexpected deadlocks and promptly investigate and resolve any issues that arise.

By following these best practices and being cautious about potential deadlock scenarios, you can reduce the likelihood of encountering deadlocks when using async/await in your code.

10). In which scenarios would you use synchronous code instead of
asynchronous code?
There are several scenarios where using synchronous code may be appropriate or preferable over asynchronous code:

1. Simplicity and readability: Synchronous code is often simpler and easier to read and understand compared to its asynchronous counterpart. If the code logic is straightforward, and there are no long-running or blocking operations involved, using synchronous code can lead to cleaner and more maintainable code.

2. CPU-bound operations: If the task at hand is primarily CPU-bound and does not involve waiting for I/O or external resources, using synchronous code can be sufficient. For example, performing mathematical calculations or manipulating in-memory data structures can often be done synchronously without the need for asynchronous operations.

3. Small scripts or utilities: In small scripts or utilities with minimal I/O or concurrency requirements, using synchronous code can be sufficient. The added complexity of asynchronous code may not be necessary if the code is short and doesn't require extensive error handling or parallel execution.

4. Command-line tools or single-threaded applications: In certain command-line tools or single-threaded applications where the execution is sequential and there is no need for concurrent processing or handling multiple I/O operations simultaneously, synchronous code can be used without significant drawbacks.

5. Limited resource availability: In resource-constrained environments where the available resources (such as memory or CPU) are limited, using synchronous code can be preferable. Asynchronous code may introduce additional overhead due to event handling or context switching, which can further strain the available resources.

6. Compatibility with existing synchronous codebase: If you are working with a codebase that is predominantly synchronous and does not require asynchronous operations, introducing asynchronous code may not be necessary. Consistency within the codebase can be more important than utilizing asynchronous patterns if there is no specific need for it.

It's important to note that using synchronous code in situations where asynchronous code would be more appropriate can result in poor performance, reduced scalability, and unresponsiveness in applications that deal with I/O-bound or long-running operations. Therefore, it's essential to evaluate the specific requirements, constraints, and trade-offs of each scenario to determine whether synchronous or asynchronous code is the most suitable choice.