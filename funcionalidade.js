const endereçoBackground = `"./projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"`

const TextoCarta = 
`<div onclick="flip(this)" class="carta"> 
    <div class="frente pra-cima">
        <img src=` + endereçoBackground + ` alt="">
    </div>
    <div class="verso pra-baixo">
        um mero teste
    </div>
</div>`;
function flip(seletor) {
    seletor.classList.toggle("pra-baixo");
    setInterval(flip, 3500, seletor);
    const intervalo = setInterval(flip, 5000, seletor);
    clearInterval(intervalo);
}


function teste(x) {
    if (x % 2 != 0 || x < 4 || x > 14) {
        x = prompt('Por favor, esscolha um número par entre 4 e 14');
        teste(x);
    } else {
        window.numeroValido = x;
    }
}
let NumeroDeCartas = prompt('Com Quantas Cartas deseja jogar? Escolha um número par entre 4 e 14');
if (NumeroDeCartas % 2 != 0 || NumeroDeCartas < 4 || NumeroDeCartas > 14) {
    NumeroDeCartas = prompt('Por favor, esscolha um número par entre 4 e 14');
    teste(NumeroDeCartas);
} else {
    window.numeroValido = NumeroDeCartas;
}

let contador = 0;
while ( contador < window.numeroValido) {
    const mesa = document.querySelector(".card-space")
    mesa.innerHTML = mesa.innerHTML + TextoCarta;
    contador++ ;  
}

