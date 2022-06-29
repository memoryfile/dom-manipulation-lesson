const redContainer = document.querySelector("#redContainer");

// Create red text with p

const redText = document.createElement("div");
const p = document.createElement("p");
p.innerText = "Hey I'm red!";
p.style.color = "red";
p.setAttribute("style", "color:red;");

redContainer.append(p);

// Create blueh3

const blueh3 = document.createElement("h3");
blueh3.innerText = "I'm a blue h3!";
blueh3.style.color = "blue";
blueh3.setAttribute("style", "color:blue;");
redContainer.append(blueh3);

const divContainer = document.querySelector("#divContainer");

// Create div
const quirkyDiv = document.createElement("div");
quirkyDiv.style.cssText = "background-color: pink; border:2px black";

const quirkyDiv2 = document.createElement("h1");
quirkyDiv2.innerText = "I'm in a div";
quirkyDiv.append(quirkyDiv2);

const quirkyDiv3 = document.createElement("p");
quirkyDiv3.innerText = "ME TOO!";
quirkyDiv.append(quirkyDiv3);

divContainer.append(quirkyDiv);
