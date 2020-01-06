/* By the end of the first class each student:
   modifies the code with their own information.
   Adds a picture.  Saves their information to a .csv file.
   Physically adds the .csv to th eclass repository on github.
   
   Hard wire the input for lesson 1.
   Flavors of loops:
     The animation loop
     Traditional iteration
     Recursion - which we absolutely NEED for search.
     */
   */

let person = {};
let studyPlan = { coding : "3 hours", journal : "3 hours", project : "3 hours"};
let studySchedule = { Monday : "2 - 4", Tuesday : "4 - 9", Thursday : "9 - 11"}
function setup() {
  createCanvas(400, 400);
  person.name = "Ursula Wolz";
  person.email = "ursula.wolz@gmail.com";
  person.pictureName = "ursula";
  person.studyHabits = studyPlan;
  person.studySchedule = studySchedule;
  noLoop();

}

function draw() {
  // Comment and modify - display all the information on the screen.
  
  background(220);
  print(person);
}