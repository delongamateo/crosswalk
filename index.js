// U varijable spremamo divove sa slikama i button
let stopOn = document.querySelector(".stop-on");
let stopOff = document.querySelector(".stop-off");
let button = document.querySelector(".switch");

//funkcija koja ce kad se pozove sakrit trenutno peikazan div i pokazat skriveni
const youCanWalk = () => {

   stopOn.style.display = "none";
   stopOff.style.display = "flex";

    // callback funkcija koja ce nakon pet sekundi vratit prvi div a sakrit drugi
    setTimeout(() => {
   stopOn.style.display = "flex";
   stopOff.style.display = "none";
}, 5000)
}
// dodajemo event listener na button kad se klikne pozove funkciju youCanWalk
button.addEventListener("click", youCanWalk)
