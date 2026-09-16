# Evoluindo com TypeScript

Resumo dos conceitos apresentados nos arquivos desta pasta, organizados em uma sequência de aprendizado.

## 1. Tipos básicos

### `number`

Arquivo: [type_number.ts](type_number.ts)

O tipo `number` representa números inteiros e decimais. O exemplo declara `valor1` como `number`, atribui os valores `10` e `20.90`, declara `valor2` e soma os dois valores.

```ts
let valor1: number = 10;
valor1 = 20.9;

let valor2: number = 15;
console.log(valor1 + valor2);
```

Em TypeScript, `number` também contempla valores representados em hexadecimal e binário.

### `boolean`

Arquivo: [type_boolean.ts](type_boolean.ts)

O tipo `boolean` aceita apenas `true` ou `false`. O exemplo cria `estaAutenticado` como `true` e usa `Boolean(codeStatus)` para converter outro valor em booleano.

Valores como `0`, string vazia e `undefined` são convertidos para `false`; outros valores normalmente são convertidos para `true`.

### `null` e `undefined`

Arquivo: [type_null.ts](type_null.ts)

Uma variável pode aceitar mais de uma possibilidade usando união de tipos:

```ts
let nome: string | null;
let nomeUser: undefined | number;
```

No exemplo, `nome` recebe `null` e `nomeUser` recebe o número `2021`. `null` representa ausência intencional de valor, enquanto `undefined` representa um valor que não foi definido.

## 2. Objetos e coleções

### `object`

Arquivo: [type_object.ts](type_object.ts)

O tipo `object` permite armazenar um valor que seja um objeto. O exemplo cria `novoUsuario` com as propriedades `nome`, `email` e `idade`.

Para descrever com mais precisão os nomes e tipos das propriedades, seria possível usar uma interface ou um tipo personalizado.

### Arrays

Arquivo: [type_array.ts](type_array.ts)

Arrays podem ser tipados de duas formas equivalentes:

```ts
let filmes: Array<string>;
let numeros: number[];
```

Também é possível permitir mais de um tipo no mesmo array. O exemplo usa `(string | number)[]`, adiciona dois filmes e depois adiciona o número `15` com `push`.

```ts
let filmes: (string | number)[] = ["Filme 1", "Filme 2"];
filmes.push(15);
```

O arquivo também contém um exemplo comentado de um array formado apenas por números.

### Tuplas

Arquivo: [type_tupla.ts](type_tupla.ts)

Uma tupla é um array com tipos definidos em posições específicas:

```ts
let aluno: [string, number];
aluno = ["Sujeito Programador", 123];
```

O primeiro elemento precisa ser uma `string` e o segundo um `number`. O exemplo também declara `statusPedido` como uma tupla com três strings, contendo os status `Em producao`, `Saiu para entrega` e `Pedido entregue`.

Apesar da definição inicial, o exemplo usa `push` para adicionar mais valores à tupla `aluno`. Isso é permitido pelo método do array, mas deve ser usado com cuidado, pois pode deixar a estrutura maior do que a intenção original.

## 3. Combinação de tipos e valores nomeados

### Union type

Arquivo: [union_type.ts](union_type.ts)

Uma união permite que uma variável aceite mais de um tipo. `userId` pode ser `number` ou `string`:

```ts
let userId: number | string;
userId = 123;
```

O operador `typeof`, mostrado no comentário do arquivo, informa o tipo atual da variável durante a execução do programa.

### Enum

Arquivo: [type_enum.ts](type_enum.ts)

`enum` define um conjunto de valores nomeados. O exemplo cria:

```ts
enum DesignColors {
  white = "#FFFFFF",
  black = "#000000",
}
```

Também existe o enum `StatusPermission`, com os valores `ADMIN`, `USER` e `SUPPORT`. Como os valores não foram definidos manualmente, o TypeScript atribui números começando em `0`; por isso `StatusPermission.SUPPORT` resulta em `2`.

## 4. Tipos flexíveis e verificação

### `unknown`

Arquivo: [type_unknown.ts](type_unknown.ts)

`unknown` é usado quando o tipo recebido ainda não é conhecido. A variável `total` recebe, em momentos diferentes, um número, uma string e um objeto.

Ao contrário de `any`, um valor `unknown` só pode ser atribuído diretamente a outra variável `unknown` ou `any`. Para usá-lo como um tipo específico, é necessário verificar seu tipo ou fazer uma asserção.

O exemplo também mostra a diferença na prática: `idPedido`, declarado como `any`, pode ser atribuído a uma variável `number` sem proteção; `totalPedido`, declarado como `unknown`, é atribuído a outra variável `unknown`.

### `any`

Arquivo: [type_any.ts](type_any.ts)

`any` desativa grande parte da verificação de tipos. `precoProduto` recebe `boolean`, `number` e `string` em sequência. `nota1` e `nota2` também recebem tipos diferentes e são somadas, resultando em concatenação quando uma delas contém uma string.

O arquivo destaca que `any` deve ser evitado sempre que possível, pois remove a segurança oferecida pelo TypeScript.

### Type assertions

Arquivo: [type_assertions.ts](type_assertions.ts)

Uma asserção informa ao TypeScript que o desenvolvedor conhece um tipo mais específico do que o compilador consegue inferir:

```ts
let statusAtual: unknown = 1;
let mudaStatus: number = statusAtual as number;
```

O arquivo apresenta duas sintaxes para a mesma ideia:

```ts
statusAtual as number;
<number>statusAtual;
```

Também converte `query`, inicialmente `unknown` e contendo `pizza`, para `string`. A asserção não converte o valor em tempo de execução; ela apenas orienta a análise de tipos. Por isso, deve ser usada quando a informação sobre o tipo for realmente confiável.

## 5. Funções

### Funções tradicionais e tipo de retorno

Arquivo: [funcoes.ts](funcoes.ts)

Parâmetros e retornos podem ser tipados explicitamente:

```ts
function soma(valor1: number, valor2: number): string {
  const soma = valor1 + valor2;

  if (soma > 40) {
    return "SOMA MAIOR QUE 40";
  }

  return "MENOR QUE 20";
}
```

O exemplo declara `n1 = 10` e `n2 = 25`, chama `soma(n1, n2)` e imprime `MENOR QUE 20`, pois a soma é `35`. A função retorna `string`, embora faça uma operação numérica internamente.

O trecho comentado mostra ainda uma função `login` que poderia retornar `boolean | string`, ou seja, um booleano ou uma string.

### Arrow functions

Arquivo: [arrowfunctions.ts](arrowfunctions.ts)

Arrow functions são uma forma mais curta de declarar funções. O exemplo cria `retornoAPI`, que recebe uma URL string, não retorna valor (`void`) e imprime a URL:

```ts
const retornoAPI = (url: string): void => {
  console.log("URL DA API: ", url);
};
```

O arquivo também mostra, em comentário, a versão tradicional de uma função que retornaria uma string.

### Parâmetros com valor padrão e opcionais

Arquivo: [valor_default.ts](valor_default.ts)

Parâmetros podem ter um valor padrão e também podem ser opcionais:

```ts
function cadastro(
  email: string,
  senha: string,
  nome = "Aluno",
  idade?: number,
): void {
  const data = { email, senha, nome, idade };
  console.log(data);
}
```

`nome` assume `Aluno` quando não é informado. O `?` em `idade?: number` indica que o parâmetro pode ser omitido.

`cadastroLoja` usa um parâmetro padrão booleano: `status = false`. No exemplo, a função é chamada com `true`, imprime o status atual e retorna esse valor. A função tem retorno `boolean`.

### Rest parameters

Arquivo: [rest.ts](rest.ts)

O operador `...` reúne uma quantidade variável de argumentos em um array tipado. `totalVendas` recebe vários números e informa quantas vendas foram feitas:

```ts
function totalVendas(...vendas: number[]): void {
  console.log(`Você fez ${vendas.length} vendas hoje!`);
}
```

O arquivo também define `mostraNomes`, que recebe várias strings, imprime a quantidade de nomes e percorre o array com `map`, imprimindo cada nome. A chamada ativa usa `Natan`, `Lucas`, `Sujeito`, `Henrique` e `Ana`.

## Ordem dos arquivos

Uma ordem lógica para acompanhar os exemplos é:

1. [type_number.ts](type_number.ts)
2. [type_boolean.ts](type_boolean.ts)
3. [type_null.ts](type_null.ts)
4. [type_object.ts](type_object.ts)
5. [type_array.ts](type_array.ts)
6. [type_tupla.ts](type_tupla.ts)
7. [union_type.ts](union_type.ts)
8. [type_enum.ts](type_enum.ts)
9. [type_unknown.ts](type_unknown.ts)
10. [type_any.ts](type_any.ts)
11. [type_assertions.ts](type_assertions.ts)
12. [funcoes.ts](funcoes.ts)
13. [arrowfunctions.ts](arrowfunctions.ts)
14. [valor_default.ts](valor_default.ts)
15. [rest.ts](rest.ts)

Essa sequência parte dos tipos mais simples, passa por estruturas e combinações de tipos, apresenta as diferenças entre flexibilidade e segurança e termina com a aplicação da tipagem em funções.
