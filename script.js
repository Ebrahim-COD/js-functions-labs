const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  function isAdult(age) {
    if (age >= 18) {
        return "Adult"
    } else if ( age < 18) {
        return "Minor"
    } else {
        return "Try Again"
    }
  } console.log('Exercise 2 Result:', isAdult(21));

  function isCharAVowel(a) {
    if ( a === "a" || a === "e" || a === "i" || a === "o" || a === "y"){
        return true;
    } else {
        return false;
    }
  }console.log('Exercise 3 Result:', isCharAVowel("a"));

  function generateEmail(name,domain) {
    return name+"@"+domain
  } console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

  function greetUser(name,time) {
    return "Good "+time+", "+name+"!"
  }console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

  function maxOfThree(a,b,c) {
    if ( a > b && a > b) {
        return a
    } else if ( b > a && b > c) {
        return b
    } else {
        return c
    }
  }console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

  function calculateTip(bill,tip) {
    return (bill/100)*tip
  }console.log('Exercise 7 Result:', calculateTip(50, 20));

  function convertTemperature(temp, scale) {
    const cel = (temp*1.8)+32
    const fah = (temp-32)*(5/9)

    if ( scale === "C") {
        return cel
    } else if ( scale === "F") {
        return fah
    }else {
        return "Try Again"
    }
  } console.log('Exercise 8 Result:', convertTemperature(32, "C"));

function basicCalculator(a,b,string) {
    const add = a + b
    const sub = a - b
    const multi = a * b
    const div = a / b

    if ( string === "add") {
        return add
    } else if (string === "subtract") {
        return sub
    } else if (string === "multiply") {
        return multi
    } else if (string === "divide") {
        return div
    }else {
        return "TRY AGAIN"
    }
}console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

function calculateGrade(mark) {

  if ( mark >= 90) {
    return 'A'
  } else if ( mark >= 80 && mark <= 89) {
      return 'B'
  } else if ( mark >= 70 && mark <= 79) {
      return 'C'
  } else if ( mark >= 60 && mark <= 69) {
      return 'D'
  } else {
    return 'F'
  }
}console.log('Exercise 10 Result:', calculateGrade(85));

function createUsername(first,second) {

  let firstThree = first.slice(0, 3)

  let secondThree = second.slice(0, 3)

  let all = first.length + second.length

  let together = firstThree + secondThree + all

  return together

}console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

function numArgs() {
  
  return arguments.length
}console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));