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

const buttons = document.querySelectorAll(`.button`)
buttons.forEach((button) => {
    button.addEventListener(`click`, () => {
        if (button.innerHTML== "=") {
            calcu = eval(calcu)
            calculator.value = calcu
        }
        else if (button.innerHTML === "AC") {
            calcu = ""
            calculator.value = calcu;
            
        }

        else if (button.innerHTML === "DEL") {
            let l = calcu.length - 1
            let bb = calcu.slice(0, l)
            calcu = bb
            calculator.value = calcu
        }
        else {
            
            let value = button.innerHTML
            calcu += value
            console.log(calcu);
            calculator.value = calcu
        }
        

    })
});     