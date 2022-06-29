const redContainer = document.querySelector("#redContainer");

const redText = document.createElement("div");
const p = document.createElement("p");
p.innerText = "Hey I'm red!";
p.style.color = "red";
p.setAttribute("style", "color:red;");

redContainer.append(p);

const blueh3 = document.createElement("h3");
blueh3.innerText = "I'm a blue h3!";
blueh3.style.color = "blue";
blueh3.setAttribute("style", "color:blue;");
redContainer.append(blueh3);