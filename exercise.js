let courseName = "100 days of code - bootcamp";
let priceCourse = 75;
let mainGoals = [
  "To learn so much about java script",
  "To actually become a web developer",
  "To learn everything that the course gives",
];
let onlineCourse = {
  name: "100 days of code - bootcamp",
  price: 75,
  goal: [
    "To learn so much about java script",
    "To actually become a web developer",
    "To learn everything that the course gives",
  ],
};

alert(courseName);
alert(priceCourse);
alert(mainGoals);
alert(onlineCourse.name);
alert(onlineCourse.price);
alert(onlineCourse.goal);
alert(onlineCourse.goal[1]);



function executingCommands(array, arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;

}

let firstGoal = executingCommands(onlineCourse.goal, 0);
alert(firstGoal);