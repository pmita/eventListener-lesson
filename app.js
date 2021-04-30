const buttons = document.querySelectorAll('.btn');
const counter = document.querySelector('.counter');
let counterNumber = parseFloat(counter.innerText);

/*
const decreaseButton = buttons[0];
const resetButton = buttons[1];
const increaseButton = buttons[2];


decreaseButton.addEventListener('click', function(){
    counterNumber = counterNumber -1;
    counter.innerText = counterNumber;
});

resetButton.addEventListener('click', function(){
    counterNumber = 0;
    counter.innerText = counterNumber;
})

increaseButton.addEventListener('click', function(){
    counterNumber = counterNumber + 1;
    counter.innerText = counterNumber;
});
*/

buttons.forEach( function(button, index){
    button.addEventListener('click', function(){
        switch(index){
            case 0:
                counterNumber = counterNumber -1;
                counter.innerText = counterNumber; 
                break; 
            case 1:
                counterNumber = 0;
                counter.innerText = counterNumber;
                break;
            case 2:
                counterNumber = counterNumber + 1;
                counter.innerText = counterNumber;
                break;
        }
    });
});




