// OPERAÇOES EM UMA ARRAY - SUJEITO PROGRAMADOR

// Primeiro: MAP - Percorre a array e gera uma nova array com os valores modificados conforme a função passada

let nomes = ["Carlos","Ana","Juliana"];

nomes.map((item, index) => { //o map percorre e devolve o index e o item
    console.log(`${item} está na posição ${index}`) // Usando template string - finciona assim `${ }` para inserir variaveis dentro de strings
})

// Segundo: Reduce - Percorre a array e reduz a um unico valor conforme a função passada

let numeros = [10,20,30];

let total = numeros.reduce((acumulador, item, index, original) => { // o reduce percorre e devolve o acumulador e o item

    console.log(`Acumulador: ${acumulador}`); // valor acumulado
    console.log(`Item: ${item}`);
    console.log(`Index: ${index}`);
    console.log(`Array Original: ${original}`);

    return acumulador + item; // retorna o valor acumulado somando o item atual - é que que acontece a opereção de redução
},10); // o zero é o valor inicial do acumulador

console.log(`Total: ${total}`); // Total final apos o reduce

// FIND - Percorre a array e retorna o primeiro item que satisfaça a condição passada

let listagem = [5,10,"Carlos",20];

let buscar = listagem.find((item) => { // o find percorre e devolve o item
    return item === "João"; // condição de busca, ele retorna o primeiro item que satisfaça a condição, nesse caso o item igual a "Carlos"
})

console.log(`Item encontrado: ${buscar}`); // Exibe o item encontrado

// FILTER - Percorre a array e retorna uma nova array com os itens que satisfaçam a condição passada

let nome = ["Carlos","Ana","Juliana","Marcos","Amanda","Jose"];

let resultado = nome.filter((item) => { // o filter percorre e devolve o item
    return item.length < 5; // condição de filtro, nesse caso retorna os nomes com mais de 5 letras (retorna uma lista com os itens que satisfaçam a condição)
});

console.log(`Nomes com menos de 5 letras: ${resultado}`); // Exibe os itens filtrados