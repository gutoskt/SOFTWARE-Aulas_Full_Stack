// Funçoes Anonimas - São funções que não possuem nome, geralmente atribuídas a variáveis ou passadas como argumentos para outras funções.

let somar = ((a, b) => { // Função anônima atribuída a variável 'somar'

    let total = a + b; // Retorna a soma de 'a' e 'b' na variavel 'somar'
    console.log(`Total da soma: ${total}`); // Exibe o total da soma usando template string
});

/*
    1. Parenteses = aonde recebe os parametros (a, b)
    2. Setas => indica que é uma função anônima (arrow function)
    3. Chaves {} = Corpo da função, onde fica o código que será executado


*/

somar(10, 20); // Chama a função 'somar' passando os valores 10 e 20 como argumentos

let nomes = ["Carlos", "Ana", "Juliana"];

nomes.map((item) => {

    console.log(`${item}`);

});
