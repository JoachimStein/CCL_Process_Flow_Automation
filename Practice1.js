// Convert Ferenheight to Celcius

// function toCelcius(Farenheight) {
//     return (5/9) * (Farenheight - 32);
// }

// let value = toCelcius(98.4)

// console.log("Your temperature is " + value.toFixed(2) + " degree celcius");

// ============================================================================== //

// Create and Access Objects

const person = {
    firstName : "Afjol",
    lastName : "Hussain",
    age : 27,
    height : "5 ft 3 inch",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName(), person.fullName().length ,person.age, person.height);
