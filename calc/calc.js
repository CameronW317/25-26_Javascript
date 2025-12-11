const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display')

buttons.forEach(
    function(button){
        button.addEventListener("click",calculate);
    }
);

function calculate(event){
    //What was clicked
    const clickedValue =  event.target.value;

    // Handle what was clicked
    //If it's an equal sign
    if(clickedValue === "="){
        //Is the display empty
        if(display.value !== ""){
            //Calculate the value and display
            display.value = eval(display.value);
        }
    }else if(clickedValue === "C"){
        //Empty the display
        display.value = "";
    }
    //Otherwise add it to the display
    else{
        display.value += clickedValue;
    }
}