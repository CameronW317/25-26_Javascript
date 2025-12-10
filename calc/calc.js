const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display')

buttons.forEach(
    function(button){
        button.addEventListener("click",calculate);
    }
);
