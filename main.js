const redContainer = document.querySelector('#redContainer');

const redText = document.createElement('div');
const p = document.createElement("p");
p.innerText= ("Hey I'm red!");
redText.classList.add('redText');

redText.style.color = 'red';
redText.setAttribute('style', 'color:red;');

redContainer.append(p);