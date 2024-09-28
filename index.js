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

let multiply = function (x,y) {
    console.log(x * y);
}

// below is the simple implementation of how the bind function would work

// let multiplyByTwo = function (y) {
//     let x = 2;
//     console.log( x * y);
// }

// Using Function Closures


let multiplyByTwo = multiply.bind(this, 2, 3); //using bind function to copy the multiply function
multiplyByTwo(5); // 10

let multiplyByThree = multiply.bind(this, 3); //using bind function to copy the multiply function
multiplyByThree(5); // 15