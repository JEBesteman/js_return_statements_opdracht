//function checks if number is bigger than 100

const isNumberBig = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
}
const result = isNumberBig(115);
console.log(result);

//werkt met 33 false, 100 false, 115 true


//Bouncer at a club

const mayYouEnter = function(maxNumberPeople, currentNumberPeople, agePerson) {
   if (agePerson < 18) {
       return "This is a club for adults";
    } else if (currentNumberPeople >= maxNumberPeople ) {
        return "It's too busy, come back later";
    } else {
        return "Come in"; 
    }
}

const result2 = mayYouEnter(300, 250, 21);
console.log(result2);

//function that do something! 
//werkt ook met andere getallen


//opdracht calculating the average, deze geleerd in live-les reduce functie

const calculateAverage = function(numbers) {
    const average = numbers.reduce((total, n) => total + n)/numbers.length;  
    return (Math.round(average));
}
const result3 = calculateAverage([4, 8, 12, 24, 25]);
console.log(result3);

//werkt ook met andere getallen!
//this function produces something!

const averageNumber = function(number1, number2, number3, number4, number5){
    const total = number1 + number2 + number3 + number4 + number5;
    const totalNumbers = 5;
    const average = total / totalNumbers;
    return (Math.round(average));
}
const result4 = averageNumber(6, 8.6, 77, 123.234, 25);
console.log(result4); 

//deze functie geen [] undefined maar () gewoon losse getallen en geen array??
