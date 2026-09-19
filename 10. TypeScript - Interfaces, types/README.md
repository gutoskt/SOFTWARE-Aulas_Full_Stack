# TypeScript - Interfaces e Types

Este README reúne, em ordem crescente de complexidade, todo o conteúdo estudado nos arquivos deste projeto sobre `interface` e `type` em TypeScript.

## Índice

1. [Interfaces básicas](#1-interfaces-básicas)
2. [Propriedades opcionais (`?`)](#2-propriedades-opcionais-)
3. [Propriedades somente leitura (`readonly`)](#3-propriedades-somente-leitura-readonly)
4. [Interfaces com arrays de objetos](#4-interfaces-com-arrays-de-objetos)
5. [Funções tipadas com interface](#5-funções-tipadas-com-interface)
6. [Herança de interfaces (`extends`)](#6-herança-de-interfaces-extends)
7. [Type Alias](#7-type-alias)
8. [Interseção de types (`&`)](#8-interseção-de-types-)
9. [Interfaces vs Types: diferenças](#9-interfaces-vs-types-diferenças)

---

## 1. Interfaces básicas

Arquivo: [readonly.ts](readonly.ts) e [interfaces.ts](interfaces.ts)

Uma `interface` descreve o formato (contrato) que um objeto deve seguir: quais propriedades existem e quais os seus tipos.

```typescript
interface ILojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: ILojaProps = {
  nome: "Burguer K",
  endereco: "Rua logo ali",
  status: true,
};
```

Interfaces também podem ser usadas para tipar os parâmetros de uma função, inclusive usando desestruturação:

```typescript
function novaLoja({ nome, endereco, status }: ILojaProps): void {
  console.log(`Loja ${nome} criada com sucesso!`);
}

novaLoja({ nome: "Subway", endereco: "Rua dez", status: true });
```

## 2. Propriedades opcionais (`?`)

Arquivo: [opcional.ts](opcional.ts)

Usar `?` após o nome da propriedade torna-a opcional, ou seja, o objeto pode ser criado sem ela.

```typescript
interface CadastroProps {
  nome?: string;
  email: string;
  status: boolean;
}

const novoUsuario: CadastroProps = {
  email: "matheus@teste.com",
  status: true,
}; // "nome" não é obrigatório
```

## 3. Propriedades somente leitura (`readonly`)

Arquivo: [readonly.ts](readonly.ts)

O modificador `readonly` impede que uma propriedade seja alterada após a criação do objeto.

```typescript
interface ProdutoProps {
  readonly id: string;
  nome: string;
  descricao: string;
}

let produto1: ProdutoProps = {
  id: "1",
  nome: "Tenis Nike",
  descricao: "Super tenis descolado",
};

produto1.nome = "Tenis Nike 2.0"; // permitido
// produto1.id = "2"             // erro: "id" é readonly
```

## 4. Interfaces com arrays de objetos

Arquivo: [interfaces_types.ts](interfaces_types.ts) _(raiz)_

Uma interface pode ter uma propriedade que é um array de outra interface, permitindo representar listas de objetos tipados.

```typescript
interface TecnologiaProps {
  id: string;
  nome: string;
  descricao?: string;
}

interface NomesProps {
  tecnologia: TecnologiaProps[];
}

let frontend: NomesProps = {
  tecnologia: [
    {
      id: "12",
      nome: "ReactJS",
      descricao: "Biblioteca para criar interfaces",
    },
    { id: "43", nome: "VueJs", descricao: "Framework Frontend" },
  ],
};
```

## 5. Funções tipadas com interface

Arquivo: [funcao.ts](funcao.ts)

Uma interface pode descrever uma propriedade cujo valor é uma função (tipando parâmetros e retorno):

```typescript
interface CursoProps {
  id: string;
  nome: string;
  preco: number;
  promocao: (preco: number) => void;
}

function mostraPromocao(preco: number): void {
  console.log(`Promoçao no curso por apenas: R$ ${preco}`);
}

const novoCurso: CursoProps = {
  id: "1",
  nome: "Curso typescript",
  preco: 750,
  promocao: mostraPromocao,
};
```

Também é possível criar uma interface que representa diretamente a assinatura de uma função (call signature):

```typescript
interface SomaProps {
  (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1, valor2) => valor1 + valor2;

const resultado = somaNumeros(15, 10);
```

## 6. Herança de interfaces (`extends`)

Arquivo: [extends.ts](extends.ts)

Uma interface pode herdar as propriedades de outra usando `extends`, evitando repetição de código.

```typescript
interface JogoProps {
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}

const left4dead: JogoProps = {
  id: "123",
  nome: "Lef 4 Dead 2",
  descricao: "Jogo de açao e tiro",
  plataforma: ["PS5", "PC"],
};

interface DLC extends JogoProps {
  jogoOriginal: JogoProps;
  novoConteudo: string[];
}

const left4DeadDLC: DLC = {
  id: "90",
  nome: "Left 4 Dead - Novos Mapas",
  descricao: "4 novos mapas para jogar online",
  plataforma: ["PS5", "PC"],
  novoConteudo: ["Modo Coop", "Mais 5 horas de jogo", "Medalhas"],
  jogoOriginal: left4dead,
};
```

`DLC` herda todas as propriedades de `JogoProps` e ainda adiciona as suas próprias.

## 7. Type Alias

Arquivo: [type_alias.ts](type_alias.ts)

`type` cria um "apelido" (alias) para um tipo, podendo representar desde tipos primitivos/uniões até objetos mais complexos.

```typescript
type Uuid = number | string | null;

function acessar(uuid: Uuid, nome: string) {
  console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}
```

`type` também pode descrever a estrutura de um objeto, de forma parecida com `interface`, incluindo propriedades opcionais:

```typescript
type Info = {
  id: number;
  nome: string;
  descricao?: string;
};

const produtoInfo: Info = {
  id: 123,
  nome: "Placa de Video",
};
```

## 8. Interseção de types (`&`)

Arquivo: [type_intersection.ts](type_intersection.ts)

O operador `&` combina múltiplos `types`, criando um novo tipo que precisa cumprir todas as propriedades dos tipos originais (equivalente ao `extends` de interfaces).

```typescript
type Info = {
  id: number;
  nome: string;
  descricao?: string;
};

type Categoria = {
  slug: string;
  quantidadeProduto: number;
};

type ProdutoInfo = Info & Categoria; // interseção entre Info e Categoria

const novoProduto: ProdutoInfo = {
  id: 54321,
  nome: "Teclado RGB",
  slug: "teclado-mecanico",
  quantidadeProduto: 10,
};
```

## 9. Interfaces vs Types: diferenças

Arquivo: [interfaces_types.ts](interfaces_types.ts) _(raiz)_

Este arquivo compara diretamente os dois recursos, mostrando pontos em comum e diferenças importantes.

### Semelhanças

| Recurso              | Interface | Type             |
| -------------------- | --------- | ---------------- |
| Descrever objetos    | ✅        | ✅               |
| Herança / composição | `extends` | `&` (interseção) |
| Tipar funções        | ✅        | ✅               |

```typescript
// Interface
interface Post {
  title: string;
}
interface Conteudo {
  descricao: string;
}
interface PostBlog extends Post, Conteudo {}

interface getCategorias {
  (id: string): void;
}

// Type equivalente
type Post2 = { title: string };
interface Conteudo2 {
  descricao: string;
}
type PostBlog2 = Post2 & Conteudo2;

type getCategorias2 = (id: string) => void;
```

### Diferenças

- **Tipos primitivos e uniões**: apenas `type` pode representar diretamente tipos primitivos, uniões ou combinações (`interface` não pode fazer `extends` de um tipo primitivo/união).

  ```typescript
  // ✅ funciona com type
  type userID2 = string | number;

  // ❌ não é possível com interface
  // interface userID extends string | number {}
  ```

- **Tuplas**: com `type` é possível tipar uma tupla de forma direta; com `interface` isso não é natural (usa índices numéricos como propriedades, mas não garante o comportamento de tupla).

  ```typescript
  // type (forma correta/recomendada)
  type Tupla2 = [number, number];
  [1, 2] as Tupla2;

  // interface (não tipa como tupla de verdade)
  interface Tupla {
    0: number;
    1: number;
  }
  [1, 2, 15] as Tupla;
  ```

- **Declaration merging (múltiplas declarações)**: `interface` permite declarar o mesmo nome várias vezes, e o TypeScript funde (merge) todas as propriedades automaticamente. Com `type` isso gera erro de identificador duplicado.

  ```typescript
  // interface: permitido, as declarações se somam
  interface MinhaBiblioteca {
    prop1: string;
  }
  interface MinhaBiblioteca {
    prop2: string;
  }
  interface MinhaBiblioteca {
    id: string | number;
  }

  const TesteBiblioteca: MinhaBiblioteca = {
    prop1: "TESTE1",
    prop2: "TESTE2",
    id: 1,
  };

  // type: NÃO é permitido (erro de duplicidade)
  type MinhaBiblioteca2 = { prop1: string };
  // type MinhaBiblioteca2 = { prop2: string; } // erro
  ```

### Resumo

- Use `interface` quando estiver modelando objetos que podem precisar de extensão/merge no futuro (ex.: contratos de API, classes).
- Use `type` quando precisar de uniões, tuplas, tipos primitivos nomeados ou composições mais flexíveis com `&`.
