let name = {
    firstname: "Sumit",
    lastname: "Rodrigues",
    printFullName: function() {
        // debugger; // Pause execution here to inspect
        console.log(this.firstname + " " + this.lastname);
    }
}

name.printFullName();

let name2 = {
    firstname: "James",
    lastname: "Anderson"
}


// Function Borrowing
name.printFullName.call(name2);
