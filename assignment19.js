function job() {
    return new Promise(function (resolve, reject) {
      reject();
    });
  }
  let promise = job();
  promise
    .then(function () {
      console.log("Success 1");
    })
    .then(function () {
      console.log("Success 2");
    })
    .then(function () {
      console.log("Success 3");
    })
    .catch(function () {
      console.log("Error 1");
    })
    .then(function () {
      console.log("Success 4");
    });
  
  /*
  Output:
  
  Error 1
  Success 4
  
  Explanation : Whenever an error is occured then the catch will work but if after the catch theere is somemore function whether catch or then they will also be executed.
  
  */
  