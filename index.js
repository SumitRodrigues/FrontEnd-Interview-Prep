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

let name = {
    firstname: "Sumit",
    lastname: "Rodrigues"
}

let printName = function() {
    console.log( this.firstname + " " + this.lastname);
}

let printMyName = printName.bind(name);
printMyName();

Function.prototype.myBind = function (...args) {
    let obj = this;
    return function () {
        obj.call(args[0]);
    }
}

let printMyName2 = printName.myBind(name);
printMyName2();