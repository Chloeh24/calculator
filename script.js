var displayTop = document.querySelector('#displayTop')
var displayBottom = document.querySelector('#displayBottom')
var numbers = document.querySelectorAll('.num')

var decimal = document.querySelector('#decimal')
var clear = document.querySelector('#clear')
var del = document.querySelector('#delete')

var operator = document.getElementsByClassName('operator')
var equals = document.querySelector('#equals')

var displayValue = '';
var decimalon = false;
var x = null
var y = null 
var op;

//display 

for (var i=0; i< numbers.length; i++){
    numbers[i].addEventListener('click', function(){
        if (displayValue === '0') {
        displayValue = this.innerHTML;
        displayBottom.innerHTML = displayValue
        } else {
        displayValue+= this.innerHTML;
        displayBottom.innerHTML = displayValue
        }
      
    })
};

for (var i=0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(){
        if(!isNaN(displayValue.charAt(displayValue.length-1))){
            if(x) {
                y = +displayBottom.innerHTML;
                x = operate(x, y, op)
                newOp = this.innerHTML
                displayTop.innerHTML += y + '' + newOp + '';
            } else {
                op = this.innerHTML;
                x = +displayBottom.innerHTML;
                displayTop.innerHTML += x + '' + op + ''
            }
            displayValue = '0'
        }
            decimalon = false
        })
    }

//do calculations
equals.addEventListener('click', function(){
    if(!isNaN(displayValue.charAt(displayValue.length-1))){
        y = +displayBottom.innerHTML;
        displayBottom.innerHTML = operate(x, y, op);
        displayTop.innerHTML = ''
        displayValue = ''
        x = null;
        y = null;
    }
})

function operate(x, y, op){
       switch(op){
        case '+':
            return parseFloat(x + y)
        case '-':
            return parseFloat(x - y);
        case '÷':
            return parseFloat(x / y);
        case '×':
            return parseFloat(x * y);
        default:
            console.log(displayValue)
       }
    }

//decimal

decimal.addEventListener('click', function(){
    if(!decimalon){
        if(!isNaN(displayValue.charAt(displayValue.length-1))){
            displayValue += '.';
            displayBottom.innerHTML = displayValue;
            decimalon = true
       }   
    }
})

//clear button

clear.addEventListener('click', function(){
    displayTop.innerHTML = ''
    displayBottom.innerHTML = '0';
    x = null;
    y = null;
})

//delete button 

del.addEventListener('click', function(){
    displayValue = displayValue.slice(0, displayValue.length-1);
    displayBottom.innerHTML = displayValue;
});