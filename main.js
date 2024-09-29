const box = document.getElementById("box");


function gerarNumero () {
const min = parseInt(document.getElementById("n1").value);
const max = parseInt(document.getElementById("n2").value);
let number = Math.floor(Math.random() * (max - min + 1)) + min;
box.innerHTML = `<p class="number">${number}</p>`;
}

