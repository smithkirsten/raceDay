let raceNumber = Math.floor(Math.random() * 1000);

let runnerAge = Math.floor(Math.random() * 70);

let isAdult; //boolean value

let earlyReg; //boolean value

let startTime; //string. determined by isAdult and earlyReg


//first, set age: do while loop for random number over 9

//second, check age
  //if < 18: isAdult = false. earlyReg = "N/A". startTime = "12:30pm"
  //else if >= 18: isAdult = true.
    //if raceNumber < 500 earlyReg = true. startTime = "9:30am".
    //else if raceNumber > 500 earlyReg = false. startTime = "11 am"

//console.log raceNumber, runnerAge, earlyReg, and startTime.
