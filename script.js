
let cloud = document.getElementById("cloud");
cloud.src = "images/cloud.png";

let rainbow = document.getElementById("rainbow");

rainbow.style.display = "flex";

arches = document.getElementsByClassName("arch");

arches[0].style.backgroundColor = "red";

let violet = document.createElement("div");

violet.className = "arch violet";

rainbow.appendChild(violet);
