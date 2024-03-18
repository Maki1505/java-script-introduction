let age = 21;
let userName = "Maki";
let hobbies = ["Football", "Video Games", "Proggraming"];
let job = { title: "Developer", place: "Sarajevo", salary: 50000 };

let totalAdultYears;

function calculateAdultYears(userAge) {
   return  userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 28;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);


let person = {name : "Maki",
greet() {
console.log("Hello");
}
}

person.greet();