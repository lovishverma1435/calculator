const calculator = document.getElementById("calculator");

function insertValue(value) {
  calculator.value += value;
}

function resultClear() {
  calculator.value = "";
}

function deleteResult() {
  calculator.value = calculator.value.slice(0, -1);
}

function calculate() {
  try {
    calculator.value = eval(calculator.value);
  } catch (error) {
    calculator.value = "Error";
  }
}
