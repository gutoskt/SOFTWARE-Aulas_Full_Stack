

// let loja: object;

// loja = {
//   nome: "BK",
//   endereco: "Rua x",
//   status: true,
// }


// Conjunto de dados (um padrão) para descrever a estrutura de um objeto.
interface ILojaProps{
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: ILojaProps = {
 nome: "Burguer K",
 endereco: "Rua logo ali",
 status: true,
}

// console.log(BurguerK);

function novaLoja({nome, endereco, status}: ILojaProps): void {
  console.log(`Loja ${nome} criada com sucesso!`)
  console.log(`Endereço da loja ${endereco}`)
  console.log(`Status da loja: ${status}`)

  console.log("===============")
}

novaLoja({ nome: "Red Buruger", endereco: "Rua ali na esquina", status: false })

novaLoja({ nome: "Subway", endereco: "Rua dez", status: true });