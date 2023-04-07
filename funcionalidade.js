////////////////////////////////////////////////////////////
const endereçoBackground = `"./assets/imagens/back.png"`
//endereço da imagem de cima das cartas
////////////////////////////////////////////////////////////
const endereçosImagens = [
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
endereçosImagens.sort(comparador); 
function comparador() { 
    return Math.random() - 0.5; 
}
//endereços de baixo das cartas embaralhados
////////////////////////////////////////////////////////////

const TextoCarta = 
`<div onclick="flip(this)" class="carta"> 
    <div class="frente pra-cima">
        <img src=` + endereçoBackground + ` alt="">
    </div>
    <div class="verso pra-baixo">
        
    </div>
</div>`;
//Textos geradores de cada carta originalmente
////////////////////////////////////////////////////////////

let contadordeJogadas = 0;
//Textos geradores de cada carta originalmente
////////////////////////////////////////////////////////////
    let intervalo;
function flip(seletor) {
    seletor.classList.toggle("fliped");
    let cartasViradas = document.querySelectorAll(".fliped");
    if (cartasViradas.length == 2 && cartasViradas[0].innerHTML !== cartasViradas[1].innerHTML) {
        setTimeout(Unflip, 1000);
        
    }
    if (cartasViradas.length == 2 && cartasViradas[0].innerHTML == cartasViradas[1].innerHTML) {
        keepFliped();
    }
    if (cartasViradas.length > 2) {
        cartasViradas[0].classList.remove("fliped");
        cartasViradas[1].classList.remove("fliped");
        cartasViradas[2].classList.remove("fliped");
    }
    
    contadordeJogadas++;
    ganhou();
    //setInterval(Pares, 3500, seletor);
    //const intervalo = setInterval(Pares, 3500, seletor);
    //clearInterval(intervalo);
}
//função de flip das cartas e procura Pares
////////////////////////////////////////////////////////////

function Unflip() {
    let cartasViradas = document.querySelectorAll(".fliped");
    cartasViradas[0].classList.remove("fliped");
    cartasViradas[1].classList.remove("fliped");
}

function keepFliped() {
    let cartasViradas = document.querySelectorAll(".fliped");
    cartasViradas[0].classList.remove("fliped");
    cartasViradas[1].classList.remove("fliped");
    cartasViradas[0].classList.add("fliped-permanente");
    cartasViradas[1].classList.add("fliped-permanente");
}

//função flip and unflip
////////////////////////////////////////////////////////////

function teste(x) {
    if (x % 2 != 0 || x < 4 || x > 14) {
        x = prompt('Por favor, esscolha um número par entre 4 e 14');
        teste(x);
    } else {
        window.numeroValido = x;
    }
}
//Função de teste para validade do numero de cartas
////////////////////////////////////////////////////////////

let NumeroDeCartas = prompt('Com Quantas Cartas deseja jogar? Escolha um número par entre 4 e 14');
if (NumeroDeCartas % 2 != 0 || NumeroDeCartas < 4 || NumeroDeCartas > 14) {
    NumeroDeCartas = prompt('Por favor, esscolha um número par entre 4 e 14');
    teste(NumeroDeCartas);
} else {
    window.numeroValido = NumeroDeCartas;
}

for (let j = 0; j < window.numeroValido; j++) {
    const mesa = document.querySelector(".card-space");
    mesa.innerHTML = mesa.innerHTML + TextoCarta; 
}
//Cartas geradas segundo o numeroValido do prompt
////////////////////////////////////////////////////////////
let n1 = numeroValido/2;

let baralho1 = endereçosImagens.slice(0, n1);
let baralho = baralho1.concat(baralho1);
baralho.sort(comparador); 

//cortar e distribuir o numero de cartas do prompt
////////////////////////////////////////////////////////////

for (let i = 0; i < numeroValido; i++) {
    const cartas = document.querySelectorAll(".carta .verso");
    cartas[i].innerHTML += `<img src=` + baralho[i] + ` alt="">`;
}

//Distribui as imagens nas cartas
////////////////////////////////////////////////////////////
function ganhou() {
    cartasCertas = document.querySelectorAll(".fliped-permanente");
    if (cartasCertas.length == baralho.length) {
        alert(`Você ganhou em ${contadordeJogadas} jogadas!`);
    }

}

