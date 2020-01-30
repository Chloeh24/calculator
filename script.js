var displayTop = document.querySelector('#displayTop')
var displayBottom = document.querySelector('#displayBottom')
var numbers = document.querySelectorAll('.num')

var decimal = document.querySelector('#decimal')
var clear = document.querySelector('#clear')
var back = document.querySelector('#delete')

var operator = document.getElementsByClassName('operator')
var equals = document.querySelector('#equals')

var displayValue = '';
var lastChar = displayValue.charAt(displayValue.length-1)
var decimalon = false;
var operatorOn = false;

var x = null
var y = null 
var op;

//display 

for (var i=0; i< numbers.length; i++){
    numbers[i].addEventListener('click', function(){
        if (displayValue === '0' || displayValue === '') {
        displayValue = this.innerHTML;
        displayBottom.innerHTML = displayValue
        } else {
        displayValue+= this.innerHTML;
        displayBottom.innerHTML = displayValue
        }
      
    })
};

for (var i=0; i < operator.length; i++) {
    operator[i].addEventListener('click', updateDisplay);
}

function updateDisplay(){
        if(!isNaN(lastChar)){
            if(x) {
                y = +displayBottom.innerHTML;
                x = operate(x, y, op)
                newOp = this.innerHTML
                displayTop.innerHTML += y + '' + newOp + '';
                op = newOp;
            } else {
                op = this.innerHTML;
                x = +displayBottom.innerHTML;
                displayTop.innerHTML += x + '' + op + ''
            }
            displayValue = ''
        } 
            decimalon = false
    
        }
            



//do calculations

function equal(){
    if(!isNaN(lastChar)){
        y = +displayBottom.innerHTML;
        displayBottom.innerHTML = operate(x, y, op);
        displayTop.innerHTML = ''
        displayValue = ''
        x = null;
        y = null;
    }
}

function operate(x, y, op){
       switch(op){
        case '+':
            return parseFloat((x + y).toPrecision(8));
        case '-':
            return parseFloat((x - y).toPrecision(8));
        case '÷':
            return parseFloat((x / y).toPrecision(8));
        case '×':
            return parseFloat((x * y).toPrecision(8));
        default:
            console.log(displayValue)
       }
    }

    equals.addEventListener('click', equal)
    
//decimal

function dec(){
    if(!decimalon){
        if(!isNaN(lastChar)){
            displayValue += '.';
            displayBottom.innerHTML = displayValue;
            decimalon = true
       } else {
           displayValue += '0.';
           displayBottom.innerHTML = displayValue;
           decimalon = true
       }
    }
}


decimal.addEventListener('click', dec)

//clear button
function clearAll(){
    displayTop.innerHTML = ''
    displayBottom.innerHTML = '0';
    displayValue = ''
    x = null;
    y = null;
}


clear.addEventListener('click', clearAll)

//delete button 
function del(){
    displayValue = displayValue.slice(0, displayValue.length-1);
    displayBottom.innerHTML = displayValue;
};

back.addEventListener('click', del)

//keyboard functions

document.addEventListener('keydown', function(e) {
    if(!isNaN(e.key)) {
        if (displayValue === 0) {
            displayValue = e.key;
            displayBottom.innerHTML = displayValue;
        } else if(!isNaN(lastChar) || lastChar === '.' ){
        displayValue += e.key;
        displayBottom.innerHTML = displayValue;
    }
} else {
        switch(e.key) {
            case 'Escape':
                clearAll()
                break;
            case 'Backspace':
                del()
                break;
            case '=':
            case 'Enter':
                equal()
                break;
            case '.':
                dec()
                break;
            case '-':
                document.getElementById('minus').click()
                break;
            case '+':
                document.getElementById('add').click()
                break;
            case '*':
                document.getElementById('times').click()
                break;
            case '/':
                document.getElementById('divide').click()
                break;
                  }
    }
})