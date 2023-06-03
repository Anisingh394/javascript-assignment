/*1. Select an <h2> tag with id of text and change its inner text to
“Hello World”.
To select an <h2> tag with the id of "text" and change its inner text to "Hello World," you can use JavaScript and the DOM manipulation methods. Here's an example:
const h2Element = document.querySelector('h2#text');
h2Element.innerText = 'Hello World';

2. Apply following style to the same h2 using Javascript DOM
Method.
colour: red,
fontWeight: bold,
textTransform: uppercase
To apply the given styles (color: red, font weight: bold, text transform: uppercase) to the <h2> element with the id of "text" using JavaScript DOM methods, you can modify the style property of the element. Here's how you can achieve it:
javascript
const h2Element = document.querySelector('h2#text');
h2Element.style.color = 'red';
h2Element.style.fontWeight = 'bold';
h2Element.style.textTransform = 'uppercase';


3. Create a simple calculator that takes the input from
input1, input 2 and add them together.
To create a simple calculator that takes input from two input fields (`input1` and `input2`) and adds them together, you can use JavaScript to retrieve the input values, perform the addition, and display the result. Here's an example:

HTML:
```html
<input type="number" id="input1" placeholder="Enter a number">
<input type="number" id="input2" placeholder="Enter another number">
<button id="calculateBtn">Calculate</button>
<p id="result"></p>
```

JavaScript:
```javascript
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
  const value1 = parseFloat(input1.value);
  const value2 = parseFloat(input2.value);
  
  if (isNaN(value1) || isNaN(value2)) {
    result.textContent = 'Please enter valid numbers';
  } else {
    const sum = value1 + value2;
    result.textContent = 'Sum: ' + sum;
  }
});
```

In this example, we retrieve the input fields using `getElementById` and store them in variables (`input1` and `input2`). We also get references to the calculate button and the result paragraph.

The event listener is added to the calculate button using `addEventListener`. When the button is clicked, the function inside the event listener is executed. Within this function, we parse the input values as floating-point numbers using `parseFloat`. We check if the input values are valid numbers using `isNaN`.

If both input values are valid numbers, we perform the addition using the `+` operator and store the result in the `sum` variable. Finally, we update the `textContent` of the result paragraph to display the sum.

Note that this example assumes the input fields contain only numeric values. Additional validation or error handling can be added as needed to handle different scenarios.


4. What is the error in the following code?
 <!DOCTYPE html>

<html> <body>

<p class="text">Hello World!</p>

<script>

document.getElementById("text").innerHTML = "Hi JS DOM!";

</script>

</body> </html>
solution:-
The error in the given code is that the JavaScript code is trying to access an element with the id "text" using `document.getElementById`, but there is no element with that id in the HTML.

To fix the error, you need to either add an id to the `<p>` element or modify the JavaScript code to target the element using its class name. Here are two possible solutions:

Solution 1: Add an id to the `<p>` element:
```html
<!DOCTYPE html>
<html>
<body>
<p id="text" class="text">Hello World!</p>
<script>
document.getElementById("text").innerHTML = "Hi JS DOM!";
</script>
</body>
</html>
```

In this solution, an id is added to the `<p>` element by including `id="text"` along with the existing class name. This allows the JavaScript code to correctly target the element using `document.getElementById`.

Solution 2: Target the element using the class name:
```html
<!DOCTYPE html>
<html>
<body>
<p class="text">Hello World!</p>
<script>
const elements = document.getElementsByClassName("text");
if (elements.length > 0) {
  elements[0].innerHTML = "Hi JS DOM!";
}
</script>
</body>
</html>
```

In this solution, the JavaScript code is modified to use `document.getElementsByClassName` to target elements with the class name "text". The code checks if any elements are found with that class name, and if so, it updates the inner HTML of the first matching element.

Both of these solutions address the error by ensuring that the JavaScript code properly selects and modifies the targeted element.

5. Using JS Dom select a button and set its onclick event to
logging hello in the console.
To select a button using JavaScript DOM and set its `onclick` event to log "Hello" in the console, you can use the following code:

```html
<!DOCTYPE html>
<html>
<body>
<button id="myButton">Click Me</button>
<script>
const myButton = document.getElementById("myButton");

myButton.onclick = function() {
  console.log("Hello");
};
</script>
</body>
</html>
```

In this example, the `<button>` element is selected using `getElementById` and stored in the `myButton` variable. Then, the `onclick` event is assigned a function using the `=` assignment operator.

When the button is clicked, the assigned function is executed, which logs "Hello" in the console using `console.log("Hello")`.

Make sure to include this JavaScript code within a `<script>` tag or an external JavaScript file and ensure it runs after the HTML document has been loaded.

7. Select all the h2 tags on screen and change their colour to
purple.
To select all the <h2> tags on the screen and change their color to purple using JavaScript DOM, you can use the following code:

const h2Elements = document.querySelectorAll('h2');

h2Elements.forEach(function(h2) {
  h2.style.color = 'purple';
});


8. Create a new <h4> tag on the screen using JS DOM.
To create a new <h4> tag on the screen using JavaScript DOM, you can use the following code:
const h4Element = document.createElement('h4');
h4Element.textContent = 'New Heading';

// Append the new <h4> element to the document body or any desired parent element
document.body.appendChild(h4Element);

9. Remove an element from the screen using js dom.
To remove an element from the screen using JavaScript DOM, you can use the `remove()` method or manipulate the parent element to remove the child element. Here's an example of both approaches:

Method 1: Using the `remove()` method
```javascript
const elementToRemove = document.getElementById('elementId');
elementToRemove.remove();
```

In this method, you first select the element you want to remove using a method like `getElementById`, `querySelector`, or `querySelectorAll`. Then, you simply call the `remove()` method on the selected element to remove it from the DOM.

Replace `'elementId'` with the actual id of the element you want to remove.

Method 2: Manipulating the parent element
```javascript
const parentElement = document.getElementById('parentElementId');
const elementToRemove = document.getElementById('elementId');
parentElement.removeChild(elementToRemove);
```

In this method, you select both the parent element and the element you want to remove. Then, using the parent element, you call the `removeChild()` method and pass in the element you want to remove as an argument.

Replace `'parentElementId'` with the id of the parent element that contains the element you want to remove, and `'elementId'` with the actual id of the element you want to remove.

Either of these methods can be used to remove an element from the screen. Choose the method that suits your specific scenario and adjust the element selection based on your HTML structure and element identifiers.


11. Fetch the value of name from the following form.

<!DOCTYPE html> <html><head>

<meta charset=utf-8 /> </head><body>

<form id="form1" onsubmit="getFormvalue()"> Name: <input type="text" id="name"><br> <button type="submit">Submit</button>

</form> </body>

</html>
solution:-
To fetch the value of the "name" input field from the provided form using JavaScript, you can use the following code:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
</head>
<body>
  <form id="form1" onsubmit="getFormValue()">
    Name: <input type="text" id="name"><br>
    <button type="submit">Submit</button>
  </form>

  <script>
    function getFormValue() {
      event.preventDefault(); // Prevent form submission

      const nameInput = document.getElementById('name');
      const name = nameInput.value;

      console.log(name); // Display the value in the console or perform any desired action with the value
    }
  </script>
</body>
</html>
```

In this code, the `getFormValue()` function is called when the form is submitted. The `event.preventDefault()` method is used to prevent the default form submission behavior, which allows us to handle the form submission using JavaScript.

Inside the `getFormValue()` function, `document.getElementById('name')` is used to select the input field with the id "name". The `value` property is then used to fetch the value entered by the user into the input field.

You can modify the code inside the `getFormValue()` function to perform any desired action with the retrieved value, such as displaying it on the page, sending it to a server, or performing validation.

Note: It's recommended to use `event.preventDefault()` to prevent the form from submitting and causing a page reload.

10. Get the number of <p> tags on the screen using JS DOM.
To get the number of `<p>` tags on the screen using JavaScript DOM, you can use the `getElementsByTagName()` method and access the `length` property of the returned NodeList. Here's an example:

```javascript
const paragraphTags = document.getElementsByTagName('p');
const numberOfParagraphs = paragraphTags.length;

console.log(numberOfParagraphs);
```

In this code, `document.getElementsByTagName('p')` selects all the `<p>` elements in the document and returns a NodeList. The `length` property of the NodeList gives you the number of elements in it, which represents the number of `<p>` tags on the screen.

The value of `numberOfParagraphs` represents the count of `<p>` tags. You can use it for further processing or display it as needed. The `console.log()` statement outputs the number of `<p>` tags to the console.

Make sure to include this JavaScript code within a `<script>` tag or an external JavaScript file and ensure it runs after the HTML document has been loaded.
