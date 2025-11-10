// Rest Operato

// todos os parametros passados seram tratados como uma lista em uma variavel só como se fosse 
// nome = []

function listaConv(...nome){
    console.log(nome);
}


listaConv("Carlos","Augusto","Nunes");

function sorteador(...numeros){

    console.log(numeros);

    const sorteado = Math.floor(Math.random()*numeros.length); // Gera numero aleatorios

    console.log("Numero gerado foi: " + numeros[sorteado]);

}

sorteador(1,2,3,4,5,6,7,8,9);