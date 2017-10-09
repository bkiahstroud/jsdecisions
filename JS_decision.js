function greaterNum (x, y) {
  if (x > y) {
  alert(x + " is greater than " + y)
}
  else {
  alert(x + " is not greater than " + y)
}
}


function helloWorld (x) {
  if (x == "es") {
    return "Hola el Mundo";
  }
  if (x == "en") {
    return "Hello World";
  }
  if (x == "jp") {
    return "Konnichiwa";
  }
  else {
    return "Hello world"
  }
}

function assignGrade (x) {
  if (x >= 90 && x <=100) {
    return "A";
  }
  if (x >= 80 && x < 90) {
    return "B";
  }
  if (x >= 70 && x < 80) {
    return "C";
  }
  if (x >= 60 && x < 70) {
    return "D";
  }
  if (x < 60 && x >= 0) {
    return "F";
  }
  else {console.log ("invalid")}
}
//
function pluralizer (number, word) {
  if (word != "sheep" && word != "deer" && word != "species") {
    if (number <= 1) {
      console.log(number + " " + word)
    }
    if (number > 1) {
        console.log(number + " " + word + "s");
    }
  }
  else {console.log(number + " " + word)}
}
//
var count = 0;
function iteration() {
  while (count < 16) {
    if (count % 2 == 0) {
    console.log(count + " is even")
    count += 1;
    }
    else {
      console.log(count + " is odd")
      count += 1;
    }
  }
}
//

var count = 0;
function fizzBuzz() {
  while (count < 101) {
    if (count % 3 == 0 && count % 5 == 0) {
      console.log("fizzbuzz")
      count += 1;
    }
    if (count % 3 == 0) {
    console.log("fizz")
    count += 1;
    }
    if (count % 5 == 0) {
    console.log("buzz")
    count += 1;
    }
    else {
      console.log(count)
      count += 1;
    }
  }
}

//Hi-Lo Game

function hiLo () {
  var userName = prompt("Please enter your name!" , "Enter here");
  var numAnswer = parseInt(Math.random() * 100);
  var count = 1;
  var userNum = prompt("Please enter your guess" , "Enter here");
  if (userNum >= 101 || userNum <= 0) {
    alert("Invalid Input!")
    return 0;
  }
  else if (parseInt(userNum , 10).toString() == "NaN") {
    alert("Please enter a valid number!")
    return 0;
  }
  while (count < 7) {
    if (userNum == numAnswer) {
      alert("You got it, " + userName + "!")
      return "You win!";
    }
    else if (userNum < numAnswer) {
      alert("Your guess is too low.")
    }
    else {
      alert("Your guess is too high.")
    }
    userNum = prompt("Try again" , "Get it right this time");
    count++;
  }
  alert("Sorry " + userName + ", you lose!")
}

//Reverse Challenge

function reverse(){
  var userInput = prompt("Enter a sentence here");
  var splitInput = userInput.split(" ");
  if (splitInput.length > 4) {
    splitInput.reverse().join("");
    console.log(splitInput);
  }
}
