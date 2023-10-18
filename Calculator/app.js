const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let calcValue

function calculate(button){
    const text = button.textContent
    if (text === 'Clr') {
        calculation = []
        screenDisplay.textContent = ' '
    }
    else if (text === "="){
        screenDisplay.textContent = eval(calcValue)
    }
    else{
        calculation.push(text)
        calcValue = calculation.join('')
        screenDisplay.textContent = calcValue
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))