let raceNumber = Math.floor(Math.random() * 1000);

let runnerAge;

let isAdult; //boolean value

let earlyReg; //boolean value

let startTime; //string. determined by isAdult and earlyReg


//first, set age: do while loop for random number over 9
do {
  runnerAge = Math.floor(Math.random() * 70);
} while (runnerAge < 10);

//second, check age
if (runnerAge < 18) {  //if youth
  isAdult = false;
  earlyReg = "N/A";
  startTime = "12:30pm"
} else {  //if adult
  isAdult = true;
  if (raceNumber < 500) { //if raceNumber indicates early registration
    earlyReg = true;
    startTime = "9:30am";
  } else {
    earlyReg = false;
    startTime = "11:00am";
  }
}

console.log(`Runner #: ${raceNumber}\n Age: ${runnerAge}\n Early Registration: ${earlyReg}\n Start time: ${startTime}`);

//make second file to do this as a class
