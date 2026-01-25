import {BrowserRouter, Routes, Route} from 'react-router-dom';

// BrowserRouter: Componente que envolve toda a aplicação para habilitar o uso de rotas.
// Routes: Componente que agrupa todas as rotas definidas.
// Route: Componente que define uma rota específica, associando um caminho (path) a um componente (element).

import Home from './pages/Home'; // Ele já chama o indice.js automaticamente.
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from './components/Header';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

function RoutesApp() {

    return(
        <BrowserRouter> {/* Envolve toda a aplicação para habilitar o uso de rotas. */}
            <Header/>

            <Routes> {/* Agrupa todas as rotas definidas. */}
                <Route path="/" element={<Home/>}/>  
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Contato" element={<Contato/>}/>
                <Route path="/Produto/:id" element={<Produto/>}/> {/* Rota dinâmica com parâmetro "id". */}

                <Route path="*" element={<Erro/>}/> {/* Rota curinga para capturar todas as rotas não definidas. */}    
            </Routes>
        </BrowserRouter>
    )
}

// path="/": Define o caminho da URL para a rota.

export default RoutesApp;