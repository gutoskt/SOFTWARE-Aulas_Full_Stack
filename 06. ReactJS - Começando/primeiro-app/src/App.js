// JSX código import React from 'react';
// A ideia do componente é facilitar o trabalho de construção da interface do usuário, dividindo-a em partes menores e reutilizáveis.

import {useState, useEffect} from 'react';

import Nome from './components/Nome'; // Importa o componente Nome do arquivo src/components/Nome.js

function App1() { // Isso é um componente funcional chamado App (Uma estrutura que sever como uma função que retorna um pedaço da interface do usuário).

  const [nome, setNome] = useState('Carlos Augusto'); // Declara uma variável de estado chamada "nome" com o valor inicial 'Carlos Augusto' e uma função "setNome" para atualizar esse valor.

  function mudarNome(novoNome) { // Função que altera o valor da variável de estado "nome" quando chamada.
    setNome(novoNome); // Atualiza o valor de "nome" para o novo nome passado como parâmetro.
  }


  return (
    <div>
      <h1>Olá, Mundo!</h1><br/>
      <h2>Meu nome é {nome}</h2> {/* Renderiza o valor da variável de estado "nome" dentro do elemento h2. */}
      
      <button onClick={() => mudarNome ('Lucas')} >
        Mudar nome
      </button><br/>
      
      <Nome nome={nome} idade={25}/> {/* Forma como chama outro componente dentro do componente App. */}

    </div>
  );
}

export default App; // Exporta o componente App para que ele possa ser usado em outros arquivos, como em src/index.js.


// Segunda parte da aula - O que são propriedades (props):

// Propriedades (props) são parâmetros que você pode passar para componentes React para torná-los mais dinâmicos e reutilizáveis.

// Por exemplo, você pode modificar o componente Nome para aceitar uma propriedade chamada "nome" e usá-la para exibir diferentes nomes:

// mudarNome ('Lucas') - Só assim, ele enetende que esta chamando a função



//////////////////////////////////////////////////////////////////

// UsesTate - é um hook do React que permite adicionar estado a componentes funcionais. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo.

// sIGNIOFICADOP DE hOOK - ganchos, são funções especiais que permitem "ligar" funcionalidades do React a componentes funcionais, como estado e ciclo de vida.

// Manipulando Formulários:

function App2() {

  const [tarefa, setTarefa] = useState('');

  const [userLista, setLista] = useState([]); // Objeto vazio para armazenar os dados do usuário.

  function registroGeral(e) { // O evento é essa ação que ocorre quando o formulário é enviado.

    e.preventDefault(); // Evita o comportamento padrão do formulário, que é recarregar a página ao enviar.

    setLista([...userLista, tarefa]); // ... Atualiza a lista de tarefas adicionando a nova tarefa ao array existente.
    setTarefa('');
  }

  return(
    <div>

      <h1>Formulário de Registro </h1>
      
      <form onSubmit={registroGeral}>
        <label>Nome da tarefa:</label><br/>
        <input 
          placeholder='Digite seu nome da tarefa...'
          value={tarefa} // Define o valor do campo de entrada como o estado "nome".
          onChange={(e) => setTarefa(e.target.value)} // Atualiza o estado "nome" com o valor digitado no campo de entrada.
          // O e é o evento que captura a mudança no input.


        ></input><br/>

        <br/> 


        <button type='submit'>Registrar</button>

      </form>

      <br/><br/>

      <ul>
        {userLista.map(tarefa => (
          <li key={tarefa}>{tarefa}</li> // Key é uma propriedade especial usada pelo React para identificar elementos de forma única na lista.
        ))}

      </ul> 

    </div>
  );
}

// AULA - UserEFFECT - Ciclo de Vida dos Componentes:

// O hook useEffect permite que você execute efeitos colaterais em componentes funcionais, como buscar dados, configurar assinaturas ou manipular o DOM diretamente.

function App() {

  const [tarefa, setTarefa] = useState('');

  //useEffect(() => {alert("Componente montado!");}, []); // O array vazio [] indica que o efeito deve ser executado apenas uma vez, quando o componente é montado.
  //useEffect(() => {alert("Componente montado!");}, [userLista]); // Sempre que a variável tarefa for alterada, o efeito será executado.
  
  const [userLista, setLista] = useState(() => {
    const tarefasStorage = localStorage.getItem('@tarefas');
    if (tarefasStorage) {
      return JSON.parse(tarefasStorage);
    }
    // Só usa essa lista padrão se for a PRIMEIRA vez que o usuário entra no app
    return ['Pagar a conta de luz', 'Estudar React JS'];
  });
  
  useEffect(() => {
    localStorage.setItem("@tarefas", JSON.stringify(userLista)); 
  }, [userLista]);

  function registroGeral(e) { // O evento é essa ação que ocorre quando o formulário é enviado.

    e.preventDefault(); // Evita o comportamento padrão do formulário, que é recarregar a página ao enviar.

    setLista([...userLista, tarefa]); // ... Atualiza a lista de tarefas adicionando a nova tarefa ao array existente.
    setTarefa('');
  }

  return(
    <div>

      <h1>Formulário de Registro </h1>
      
      <form onSubmit={registroGeral}>
        <label>Nome da tarefa:</label><br/>
        <input 
          placeholder='Digite seu nome da tarefa...'
          value={tarefa} // Define o valor do campo de entrada como o estado "nome".
          onChange={(e) => setTarefa(e.target.value)} // Atualiza o estado "nome" com o valor digitado no campo de entrada.
          // O e é o evento que captura a mudança no input.


        ></input><br/>

        <br/> 


        <button type='submit'>Registrar</button>

      </form>

      <br/><br/>

      <ul>
        {userLista.map(tarefa => (
          <li key={tarefa}>{tarefa}</li> // Key é uma propriedade especial usada pelo React para identificar elementos de forma única na lista.
        ))}

      </ul> 

    </div>
  );
}