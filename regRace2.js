//create randomized variables
let raceNumber = Math.floor(Math.random() * 1000);
let runnerAge;
do {
  runnerAge = Math.floor(Math.random() * 70);
} while (runnerAge < 10);

//create class
class Runner {
  constructor(number, age) {
    this.number = number;
    this.age = age;
    this.isAdult();
    this.earlyReg();
    this.startTime;
  }
  isAdult() {
    this.age < 18 ? this.isAdult = false
    : this.isAdult = true;
  }
  earlyReg() {
    switch (this.isAdult) {
      case false:
        this.earlyReg = "N/A";
        this.startTime = "12:30pm"
        break;
      case true:
        if (this.number < 500) {
          this.earlyReg = true;
          this.startTime = "9:30am"
        } else {
          this.earlyReg = false;
          this.startTime = "11:00am"
        }
        break;
    }
  }
}

//create runner
let runner1 = new Runner(raceNumber, runnerAge);
console.log(runner1);
