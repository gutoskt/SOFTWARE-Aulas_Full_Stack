# Node.js: primeiros passos com Express e TypeScript

Este projeto é uma API REST simples para estudar os primeiros conceitos de
Node.js usando Express e TypeScript. A aplicação mantém uma lista de tarefas
em memória e disponibiliza operações para listar, criar, atualizar e remover
itens.

O objetivo da aula não é criar uma aplicação pronta para produção, mas
entender o caminho completo de uma requisição HTTP:

```text
cliente -> servidor Express -> router -> middleware -> controller da rota -> resposta JSON
```

## 1. Pré-requisitos

- Node.js instalado, de preferência uma versão LTS.
- npm, instalado junto com o Node.js.
- Um cliente HTTP, como a extensão REST Client do VS Code, Insomnia ou Postman.
- Noções básicas de JavaScript e TypeScript.

## 2. Como executar

Na pasta do projeto, instale as dependências:

```bash
npm install
```

Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O script usa `tsx watch`, que executa TypeScript diretamente e reinicia o
servidor quando um arquivo é alterado. A API fica disponível em:

```text
http://localhost:3333
```

Para parar o servidor, use `Ctrl+C`.

## 3. O que é Node.js?

Node.js é um ambiente que permite executar JavaScript fora do navegador. Ele
usa o motor V8 e oferece APIs para tarefas como criar servidores, ler arquivos,
acessar redes e conversar com bancos de dados.

Neste projeto, Node.js é o ambiente de execução. O Express é a biblioteca que
facilita a criação do servidor HTTP e das rotas.

## 4. O papel de cada arquivo

```text
.
├── package.json       # Dependências, metadados e comandos do projeto
├── tsconfig.json      # Regras de compilação e verificação do TypeScript
├── src/
│   ├── server.tsx     # Inicialização do Express e entrada da aplicação
│   └── routes.tsx     # Router, middlewares e endpoints da API
├── build/             # Saída gerada pelo TypeScript, quando houver compilação
└── requisicoes.http   # Exemplos de requisições para testar a API
```

Embora os arquivos tenham extensão `.tsx`, não há componentes React neste
projeto. A extensão pode ser simplificada para `.ts` em uma evolução futura,
desde que as referências de importação também sejam ajustadas.

## 5. Configuração do projeto

### `package.json`

- `"type": "module"` habilita o uso de ES Modules (`import` e `export`).
- `express` é a dependência usada para criar a API.
- `tsx` executa TypeScript durante o desenvolvimento e observa alterações.
- `typescript` fornece o compilador e a checagem estática.
- `@types/express` fornece os tipos de `Request`, `Response`, `Router` e outros
	elementos do Express.

O único script atual é:

```json
"dev": "CHOKIDAR_USEPOLLING=true tsx watch src/server.tsx"
```

`CHOKIDAR_USEPOLLING=true` ajuda o modo de observação a detectar alterações
em alguns ambientes, especialmente containers e máquinas virtuais.

### `tsconfig.json`

Algumas opções relevantes:

- `rootDir: "./src"`: indica onde está o código-fonte.
- `outDir: "./build"`: indica onde ficariam os arquivos compilados.
- `module: "nodenext"`: mantém compatibilidade com a configuração de módulos
	do Node.js.
- `strict: true`: ativa uma checagem de tipos mais rigorosa.
- `sourceMap`, `declaration` e `declarationMap`: permitem gerar mapas e
	declarações junto da compilação.
- `noUncheckedIndexedAccess: true`: ajuda a lembrar que acessar um índice pode
	não encontrar um elemento.

## 6. Inicialização do servidor

Em `src/server.tsx`, a aplicação é criada e configurada:

```ts
const app = express();
const PORT = 3333;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
```

### O que acontece nessa sequência?

1. `express()` cria a aplicação.
2. `express.json()` é um middleware que interpreta corpos JSON e preenche
	 `req.body`.
3. `app.use(router)` registra as rotas definidas em `routes.tsx`.
4. `app.listen` abre a porta `3333` e começa a aceitar requisições.

Sem `express.json()`, o corpo enviado no `POST` ou no `PUT` não seria lido
corretamente.

## 7. Router e middleware

`routes.tsx` cria um router separado da aplicação principal:

```ts
const router = Router();
```

Um middleware recebe a requisição (`req`), a resposta (`res`) e a função
`next`. Chamar `next()` entrega o processamento ao próximo middleware ou à
rota correspondente:

```ts
router.use((req, res, next) => {
	console.log("Passou aqui no Mid Global");
	return next();
});
```

Esse middleware é global dentro do router e registra todas as requisições que
passam por ele.

O `checkNome` é um middleware específico do `POST`:

```ts
function checkNome(req: Request, res: Response, next: NextFunction) {
	if (!req.body.nome) {
		return res.status(400).json({ message: "Nome é obrigatório" });
	}

	return next();
}
```

Ele interrompe a requisição com status `400` quando `nome` não foi enviado.
Quando a validação passa, `next()` permite que a rota crie a tarefa.

## 8. Parâmetros de uma requisição

O código apresenta três formas comuns de receber dados:

### Query params

Ficam depois de `?`, por exemplo `GET /tarefas?nome=Estudar`. São acessados
com `req.query.nome`. Há um exemplo comentado no router para demonstrar essa
forma.

### Route params

Fazem parte do caminho, por exemplo `GET /tarefas/2`. O trecho `:index` é
acessado com `req.params.index`.

Como os parâmetros da URL chegam como texto, o código converte o índice:

```ts
const index = Number(req.params.index);
```

### Request body

É o conteúdo enviado no corpo da requisição, normalmente em JSON:

```json
{ "nome": "Comprar pão" }
```

Com `express.json()`, esse valor fica disponível em `req.body`.

## 9. Endpoints implementados

O prefixo recomendado nos exemplos é `/api`.

| Método | Endpoint | Objetivo |
| --- | --- | --- |
| `GET` | `/api/tarefas` | Retorna todas as tarefas |
| `GET` | `/api/tarefas/:index` | Retorna a tarefa no índice informado |
| `POST` | `/api/tarefas` | Adiciona uma tarefa |
| `PUT` | `/api/tarefas/:index` | Substitui uma tarefa |
| `DELETE` | `/api/tarefas/:index` | Remove uma tarefa |

### Listar tarefas

```http
GET http://localhost:3333/api/tarefas
```

Resposta inicial:

```json
["Comprar Pao", "Lavar Roupa", "Estudar Node.js"]
```

### Buscar uma tarefa

```http
GET http://localhost:3333/api/tarefas/1
```

O índice começa em `0`, portanto o índice `1` corresponde a `"Lavar Roupa"`.

### Criar uma tarefa

```http
POST http://localhost:3333/api/tarefas
Content-Type: application/json

{ "nome": "Revisar Express" }
```

O middleware `checkNome` valida o campo antes de executar `tarefas.push(nome)`.

### Atualizar uma tarefa

```http
PUT http://localhost:3333/api/tarefas/1
Content-Type: application/json

{ "nome": "Estudar TypeScript" }
```

O valor do índice é usado para substituir o item correspondente do array.

### Remover uma tarefa

```http
DELETE http://localhost:3333/api/tarefas/1
```

`tarefas.splice(index, 1)` remove um item a partir do índice indicado. O `1`
significa a quantidade de elementos removidos.

## 10. Como testar

O arquivo `requisicoes.http` contém exemplos que podem ser executados pela
extensão REST Client do VS Code. A ordem sugerida é:

1. Listar as tarefas.
2. Buscar uma tarefa pelo índice.
3. Criar uma tarefa com `nome` preenchido.
4. Atualizar uma tarefa.
5. Remover uma tarefa.
6. Repetir o `POST` com `nome` vazio para observar o erro `400`.

O arquivo também contém requisições para `POST /users` e `POST /session`, mas
essas rotas ainda não estão implementadas em `src/routes.tsx`. Portanto, elas
servem como rascunho de uma próxima etapa e atualmente não fazem parte da API
funcional deste projeto.

## 11. Estado em memória e limitações

A lista é criada diretamente no código:

```ts
const tarefas = ["Comprar Pao", "Lavar Roupa", "Estudar Node.js"];
```

Por isso:

- as alterações desaparecem quando o servidor é reiniciado;
- todos os usuários compartilhariam a mesma lista;
- não há banco de dados nem autenticação;
- os índices podem mudar depois de uma remoção;
- ainda não há validação para índice inválido, tarefa inexistente ou `nome`
	enviado em um `PUT`.

Essas limitações são úteis para a aula porque deixam clara a diferença entre
um protótipo para aprender rotas e uma API pronta para produção.

## 12. Sequência recomendada de estudo

1. Execute o servidor e observe a mensagem da porta.
2. Leia primeiro o `server.tsx` para entender o ponto de entrada.
3. Acompanhe como `app.use(router)` conecta o servidor ao router.
4. Estude o middleware global e o fluxo de `next()`.
5. Teste `GET`, depois `POST`, `PUT` e `DELETE`.
6. Compare `req.query`, `req.params` e `req.body` com os exemplos comentados.
7. Altere o array inicial e veja o efeito nas respostas.
8. Adicione validação de índice e respostas com `404`.
9. Separe as rotas em módulos e extraia a lógica para controllers.
10. Como próximo projeto, substitua o array por um banco de dados e implemente
		as rotas de usuários e sessão.

## 13. Próximas melhorias sugeridas

- Adicionar um script `build` e um script `start` para produção.
- Instalar `@types/node` e revisar a configuração de tipos do Node.js.
- Renomear os arquivos `.tsx` para `.ts`, pois não há JSX sendo utilizado.
- Validar se o índice é um número inteiro dentro dos limites do array.
- Retornar `404` quando a tarefa não existir.
- Validar também o corpo do `PUT` com um middleware reutilizável.
- Criar testes automatizados para cada endpoint.
- Persistir os dados em um banco de dados.
- Implementar autenticação antes de criar `/users` e `/session`.

Este README descreve o comportamento atual do código. Conforme a aula evoluir,
as novas rotas e conceitos podem ser adicionados às seções correspondentes.
