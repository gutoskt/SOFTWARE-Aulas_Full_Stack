/* PRATICANDO - CALCULADORA IMC - AULA 1

    - Event = Passa o evento, serve para editar o evento que está acontecendo no forms
    - imc = imc.toFixed(2); - quantidade de casa decimal.


    PRATICANDO - TEMPORIZADORES - AULA 2

        - setInterval: Executar em tempos em tempos, sem fim. Executa uma função de tempos em tempos, sem parar.
            - Podemos colocar em uma variável

        - Função anônima: Função que criamos desss forma (dentro de um argumento) - "() => {}" sem nome

        - setTimeout: executa apenas uma vez deposi de x segundos passados.

    PRATICANDO - VAR, LET E CONST - AULA 3

        - var: permite o acesso da variável mesmo fora do escopo que foi criado.
            if(){
            var nome = x
            }

            nome; - vai fincionar.

        - let: Definido e usável somente no escopo que foi criado. 

        - const: no escopo, depois de criado não pode ser modificado. Não consiguimos criar uma variáveis sem dar um valor.


      PRATICANDO - CRIANDO OBJETOS - AULA 4  

        - Como criar um objeto: 
            let pessoa = {
                nome: "Carlos",
                idade: 24,
                altura: 1.92,
                cargo: "Programador"
            };3

        - Como criar uma lista de usuários: [{...},{...},{...}]

            let usuario = [
                {nome: "Carlos",
                idade: 24,
                altura: 1.92,
                cargo: "Programador"},

                {nome: "Ana",
                idade: 23,
                altura: 1.82,
                cargo: "Programador"
                }
            ];

    PRATICANDO - TEMPLATE STRINGS - AULA 5

        - como resolver: `${variavel} ${variavel}`

*/

/*
var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura*altura);
    imc = imc.toFixed(2);

    resultado = document.getElementById('resultado');

    if(imc < 17){
        resultado.innerHTML = '<br/> Seu resultado foi: '+ imc + '<br/> Cuidado você está muito abaixo do peso!!';
    } else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML = '<br/> Seu resultado foi: '+ imc + '<br/> Você está abaixo do peso!!';
    } else if(imc >= 18.49 && imc < 24.99){
        resultado.innerHTML = '<br/> Seu resultado foi: '+ imc + '<br/> Você está no peso ideal!!';
    } else if(imc >= 25 && imc <= 29.99){
        resultado.innerHTML = '<br/> Seu resultado foi: '+ imc + '<br/> Você está acima do peso!!';
    }else if(imc > 30){
        resultado.innerHTML = '<br/> Seu resultado foi: '+ imc + '<br/> Cuidado obesidade!!';
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}*/

/*function acao(){

    document.write("Executando ... <br/>");
}

var timer = setInterval(() => {
    document.write("Executando ....... <br/>")
}, 5000);


setTimeout(() => {
    document.write("Executando ... <br/>");
}, 5000);
*/

// AULA 4

/*let pessoa = {
    nome: "Carlos",
    idade: 24,
    altura: 1.92,
    cargo: "Programador"
};

let usuario = [
    {nome: "Carlos",
    idade: 24,
    altura: 1.92,
    cargo: "Programador"},

    {nome: "Ana",
    idade: 23,
    altura: 1.82,
    cargo: "Programador"
    }
];

console.log(usuario[1]);

*/

let nome = "carlos";
let sobrenome = "augusto";
let idade = 25;

let mensagem = `Meu nome é ${nome} ${sobrenome} ${idade}`;

console.log(mensagem);