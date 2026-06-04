import { db } from './firebaseConnection' // Importa o banco de dados do Firebase para usar em outros arquivos do projeto
import './app.css'
import { useState } from 'react'
import { doc, setDoc, collection, addDoc, getDoc} from 'firebase/firestore' // Importa as funções necessárias para trabalhar com o Firestore, o banco de dados do Firebase


function App() {
  
  const [titulo, setTitulo] = useState(''); // Estado para armazenar o título do post
  const [autor, setAutor] = useState(''); // Estado para armazenar o autor do post

  async function handleAdd() {
    /*await setDoc(doc(db, "posts", "12345"), { // Cria um novo documento no Firestore com o ID "12345" na coleção "posts"
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log("Documento adicionado com sucesso!"); // Exibe uma mensagem de sucesso no console
    })
    .catch((error) => {
      console.error("Erro ao adicionar documento: ", error); // Exibe uma mensagem de erro no console caso ocorra algum problema ao adicionar o documento
    });*/

    await addDoc(collection(db, "posts"), { // Cria um novo documento no Firestore com um ID gerado automaticamente na coleção "posts"
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log("Documento adicionado com sucesso!"); // Exibe uma mensagem de sucesso no console
      setTitulo(''); // Limpa o estado do título após adicionar o documento
      setAutor(''); // Limpa o estado do autor após adicionar the documento
    })
    .catch((error) => {
      console.error("Erro ao adicionar documento: ", error); // Exibe uma mensagem de erro no console caso ocorra algum problema ao adicionar o documento
    });

  }

  async function handleBuscar() {

      const  postRef = doc(db, "posts", "123"); // Cria uma referência para o documento com o ID "12345" na coleção "posts"

      await getDoc(postRef) // Busca o documento usando a referência criada
      .then((snapshot) => { // snapshot é o resultado da busca, que contém os dados do documento
        setAutor(snapshot.data().autor); // Atualiza o estado do autor com o valor do campo "autor" do documento
        setTitulo(snapshot.data().titulo); // Atualiza o estado do título com o valor do campo "titulo" do documento
      })
      .catch((error) => {
        console.error("Erro ao buscar documento: ", error); // Exibe uma mensagem de erro no console caso ocorra algum problema ao buscar o documento
      });
  }

  return (
    <div>
      <h1>ReactJs + Firebase</h1>

      <div className="container">
        <label>Titulo:</label>
        <textarea 
          
          type="text"
          placeholder="Digite o título do post" 
          value={titulo} // Define o valor do textarea como o estado titulo
          onChange={(e) => setTitulo(e.target.value)} // Atualiza o estado titulo quando o valor do textarea mudar
        />

        <label>Autor:</label>
        <input 
          type="text"
          placeholder="Autor do post"
          value={autor} // Define o valor do input como o estado autor
          onChange={(e) => setAutor(e.target.value)} // Atualiza o estado autor quando o valor do input mudar 
        />

        <button type="submit" onClick={handleAdd}>Cadastrar</button>
        <button type="button" onClick={handleBuscar}>Buscar post</button>

      </div>
    </div>
  )
}

export default App
