//function tutorial for better understanding 


// think of params as, variable that they function will have access to when it is called
function MakeBread(qty) {
//function body, gonna either perform a task or return a value
//task would be like a console log
console.log(MakeBread(7))
};
// param = variable inputs that we use in the function definition
// params define how the function is executed
// args = actually values when calling the function


// define a function
function greet() {
console.log("hello world");
}
// call a function
greet();

// function with param
function greetings(name) {
console.log("hello" + name)
}
//calling function with arg
greetings('Phil');

//functions with return 
// return types will include a variable

function milesToKm(miles) {
    var km = miles * 1.6;
    return km;
}
var phil = milesToKm(10);
console.log(phil);