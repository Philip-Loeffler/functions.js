function makeCarPrice() {
    // this will show us the first argument. which is 11
    // this will also allow us to grab the first item to use
console.log(arguments[0]);
// iterate through your arguments
Array.from(arguments).forEach(value => console.log(value));
// reduce 
const total = Array.from(arguments).reduce((prev, next) => {
    return prev + next;
});
console.log(total)
}

makeCarPrice(11, 12, 13, 14);

function makeCarePriceRest(numberOne, ...params) {
console.log(numberOne, params)

}

makeCarePriceRest(99, 88, 77, 44, 11);