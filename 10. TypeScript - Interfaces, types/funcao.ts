// 1. Interface contendo a tipagem das propriedades e da função
interface CursoProps {
  id: string;
  nome: string;
  preco: number;
  promocao: (preco: number) => void;
}

// 2. Função que será passada como parâmetro
function mostraPromocao(preco: number): void {
  console.log(`Promoçao no curso por apenas: R$ ${preco} `);
}

// 3. Objeto utilizando a interface definida
const novoCurso: CursoProps = {
  id: "1",
  nome: "Curso typescript",
  preco: 750,
  promocao: mostraPromocao
}

// 4. Testes do console
console.log(novoCurso);

console.log(novoCurso.promocao(350));

///////////////////////////////////////////////////////////////////////

interface SomaProps {
  (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
  console.log('RESULTADO: ', valor1 + valor2);

  return valor1 + valor2;
}

const resultado = somaNumeros(15, 10)

console.log('Resultado da variavel: ', resultado)