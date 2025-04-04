//mouse hover
document.addEventListener('DOMContentLoaded', function () {
const mouseEvent = document.querySelector('#mouse-events');

mouseEvent.addEventListener('mouseenter', () => {
    mouseEvent.textContent = "hello!";
    console.log("hello!");
});

mouseEvent.addEventListener('mouseleave', () => {
    mouseEvent.textContent = "bye!";
    console.log("bye!");
})


//keyboard events
const input = document.getElementById('keyboard-events');
const display = document.getElementById('lastkey');

input.addEventListener('keyup', function(event) {
    display.textContent = `the last key you entered was: ${event.key}`;
});

//form events
const submitEvent = document.getElementById('live-feedback');

submitEvent.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("thanks!");
});

//focus & blur events
const name = document.getElementById('name');
const response = document.getElementById('response');

name.addEventListener('focus', function() {
    response.textContent = "what's your name?";
    response.style.color = "blue";
});

name.addEventListener('blur', function() {
    const input = name.value;
    if (input) {
        response.textContent = `hi ${input}`;
        response.style.color = "green";
    }
    else {
        response.textContent = "you didn't enter your name";
        response.style.color = "red";
    }
})

});