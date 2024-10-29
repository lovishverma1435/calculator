const calculator = document.getElementById(`calculator`)

// function insertValue(value) {
//     calculator.value += value;
// }

// function resultClear() {
//     calculator.value = ``;
// }

// function deleteResult() {
//     calculator.value = calculator.value.slice(0 , -1);
// }

// function calculate() {
//     try{
//         calculator.value = eval(calculator.value);
//     }
//     catch(error){
//         calculator.value = "error";
//     }
// }










































let calcu = "";

const buttons = document.querySelectorAll(`#all_buttons .button`)
buttons.forEach((button) => {
    button.addEventListener(`click`, () => {
        if (button.value == "=") {
            calcu = eval(calcu)
            calculator.value = calcu
        }
        else if (button.value === "AC") {
            console.log("AC");
            calculator.value = "";
            
        }

        else if (button.value === "DEL") {
            let l = calcu.length - 1
            let bb = calcu.slice(0, l)
            calcu = bb
            calculator.value = calcu
        }
        else {
            let value = button.value
            calcu += value
            calculator.value = calcu
        }
        

    })
});     