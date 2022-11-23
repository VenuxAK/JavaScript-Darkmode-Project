"use strict";

const toggler = document.querySelector("#modeToggler");
const body = document.querySelector("body");
let dark = "#444";
let light = "#fff";

let darkmode = localStorage.getItem("darkmode");

toggler.addEventListener("click", darkmodeToggle)

if(darkmode === "enabled"){
  darkmodeOn();
}

function darkmodeToggle () {
  darkmode = localStorage.getItem("darkmode");
  if(darkmode === "enabled"){
    darkmodeOff();
  }else{
    darkmodeOn();
  }
}

function darkmodeOn () {
  body.style.backgroundColor = dark;
  darkmode = localStorage.setItem("darkmode", "enabled");
}
function darkmodeOff () {
  body.style.backgroundColor = light;
  darkmode = localStorage.setItem("darkmode", null);
}