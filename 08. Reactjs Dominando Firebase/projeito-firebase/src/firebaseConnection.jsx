import { initializeApp } from "firebase/app"; // Ele é necessário para inicializar o Firebase
import { getFirestore } from "firebase/firestore"; // Ele é necessário para acessar o banco de dados do Firebase, o Firestore
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCTXExre1jfbbYPF_sV6uOGz38BE0EadEo",
  authDomain: "curso---sujeito-programador.firebaseapp.com",
  projectId: "curso---sujeito-programador",
  storageBucket: "curso---sujeito-programador.firebasestorage.app",
  messagingSenderId: "156321480155",
  appId: "1:156321480155:web:95a096d85fa95916927bfe",
  measurementId: "G-X8XQR12JM1"
};

const firebaseApp = initializeApp(firebaseConfig); // Inicializa o Firebase com as configurações fornecidas
const db = getFirestore(firebaseApp); // Acessa o banco de dados do Firebase, o Firestore, usando a instância do Firebase inicializada
const auth = getAuth(firebaseApp); // Acessa o serviço de autenticação do Firebase usando a instância do Firebase inicializada

export { db, auth }; // Exporta o banco de dados e o serviço de autenticação para que possam ser usados em outros arquivos do projeto