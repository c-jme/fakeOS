const startbutton = document.querySelector(".startbutton");
const startButton2 = document.getElementById("startbutton");
const menu = document.getElementById("menu");
const startOn = document.querySelector(".start__Off");


//startmenu button toggle
startButton2.addEventListener("click", () => {
  if (menu.style.display === "none") {
    startOn.classList.remove("start__Off");
    startOn.classList.toggle("start__On");
    menu.style.display = "block";
  } else {
    startOn.classList.remove("start__On");
    startOn.classList.toggle("start__Off");
    menu.style.display = "none";
  }
});