////////////////////////////////////////////////////////////
const backimgs = `"./assets/imagens/back.png"`;
//endereço da imagem de cima das cartas
////////////////////////////////////////////////////////////
const frontimgs = [
    `"./assets/imagens/bobrossparrot.gif"`,
    `"./assets/imagens/explodyparrot.gif"`,
    `"./assets/imagens/fiestaparrot.gif"`,
    `"./assets/imagens/metalparrot.gif"`,
    `"./assets/imagens/revertitparrot.gif"`,
    `"./assets/imagens/tripletsparrot.gif"`,
    `"./assets/imagens/unicornparrot.gif"`
];
//endereço das imagens de baixo das cartas
////////////////////////////////////////////////////////////
frontimgs.sort(comparador);
function comparador() {
    let meio = 0.5;
    return Math.random() - meio;
}
//endereços de baixo das cartas embaralhados
////////////////////////////////////////////////////////////

const TextoCarta =
`<div onclick="flip(this)" data-test="card" class="carta"> 
    <div class="frente pra-cima">
        <img data-test="face-down-image" src=` + backimgs + ` alt="">
    </div>
    <div class="verso pra-baixo">
        
    </div>
</div>`;
//Textos geradores de cada carta originalmente
////////////////////////////////////////////////////////////

let contadordeJogadas = 0;
let dois = 2;
let minimodecartas = 4;
let maximodecartas = 14;
//Textos geradores de cada carta originalmente
////////////////////////////////////////////////////////////
    let intervalo;
function flip(seletor) {
    seletor.classList.toggle("fliped");
    let cartasviradas = document.querySelectorAll(".fliped");
    if (cartasviradas.length === dois && cartasviradas[0].innerHTML !== cartasviradas[1].innerHTML) {
        setTimeout(unflip, 1000);
    }
    if (cartasviradas.length == dois && cartasviradas[0].innerHTML == cartasviradas[1].innerHTML) {
        keepFliped();
    }
    if (cartasviradas.length > dois) {
        cartasviradas[0].classList.remove("fliped");
        cartasviradas[1].classList.remove("fliped");
        cartasviradas[dois].classList.remove("fliped");
    }
    contadordeJogadas++;
    ganhou();
}
//função de flip das cartas e procura Pares
////////////////////////////////////////////////////////////

function unflip() {
    let cartasviradas = document.querySelectorAll(".fliped");
    cartasviradas[0].classList.remove("fliped");
    cartasviradas[1].classList.remove("fliped");
}

function keepFliped() {
    let cartasviradas = document.querySelectorAll(".fliped");
    cartasviradas[0].classList.remove("fliped");
    cartasviradas[1].classList.remove("fliped");
    cartasviradas[0].classList.add("fliped-permanente");
    cartasviradas[1].classList.add("fliped-permanente");
}

//função flip and unflip
////////////////////////////////////////////////////////////

function teste(x) {
    if (x % dois !== 0 || x < minimodecartas || x > maximodecartas) {
        x = prompt('Por favor, esscolha um número par entre 4 e 14');
        teste(x);
    } else {
        window.numerovalido = x;
    }
}
//Função de teste para validade do numero de cartas
////////////////////////////////////////////////////////////

let numerodecartas = prompt('Com Quantas Cartas deseja jogar? Escolha um número par entre 4 e 14');
if (numerodecartas % dois !== 0 || numerodecartas < minimodecartas || numerodecartas > maximodecartas) {
    numerodecartas = prompt('Por favor, esscolha um número par entre 4 e 14');
    teste(numerodecartas);
} else {
    window.numerovalido = numerodecartas;
}

for (let j = 0; j < window.numerovalido; j++) {
    const mesa = document.querySelector(".card-space");
    mesa.innerHTML = mesa.innerHTML + TextoCarta;
}
//Cartas geradas segundo o numerovalido do prompt
////////////////////////////////////////////////////////////
const n1 = window.numerovalido/dois;

const baralho1 = frontimgs.slice(0, n1);
const baralho = baralho1.concat(baralho1);
baralho.sort(comparador); 

//cortar e distribuir o numero de cartas do prompt
////////////////////////////////////////////////////////////

for (let i = 0; i < numerovalido; i++) {
    const cartas = document.querySelectorAll(".carta .verso");
    cartas[i].innerHTML += `<img data-test="face-up-image" src=` + baralho[i] + ` alt="">`;
}

//Distribui as imagens nas cartas
////////////////////////////////////////////////////////////
function ganhou() {
    const cartasCertas = document.querySelectorAll(".fliped-permanente");
    if (cartasCertas.length === baralho.length) {
        alert(`Você ganhou em ${contadordeJogadas} jogadas!`);
    }

}

