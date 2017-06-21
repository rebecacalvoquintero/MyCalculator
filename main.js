//I will define my variables
//first...the ones I get accessing the DOM
var total = document.getElementById('total');
var equal = document.getElementById('equal');
var clearButton = document.getElementById('clear');
var allClearButton = document.getElementById('clearall');

// second...the ones that will allow me to store values
//the value that is hold in my Calculator
var memory = [];
//the value I am adding now - the current value, digit;
var current = "0";

// myOperations:
//adding function clear
function clear() {
  memory.pop();
  current = memory.join("");
}

function allClear() {
  current = "0";
  memory = []; //clear memory
}

function getResult(memory) {

  var result = Number(memory[0]);

  for (var i = 1; i <= memory.length; i += 2) {
    var number = Number(memory[i + 1]);
    var operator = memory[i];
    if (operator === "+") {
      result += number;
    } else if (operator === "-") {
      result -= number
    } else if (operator === "*") {
      result *= number;
    } else if (operator === "/") {
      result /= number;
    } else if (operator === "^") {
      result = result ^ number;
    }
  }
  return result;
}

// //adding my events handler

var insertNumber = function(e) {
  if (e.target === clearButton) {
    clear();
  } else if (e.target === allClearButton) {
    allClear();
  } else if (e.target === equal) {
    current = getResult(memory)
    current = current.toString().split("").slice(0,7).join("");
  } else if (e.target.tagName === "A") {
    var number = e.target.innerHTML;
    if (number == ".") {
      current = current + ".";
    } else if (current === "0") {
      current = e.target.innerHTML;
      memory.push(number);
    } else {
      current += e.target.innerHTML;
      memory.push(number);
    }
  }
  total.innerHTML = current;
}
// //
document.getElementById('operators').addEventListener('click', insertNumber, false);
