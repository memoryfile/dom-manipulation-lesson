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

// Create div
const quirkyDiv = document.createElement("div");
quirkyDiv.style.border = "black";
quirkyDiv.setAttribute("style", "background-color:pink", "border:black");
redContainer.append(quirkyDiv);

const quirkyDiv2 = document.createElement("h1");
quirkyDiv.innerText = "I'm in a div";
redContainer.append(quirkyDiv2);
