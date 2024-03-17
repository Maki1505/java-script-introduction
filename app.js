let age = 21;
let userName = "Maki";
let hobbies = ["Football", "Video Games", "Proggraming"];
let job = { title: "Developer", place: "Sarajevo", salary: 50000 };

let totalAdultYears;

function calculateAdultYears() {
   return  age - 18;
}

totalAdultYears = calculateAdultYears();
alert(totalAdultYears);

age = 28;
totalAdultYears = calculateAdultYears();

alert(totalAdultYears);



