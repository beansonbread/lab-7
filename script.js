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
});