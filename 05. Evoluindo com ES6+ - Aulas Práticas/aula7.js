// Requisiçoes HTTP - Fetch API
// A Fetch API fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, como requisições e respostas. Ela também fornece um método global fetch() que fornece uma maneira fácil e lógica de buscar

// sIGNIFICADO DE HTTP - HyperText Transfer Protocol - Protocolo de Transferência de Hipertexto

// URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app"); //Seleciona o elemento HTML com o ID "app" e o atribui à variável listElement

let posts = []; //Inicializa um array vazio chamado posts para armazenar os dados dos posts obtidos da API

function nutriApp(){

    fetch("https://sujeitoprogramador.com/rn-api/?api=posts") // O que é Fetch? É uma API que permite fazer requisições HTTP assíncronas para buscar recursos de rede, como dados de uma API ou arquivos.
    // Ele informa ao navegador para buscar o recurso especificado pela URL fornecida.
    .then((r) => r.json()) // O método .then() é usado para lidar com a resposta da requisição fetch. Ele recebe uma função de callback que é executada quando a promessa é resolvida com sucesso.
    .then((json) => { // O segundo .then() é usado para processar os dados JSON obtidos da resposta da requisição fetch. A função de callback recebe os dados JSON como argumento.

        posts = json; //Atribui os dados JSON obtidos da resposta da requisição fetch à variável posts.

        posts.map((item) =>{
            
            let liElement = document.createElement("li"); //Cria um novo elemento HTML <li> para representar um item da lista.
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("a");
            
            let tituloTexto = document.createTextNode(item.titulo); //Cria um nó de texto com o título do post.

            titleElement.appendChild(tituloTexto); //Adiciona o nó de texto do título ao elemento <strong>. Child é usado para adicionar um nó filho a um elemento pai.
            liElement.append(titleElement); //Adiciona o elemento <strong> ao elemento <li>. Pq nao usa child aqui? Porque append() pode adicionar tanto nós de texto quanto elementos HTML, enquanto appendChild() só pode adicionar nós.

            imgElement.src = item.capa; //Define o atributo src da imagem com a URL da capa do post.
            liElement.appendChild(imgElement); //Adiciona o elemento <img> ao elemento <li>.

            let descriptionText = document.createTextNode(item.subtitulo); //Cria um nó de texto com o subtítulo do post.
            descriptionElement.appendChild(descriptionText); //Adiciona o nó de texto do subtítulo ao elemento <a>.
            liElement.appendChild(descriptionElement); //Adiciona o elemento <a> ao elemento <li>.

            listElement.appendChild(liElement); //Adiciona o elemento <li> completo à lista principal no HTML.
            
        } )
    })

    .catch(() => {
        console.log("DEU ALGUM ERRO") // O método .catch() é usado para lidar com erros que podem ocorrer durante a requisição fetch ou no processamento dos dados. Ele recebe uma função de callback que é executada quando ocorre um erro.
    })

}

nutriApp();