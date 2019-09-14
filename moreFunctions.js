



// 1: function declaration

function makeCar() {
console.log('making a car...')
};
// calling the function
makeCar();

// 2: function expression
// this is an anonomous function since the function has no name
// but we are binding a const to it 
const makeCarExpression = function () {
console.log(makeCarExpression.name);
};

// this is the named version
const makeCarExpression2 = function myFunction () {
};

// 3: arrow function
const makeCarArrow = () => {
console.log('making car inside the arrow')
};
makeCarArrow();

const makeCarArrowShortHand = () => console.log('short');

makeCarArrowShortHand();