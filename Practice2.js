const names = [
    "A",
    "B",
    "C"
]

try {
    class car {
        constructor(name,year) {
            this.name = name;
            this.year = year;
        }
        age() {
            const date = new Date();
            return date.getFullYear() - this.year;
        }   
     }

     const myCar = new car("Ford", 1994);
     console.log("The ", myCar.name, " is ", myCar.age(), " years old!");

} catch(error) {
    console.log(error.message);
}