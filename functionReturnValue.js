
function makeCarPrice(...params) {
    const total = params.reduce((prev, next) => prev + next);
    console.log(total)
    // this is an implicit return, that is returning nothing = so undefined.
    // return (if it just says return with nothing else its implicit); 
    return total;
}

// same thing as up there but with an arrow function
const makeCarPrice = (...params) => {
    const total = params.reduce((prev, next) => prev + next);
    return total;
};
// same thing without  any arrow function
function makeCarPrices(...params) {
    const totals = params.reduce((prev, next)); {
        prev + next 
        return totals;
    }
};
const totalPrice = makeCarPrice(11,22,33,44,55);
console.log(`total: ${totalprice}`);




