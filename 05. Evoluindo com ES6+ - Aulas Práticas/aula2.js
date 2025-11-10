// Spread Operato

// Como usar "...nome do array"

let numero = [1,2,3];

let continuacao = [...numero,4,5,6];

console.log(continuacao);

let pessoa = {
    nome:"Carlos",
    idade: 25,
    cargo:"RH"
}

let status = {
    ...pessoa,
    status: "ativo"
}

console.log(status);

function novoUsuario(info){

    let dados = {
        ...info,
        cargo: "RH"
    }
    console.log(dados);
}

novoUsuario({nome:"Carlos", idade:25});
