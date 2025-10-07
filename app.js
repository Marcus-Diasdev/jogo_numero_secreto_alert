alert('Bem vindo ao Número Secreto!');
let numeroDificuldade;
let erro = 'Digite uma alternativa válida!'
nivelDeDificuldade();

function nivelDeDificuldade() {
    let dificuldade = prompt('Escolha a dificuldade, f para fácil, m para médio, d para difícil, i para impossível');
    if (dificuldade == 'f') {
        numeroDificuldade = 10;
}   else if (dificuldade == 'm') {
        numeroDificuldade = 50;
}   else if (dificuldade == 'd') {
        numeroDificuldade = 100;
}   else if (dificuldade == 'i') {
        numeroDificuldade = 1000;
}   else {
        alert(erro);
        nivelDeDificuldade();
}}

let numeroSecreto = parseInt(Math.random()*numeroDificuldade + 1);
console.log(`O número secreto é: ${numeroSecreto}`);
var numeroJogador = 0;
var tentativa = 1;
console.log(`O número escolhido pelo jogador foi: ${numeroJogador}`);

while (tentativa <= 5) {
    numeroJogador = prompt(`Escolha um número entre 1 e ${numeroDificuldade}:`);
    
if (numeroJogador == numeroSecreto) {
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    console.log(palavraTentativa);
    alert(`Você descobriu que o número secreto é o número ${numeroSecreto}! Parabéns!`);
    alert(`Você descobriu que o número secreto era ${numeroSecreto} em ${tentativa} ${palavraTentativa}!`);
    break;    
}
else {
    if (numeroJogador > numeroSecreto) {
        alert(`O número secreto é menor que ${numeroJogador}`);
    } else {
        alert(`O número secreto é maior que ${numeroJogador}`);
    }
    tentativa++;

    if (tentativa > 5) {
        alert(`Você perdeu :(  O número secreto era ${numeroSecreto}`);
    }
    if (tentativa == 5) {
        alert('Essa é a sua última chance, escolha com cuidado!')
    }
}}

function jogarNovamente() {
    let novoJogo = prompt('Deseja jogar novamente? Digite s para sim  e n para não:');
    if (novoJogo == 'n') {
        alert('GAME OVER')
    }
    else if (novoJogo == 's') {
        window.location.reload()
    }
    else {
        alert(erro);
        jogarNovamente();
    }
}


jogarNovamente();

