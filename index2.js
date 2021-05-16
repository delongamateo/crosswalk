// Saving div's and button in variable's
let stopOn = document.querySelector(".stop-on");
let stopOff = document.querySelector(".stop-off");
let button = document.querySelector(".switch");

//Function that will hide one div and show another
const youCanWalk = () => {

   stopOn.style.display = "none";
   stopOff.style.display = "block";

    // callback function that will show first div and hide second after 5 sec
    setTimeout(() => {
      stopOn.style.display = "block";
      stopOff.style.display = "none";
  }, 5000)
}

// add event listener that will on click on button call youCanWalk function but it will wait 3 sec
button.addEventListener("click", () => {
    setTimeout(youCanWalk, 3000)
});

// adding countdown

let count = document.querySelector(".countdown");



const countDown = () => {
  let numbers = 3;


  

  const count1 = setInterval(() => {
    numbers = numbers - 1;

    count.innerHTML = numbers;

    if (numbers === 0) {
      clearInterval(count1);
    }

  }, 1000)



};

button.addEventListener("click", countDown);


const timeLeft = () => {
  let numbers = 5;

  const count1 = setInterval(() => {
    numbers = numbers - 1;

    count.innerHTML = numbers;

    if (numbers === 0) {
      clearInterval(count1);
    }

  }, 1000);


};

button.addEventListener("click", () => {
  setTimeout(timeLeft, 3000);
});





  



