const btnShare = document.querySelector(".share");
const btnShareDesktop = document.querySelector(".share-desktop");
const active = document.querySelector(".active-mobile");
const activeDesktop = document.querySelector(".active-desktop");
const arrow = document.querySelector(".arrow");
const arrowDesktop = document.querySelector(".arrow-desktop");
const arrowActive = document.querySelector(".arrow-active");

active.style.display = "none";
activeDesktop.style.display = "none";

// Getting button share to listen
btnShare.addEventListener('click', function(){ 
    //if button share is clicked => check if active style is none
if(active.style.display === "none"){
    //if yes => switch to flex.
    active.style.display = "flex";
    btnShare.style.backgroundColor = "var(--active-share)";
    arrow.style.filter = "brightness(0) invert(1)";
//     if button is clicked and style is flex, switch to none on the next click.
}else {
    active.style.display = "none";
    btnShare.style.backgroundColor ="var(--main-background)"
    arrow.style.filter = "brightness(1) invert(0)";
}});


// // DESKTOP STATE
// // Getting button share to listen
btnShareDesktop.addEventListener('click', function(){
    //if button share is clicked => check if active style is none
if(activeDesktop.style.display === "none"){
    //if yes => switch to flex.
    activeDesktop.style.display = "flex";
    arrowActive.style.display = "block"
    btnShareDesktop.style.backgroundColor = "var(--active-share)";
    arrowDesktop.style.filter = "brightness(0) invert(1)";
    //if button is clicked and style is flex, switch to none on the next click.
}else{
    activeDesktop.style.display = "none";
    arrowActive.style.display = "none"
    btnShareDesktop.style.backgroundColor ="var(--main-background)"
    arrowDesktop.style.filter = "brightness(1) invert(0)";
}
});
// btnShare.addEventListener('click', () => {
//     active.classList.toggle('change');
//   });