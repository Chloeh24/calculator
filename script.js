var display = document.querySelector('#displayText')
var buttonArr = document.querySelectorAll('.calc')

var decimal = document.querySelector('#decimal')
var clear = document.querySelector('#clear')
var del = document.querySelector('#delete')

var operator = document.getElementsByClassName('operator')
var equals = document.querySelector('#equals')

var displayValue= ''
var decimalon = false;


//display calculations
for (var i=0; i< buttonArr.length; i++){
    buttonArr[i].addEventListener('click', function(){
        displayValue += this.innerHTML;
        display.innerHTML = displayValue;
    })
};

//do calculations
equals.addEventListener('click', answer())

function answer(x, y, op){
    if (displayValue !== 0 && !isNaN(displayValue.charAt(displayValue.length-1))){
       switch(op){
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '÷':
            return x / y;
        case '×':
            return x * y;
        }
       }
    }


//operators
for (var i=0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(){
        decimalon = false
    })
}



//decimal

decimal.addEventListener('click', function(){
    if(!decimalon){
        if(!isNaN(displayValue.charAt(displayValue.length-1))){
            displayValue += '.';
            display.innerHTML = displayValue;
            decimalon = true
       }   
    }
})
        

//clear button

clear.addEventListener('click', function(){
    displayValue = ''
    display.innerHTML = displayValue;
})

//delete button 

del.addEventListener('click', function(){
    displayValue = displayValue.slice(0, displayValue.length-1);
    display.innerHTML = displayValue;
});