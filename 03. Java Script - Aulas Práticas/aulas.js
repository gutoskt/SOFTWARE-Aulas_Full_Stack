/* VARIÁVEIS - AULA 2

    - Case se. nome != NOME (Maiusculo deferente de minusculo)
    - Cuidado com palavras reservadas.
    
COMANDOS DE ENTRADAS - AULA 3

    - var nome = prompt("Qual seu nome ?"); - Pede para escrever no prompt
    document.write("<h1> Bem vindo ao projeto " + nome + " "+ sobrenome + "</h1>"); - escreve no site. 
    
FUNÇÕES - AULA 4

    - Definição: Realização de uma determinada tarefa (ações)!
    - innerHTML - Como acessamos o html de uma determinada estrutura
    - document.getElementById('area') - acessar um elmento por meio do seu id.

    - let - 
    - document.createElement("button"); - forma de criar um novo elemento do html.
    - botaoSair.innerText = "Sair"; - forma de adcionar um texto nesse elemento.
    - area.appendChild(botaoSair); - forma de adcionar o elemento que foi criado no elemento area - html especifico

    - botaoSair.onclick = sair; - forma de ao clicar ele vai chamar uma função que está depois do =.

FUNÇÕES - AULA 5 

    - Aula de parâmetros nas funções.

FUNÇÕES - AULA 6 

    - Lista de variáveis: Arrays

FUNÇÕES - AULA 7

    - Lista: Como buscar e verificar se tem um elemento no meu array;

            lista.indexOf[elemento]

    - Devolve a posição se encontrar e se não encontrar devolve pp número "-1";

            lista.push(novo elemento); - Forma que colocamos um item a mais na minha lista de elementos;

            lista.shift(); - Remove o primeiro item da lista e retorna o valor que foi removido;

            lista.pop(); - Remove o último item da lista e retorna o valor que foi removido;

            lista.join('como desejo separar os elementos') - Retorna uma escrita de toda minha lista com uma separação espécifica;

TRABALHANDO COM LOOPS - AULA 8

    - Definição: Repetições.

    1 - While = Quer dizer enquanto;
    2 - For = Quer dizer para;

TRABALHANDO COM SWITCH - AULA 9

    - Definição: Escolha de caso de uso!
    - Estrutura:

        switch: Estrutura de casos.
        case: Casos que podemos escolher.
        default: Caso digitem o que for fora.



TRABALHANDO COM CONDICIONAIS E COMPARAÇÃO - AULA 10

    - if - else - 

*/
//var area = document.getElementById('area')

function entrada(){

    var nome = prompt("Digite seu nome!");

    if(nome === "" || nome === null){

        alert("Ops, algo deu errado");
        area.innerHTML = "Clique no botão para acessar";
    } else {
        area.innerHTML = "Bem vindo "+nome + " ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair";

        botaoSair.onclick = sair;

        area.appendChild(botaoSair);

    }

}

function sair(){

    alert("Até mais!!");
    area.innerHTML = "Você saiu";
}

function mediaAluno(nota1, nota2){

    var media = (nota1 + nota2)/2;

    if(media >= 7){
        console.log("Aluno aprovado com a média: "+ media);
    } else if(media < 7){
        console.log("Aluno reprovado com a média: " + media);
    }
}

function aluno(nome, curso){

    var mensagem ="Seja bem vindo " + nome + " ao curso " + curso; 

    console.log(mensagem)
}

/*var x = 0;

while(x< 10){
    document.write("<br> O valor do x é: "+x);

    x++;
}*/

/*var valor = 30;

for(a = 0; a < valor; a = a + 2){

    document.write("<br> O valor do x é: "+a);

}*/

/*function pedir(){

    var valor = prompt("Digite um valor de 1 a 4!")

    switch(Number(valor)){
        case 1: 
            alert("Escolheu suco");
            break;
        case 2:
            alert("Escolheu agua gelada");
            break;
        case 3:
            alert("Escolheu soverte");
            break;
        case 4:
            alert("Escolhe chamar o garçom");
            break;
        default:
            alert("Escolha entre 1 a 4");
            pedir();
            break;
    }
} */

/*var valor = 30; /* == -> valor interno, === se é igual o valor e o tipo


if(valor >= 30){

    console.log("Valor é igual a 30!");
} else {
    console.log("Valor não é igual a 30!");
}*/

/*var nome = "Matheus";
var userOnline = true;

if(!userOnline){
    console.log("Bem vindo, Matheus!!");
}*/

// OPEREDOR TERNÁRIO: 

var numero = 10;

numero === 10 ? console.log("Numero igual a 10") : console.log("Numero não é igual a 10") // se = ? , se não : 

