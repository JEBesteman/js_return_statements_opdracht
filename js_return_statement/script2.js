const numberIsBig = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

console.log(numberIsBig(150));
console.log(numberIsBig(50));
console.log(numberIsBig(0));
console.log(numberIsBig(999));

//this function produces somthing!! it doesn't use console.log

// alternatieve oplossing
//Because number < 100 already returns true or false we can immediately return that too to make the function shorter:

const numberIsBig = function(number) {
    return number > 100;
};


// bouncer

const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) {
        return "this is a club for adults";
    }

    if (currentVisitors >= maxVisitors) {
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
};

console.log(getBouncerReaction(2000, 0, 15)); // "this is a club for adults"
console.log(getBouncerReaction(2000, 1999, 50)); // "come in"
console.log(getBouncerReaction(2000, 2000, 40)); // "it's too busy now, come back later"
console.log(getBouncerReaction(2000, 2999, 30)); // "it's too busy now, come back later"

//alternative solution 1
//It's possible to skip the curly braces for an if statement if you only want one statement to be run after the if. Be careful with this as it can make your code less readable.

const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) return "this is a club for adults";
    if (currentVisitors >= maxVisitors)
        return "it's too busy now, come back later";
    return "come in";
};

//alternative version 2
//We can also use a temporary response variable, put a value into it and then return that variable at the end of the function. This can sometimes be a better pattern.

const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    let response;
    if (ageOfPotentialVisitor < 18) {
        response = "this is a club for adults";
    } else if (currentVisitors >= maxVisitors) {
        response = "it's too busy now, come back later";
    } else {
        response = "come in";
    }
    return response;
};

//calculate average

const calculateAverage = function(
    number1,
    number2,
    number3,
    number4,
    number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(calculateAverage(1, 1, 1, 1, 1)); // 1
console.log(calculateAverage(1, 2, 3, 4, 5)); // 3
console.log(calculateAverage(-10000, 0, 0, 0, 5000)); // -1000

//bonus solution

const calculateAverage = function(
    number1,
    number2,
    number3,
    number4,
    number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    const averageRounded = Math.round(average);
    return averageRounded;
};