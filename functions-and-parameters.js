// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

/* variables */
let course = "Data Science";
let fee = 99.0;

/* Array */
let goals = ["Job", "comfort", "worldly desires"];

// 2) Output ("alert") the three variable values

alert(course);
alert(fee);
alert(goals);

// 3) Try "grouping" the three variables together and still output their values thereafter

/* object */
let bootCamp = {
  campCourse: "100-Days development",
  campFee: 180.0,
  campGoals: ["Angular", "JavaScript", "Flutter"],
};

alert(bootCamp.campCourse);
alert(bootCamp.campFee);
alert(bootCamp.campGoals);

/* array [] object {} */

// 4) Also output the second element in your "main goals" variable

/* array in one of the variables in obj bootCamp */
alert(bootCamp.campGoals[2]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

/* parameter in the function getCampList, array and index can be used to insert our own values */
/* example= getCampList( whichArrayInObj, whichIndexOfThatArray ); */
function getCampList(justArray, justIndex) {
  /* parameter (unique) */

  /* the logic behind this is forming function of retrieving a variable in an existing array*/
  /* which is already grouped in an obj */
  let justArrayVariable = justArray[justIndex];
  return justArrayVariable;
}

// 6) Execute your custom command from (5) and output ("alert") the result// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

/* specifically pick third variable in the bootCamp obj because it is an array */
let firstGoal = getCampList(bootCamp.campGoals, 0);
alert(firstGoal);

/* alert(getCampList(bootCamp.campGoals, 1)); */
/* you can't output a function. it must be a variable or an object!*/

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result
