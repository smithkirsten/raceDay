//create randomized variables
let raceNumber = Math.floor(Math.random() * 1000);
let runnerAge;
do {
  runnerAge = Math.floor(Math.random() * 70);
} while (runnerAge < 10);

//create class
class runner {
  constructor(number, age) {
    this.number = number;
    this.age = age;
    this.isAdult();
    this.earlyReg();
    this.startTime();
  }
  isAdult() {
    this.age < 18 ? this.isAdult = false
    : this.isAdult = true;
  }
  earlyReg(){

  }
  startTime() {

  }
}

//print class object instance
