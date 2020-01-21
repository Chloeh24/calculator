var display = document.querySelector('#displayText')
var buttonArr = document.querySelectorAll('.calc')
var equalButton = document.querySelector('#equals')
var displayValue= ''



//display calculations


for (var i=0; i< buttonArr.length; i++){
    buttonArr[i].addEventListener('click', function(){
        displayValue += this.innerHTML;
        display.innerHTML = displayValue;
    })
};

//do calculations
function add(x, y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function divide (x, y) {
    return x / y;
}

function times(x,y) {
    return x * y;
}

function operate(x, y, operator){
    
}

//clear button

var clear = document.querySelector('#clear')

clear.addEventListener('click', function(){
    displayValue = ''
    display.innerHTML = displayValue;
})

//delete button 
var del = document.querySelector('#delete')

del.addEventListener('click', function(){
    displayValue = displayValue.slice(0, displayValue.length-1);
    display.innerHTML = displayValue;
});