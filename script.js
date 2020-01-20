var display = document.querySelector('#displayText')
var buttonArr = document.querySelectorAll('.calc')
var displayValue = '';

//display calculations
for (var i=0; i< buttonArr.length; i++){
    buttonArr[i].addEventListener('click', function(){
        displayValue += this.innerHTML;
        display.innerHTML = displayValue;
    })
};

//do calculations



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