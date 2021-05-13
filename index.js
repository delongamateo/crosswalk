// Saving div's and button in variable's
let stopOn = document.querySelector(".stop-on");
let stopOff = document.querySelector(".stop-off");
let button = document.querySelector(".switch");

//Function that will hide one div and show another
const youCanWalk = () => {

   stopOn.style.display = "none";
   stopOff.style.display = "flex";

    // callback function that will show first div and hide second after 5 sec
    setTimeout(() => {
   stopOn.style.display = "flex";
   stopOff.style.display = "none";
}, 5000)
}
// add event listener that will on click on button call youCanWalk function
button.addEventListener("click", youCanWalk)
