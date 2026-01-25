import {useParams} from 'react-router-dom';

function Produto() {
  const {id} = useParams(); // useParams - Hook do React Router para acessar os parâmetros da URL.

  return (
    <div>
        Meu Produto é {id} {/* Exibe o valor do parâmetro "id" da URL. */}
    </div>
  );
}

export default Produto;

// o que é hook ? 
// Hooks são funções especiais do React que permitem usar estado e outras funcionalidades do React sem escrever uma classe.
// explique melhor o que é hook ?
// Hooks são funções que "ligam" recursos do React, como estado e ciclo de vida, a componentes funcionais, permitindo que eles tenham funcionalidades avançadas sem a necessidade de classes.