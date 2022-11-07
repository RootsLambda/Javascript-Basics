// File learnobject.js
// Manipulating objects in javascript

/*-------------Note------------*/
// 1. We can access the key to get the value of the object
// 2. We can also add attribute to the object
// 3. Not only that, objects also have methods
// 4. The this keyword refers to the object itself

var student={
    name: "Lambda",
    age: 21,
    address: "Long An",
    displayname: function() {
        console.log(this.name);
    },
    getage: function() {
        return this.age;
    }
}

// Access value
console.log(student.name);
console.log(student['name']);

// Add key- value
student.email="quoc.dong2525@hcmut.edu.vn";
student['email']="quoc.dong2525@hcmut.edu.vn";

// Use method object
student.displayname();
console.log(student.getage());