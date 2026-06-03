import './erro.css'
import { Link } from 'react-router-dom';

function Erro(){

    return(
        <div className="container-erro">
            <h1>Página não encontrada - Erro 404</h1>
            <Link to="/">Voltar para Home</Link>
        </div>
    )
}

export default Erro;