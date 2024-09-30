
const display = document.getElementById('display')

const ToDisplay = (input) => {
    display.value += input
}

const clearDisplay = () => {
    display.value = ""   
}

const calculate = () => {
    try{
        display.value = eval(display.value)
    } catch(err){
        display.value = 'Error'
    }
}