const redContainer = document.querySelector('#redContainer');

const redText = document.createElement('div');
const p = document.createElement("p");
p.innerText= ("Hey I'm red!");

p.style.color = 'red';
p.setAttribute('style', 'color:red;');

redContainer.append(p);