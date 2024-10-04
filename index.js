// let name = {
//     firstname: "Sumit",
//     lastname: "Rodrigues",
// }

// printFullName = function(hometown, state) {
//     // debugger; // Pause execution here to inspect
//     console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
// }

// printFullName.call(name, "Alberta" , "GA");

// let name2 = {
//     firstname: "James",
//     lastname: "Anderson"
// }


// // Function Borrowing
// printFullName.call(name2, "Los Angeles", "California");

// printFullName.apply(name2, ["Los Angeles", "California"]);

// // Bind Method

// let printMyName = printFullName.bind(name2, "Los Angeles", "California");
// console.log(printMyName)
// printMyName(); // Los Angeles, California James Anderson

//Polyfill for bind method:

// let name = {
//     firstname: "Sumit",
//     lastname: "Rodrigues"
// }

// let printName = function(hometown, state, country) {
//     console.log( this.firstname + " " + this.lastname + " , " + hometown + " , " + state + " , " + country);
// }

// let printMyName = printName.bind(name, "Fullerton");
// printMyName("California", "USA");

// Function.prototype.myBind = function (...args) {
//     let obj = this;
//         params = args.slice(1);
//     return function (...args2) {
//         obj.apply(args[0], [...params, ...args2]);
//     }
// }

// let printMyName2 = printName.myBind(name, "Fullerton");
// printMyName2("California", "USA");

// Function Currying

// let multiply = function (x,y) {
//     console.log(x * y);
// }

// below is the simple implementation of how the bind function would work

// let multiplyByTwo = function (y) {
//     let x = 2;
//     console.log( x * y);
// }

// Using Function Closures

// let multiply = function (x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }
// let multiplyByTwo = multiply(2);
// multiplyByTwo(5); // 10

// // let multiplyByTwo = multiply.bind(this, 2, 3); //using bind function to copy the multiply function
// // multiplyByTwo(5); // 10

// let multiplyByThree = multiply.bind(this, 3); //using bind function to copy the multiply function
// multiplyByThree(5); // 15

// // Debouncing in Javascript

// let counter = 0;
// const getData = () => {
//     // Calls an API and gets Data
//     console.log("Fetching Data...", counter++);
// }

// const debounce = function (fn, d) {
//     let timer;
//     return function() {
//         let context = this,
//             args = arguments;
//             clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(context, args);
//         }, d);
//     }
// }

// const betterFunction = debounce(getData, 500);

// // Throttling in Javascript

// let counter = 0;
// const getData = () => {
//     console.log("Fetching Data via throttling...", counter++);
// }

// const throttling = function (fn, limit) {
//     let flag = true;
//     return function() {
//         let context = this,
//         args = arguments;
//         if (flag) {
//             fn.apply(context, args);
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, limit);
//         }
//     }
// }

// const betterFunction = throttling(getData, 3000);

// Event Bubbling

// Coding questions from github

// Question: What is the value of foo?
var foo = 10 + '20';
console.log(foo); // "1020"

// Question: What will be the output of the code below?
console.log(0.1 + 0.2 == 0.3);

// Question: How would you make this work?
function add(a, b) {
    // If the second argument 'b' is provided, return the sum of 'a' and 'b'
    if (b !== undefined) {
      return a + b;
    }
  
    // If only one argument 'a' is provided, return a new function that takes 'b' as its argument
    return function(b) {
      return a + b;
    };
  }
  
  // Examples
  console.log(add(2, 5)); // 7
  console.log(add(2)(5)); // 7


  //Question: What value is returned from the following statement?
  console.log("i'm a lasagna hog".split("").reverse().join(""));

  // Question: What is the value of window.foo?
  console.log( window.foo || ( window.foo = "bar" ) );

  // Question: What is the outcome of the two alerts below?
  var foo = "Hello";
  (function() {
    var bar = " World";
    alert(foo + bar);
  })();
  alert(foo + bar);

  // Question: What is the value of foo.length?
  var foo = [];
  foo.push(1);
  foo.push(2);
/* Explanation:

	1.	var foo = [];:
	•	This line declares a variable foo and initializes it as an empty array.
	2.	foo.push(1);:
	•	The push() method adds the element 1 to the end of the array foo.
	•	Now, the array foo contains one element: [1].
	•	foo.length will be 1 at this point.
	3.	foo.push(2);:
	•	The push() method adds the element 2 to the end of the array foo.
	•	Now, the array foo contains two elements: [1, 2].
	•	foo.length will be 2 at this point.

Final Value of foo.length:

The value of foo.length is 2 because there are two elements (1 and 2) in the array after both push() operations.

So, the value of foo.length is:

2. */