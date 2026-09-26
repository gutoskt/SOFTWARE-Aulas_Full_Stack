# Aula NestJS: fundamentos de um backend

Este projeto registra a primeira etapa da construção de uma API com [NestJS](https://nestjs.com/), Node.js e TypeScript. O objetivo da aula foi entender a estrutura fundamental do framework e o caminho percorrido por uma requisição HTTP: **módulo -> controller -> service -> resposta**.

O projeto ainda é propositalmente simples: as respostas são textos fixos e não existe banco de dados, DTO, validação ou autenticação. Isso deixa visível o papel de cada peça antes da evolução para uma aplicação completa.

## 1. Preparando o projeto

Dentro da pasta `aula-nest`, instale as dependências:

```bash
npm install
```

### Criando a estrutura pelo Nest CLI

O Nest CLI automatiza a criação dos arquivos e segue os padrões do framework. Para criar um projeto novo, o comando é:

```bash
nest new aula-nest
```

Depois de entrar na pasta do projeto, novos recursos podem ser gerados com `nest generate` (ou sua forma abreviada, `nest g`):

```bash
nest g module tasks
nest g controller tasks
nest g service tasks
```

Esses comandos criam:

- `nest g module tasks`: `src/tasks/tasks.module.ts`, que define o `TasksModule`;
- `nest g controller tasks`: `src/tasks/tasks.controller.ts`, que define o `TasksController` e fornece o ponto inicial para as rotas;
- `nest g service tasks`: `src/tasks/tasks.service.ts`, que define o `TasksService` e pode concentrar as regras de negócio.

O CLI também atualiza os módulos necessários para que os componentes sejam reconhecidos pela aplicação. No caso deste projeto, o `TasksModule` registra o controller e o service, e o `AppModule` importa o módulo de tarefas:

```bash
cd aula-nest
nest g module tasks
nest g controller tasks
nest g service tasks
```

Depois da geração automática, os decorators e métodos são preenchidos para definir o comportamento da aula. Por exemplo, `@Controller('tasks')` estabelece o prefixo das rotas, enquanto `@Injectable()` permite que `TasksService` seja injetado no controller.

Para iniciar a aplicação em desenvolvimento:

```bash
npm run start:dev
```

O servidor fica disponível em `http://localhost:3000`. A porta pode ser alterada pela variável de ambiente `PORT`; quando ela não existe, o código usa `3000` como padrão.

Outros comandos importantes:

```bash
npm run build       # compila o projeto
npm run start       # inicia sem modo watch
npm run start:prod  # executa a versão compilada
npm run lint        # verifica problemas no código
```

## 2. Como o NestJS organiza a aplicação

O NestJS organiza o backend em módulos. Cada módulo representa uma fronteira de funcionalidade e reúne os componentes daquele contexto.

### Módulos

Um módulo é criado com o decorador `@Module()` e pode declarar `imports`, `controllers` e `providers`.

O `AppModule`, em `src/app/app.module.ts`, é o módulo raiz. Ele registra o `AppController` e o `AppService` e importa o `TasksModule`. O `TasksModule`, em `src/tasks/tasks.module.ts`, encapsula o controller e o service relacionados às tarefas.

#### Construindo um módulo na prática

Depois de executar `nest g module tasks`, o arquivo pode ser entendido assim:

```ts
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
```

Cada parte tem uma responsabilidade:

1. `import { Module } ...` importa o decorator que identifica uma classe como módulo NestJS;
2. os imports de `TasksController` e `TasksService` tornam essas classes disponíveis neste arquivo;
3. `@Module({ ... })` configura o que pertence ao módulo;
4. `controllers: [TasksController]` informa quais controllers recebem requisições deste módulo;
5. `providers: [TasksService]` registra o service no sistema de injeção de dependência;
6. `imports: []` é usado quando este módulo precisa de outros módulos. Neste exemplo, não há nenhum;
7. `export class TasksModule {}` cria o módulo que será importado pelo `AppModule`.

No módulo raiz, a ligação é feita desta forma:

```ts
@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

Assim, o NestJS encontra o `TasksModule` a partir do `AppModule` e consegue montar o recurso de tarefas quando a aplicação inicia.

### Controllers

Controllers definem a interface HTTP. O decorador `@Controller()` estabelece um prefixo de rota e decoradores como `@Get()` e `@Post()` associam métodos a verbos HTTP.

No `AppController`, o prefixo é `/api`. Portanto, `@Get('/teste')` resulta em `GET /api/teste`. No `TasksController`, o prefixo é `/tasks`, então `@Get('/teste')` resulta em `GET /tasks/teste`.

#### Construindo um controller na prática

Depois de executar `nest g controller tasks`, o controller pode ser construído passo a passo:

```ts
import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): string {
    return this.tasksService.getTasks();
  }

  @Get('/teste')
  getTeste(): string {
    return this.tasksService.getHolla();
  }
}
```

O que acontece em cada parte:

1. `Controller` e `Get` são importados de `@nestjs/common`;
2. `TasksService` é importado para que o controller possa delegar a lógica ao service;
3. `@Controller('tasks')` define `/tasks` como prefixo de todas as rotas da classe;
4. o construtor recebe `TasksService`, e o NestJS injeta a instância automaticamente;
5. `@Get()` cria `GET /tasks`;
6. `@Get('/teste')` cria `GET /tasks/teste`;
7. cada método retorna o resultado produzido pelo service.

O controller não precisa criar o service com `new TasksService()`. Como `TasksService` está em `providers` no `TasksModule`, o NestJS resolve essa dependência automaticamente.

### Services e injeção de dependência

Services concentram a lógica que não deve ficar dentro do controller. Eles recebem o decorador `@Injectable()` para que o NestJS possa gerenciá-los e injetá-los.

```ts
constructor(private readonly tasksService: TasksService) {}
```

O controller declara a dependência no construtor e encaminha a chamada ao service:

```ts
@Get()
getTasks(): string {
  return this.tasksService.getTasks();
}
```

Assim, o controller conhece HTTP e o service conhece a regra da funcionalidade.

## 3. Inicialização da aplicação

O arquivo `src/main.ts` é o ponto de entrada. A função `bootstrap()` cria a aplicação com `NestFactory.create(AppModule)`, monta os módulos, controllers e providers registrados e começa a escutar requisições com `app.listen(...)`.

## 4. Rotas implementadas

Com a aplicação rodando em `http://localhost:3000`, estas são as rotas definidas no código:

| Método | URL | Responsável | Resposta |
| --- | --- | --- | --- |
| `GET` | `/api` | `AppController` -> `AppService.getAdeus()` | `Adeus` |
| `GET` | `/api/teste` | `AppController` | `Rota de teste da hello API` |
| `POST` | `/api/teste` | `AppController` | `Rota de teste POST da hello API` |
| `GET` | `/tasks` | `TasksController` -> `TasksService.getTasks()` | `Lista de tarefas 2` |
| `GET` | `/tasks/teste` | `TasksController` -> `TasksService.getHolla()` | `Holla, mundo!` |

Exemplos com `curl`:

```bash
curl http://localhost:3000/api
curl http://localhost:3000/api/teste
curl -X POST http://localhost:3000/api/teste
curl http://localhost:3000/tasks
curl http://localhost:3000/tasks/teste
```

O arquivo `api-tests.http`, na raiz do workspace, contém requisições para testar as rotas pelo editor. Como o prefixo atual do `AppController` é `/api`, as requisições desse arquivo devem usar `/api` e `/api/teste` para corresponder ao código.

## 5. Testes E2E

O arquivo `test/app.e2e-spec.ts` demonstra um teste end-to-end. Ele cria um módulo de teste com o `AppModule` real, inicializa uma aplicação Nest em memória, envia uma requisição com `supertest`, verifica o status `200` e o corpo retornado e encerra a aplicação depois do teste.

Execute os testes com:

```bash
npm run test:e2e
```

O teste existente valida a rota `/` do template inicial do NestJS. Como as rotas criadas nesta aula estão em `/api` e `/tasks`, uma próxima evolução natural é adicionar testes E2E para cada uma delas.

## 6. Estrutura final

```text
aula-nest/
├── src/
│   ├── main.ts                 # inicialização da aplicação
│   ├── app/
│   │   ├── app.module.ts       # módulo raiz
│   │   ├── app.controller.ts   # rotas /api
│   │   └── app.service.ts      # respostas da aplicação
│   └── tasks/
│       ├── tasks.module.ts     # módulo de tarefas
│       ├── tasks.controller.ts # rotas /tasks
│       └── tasks.service.ts    # comportamento de tarefas
├── test/
│   └── app.e2e-spec.ts         # teste de integração HTTP
└── package.json                # scripts e dependências
```

## 7. Próximos passos

A base criada nesta aula pode evoluir para uma API de tarefas real: persistência em banco de dados, DTOs, validação com `class-validator`, respostas JSON, tratamento de erros, mais testes, variáveis de ambiente e documentação com Swagger.

## Referências

- [Documentação oficial do NestJS](https://docs.nestjs.com/)
- [Controllers](https://docs.nestjs.com/controllers)
- [Providers e injeção de dependência](https://docs.nestjs.com/providers)
- [Módulos](https://docs.nestjs.com/modules)
- [Testes](https://docs.nestjs.com/fundamentals/testing)
