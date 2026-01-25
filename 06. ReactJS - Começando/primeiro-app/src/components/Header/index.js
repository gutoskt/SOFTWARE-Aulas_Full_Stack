import {Link} from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header>
            <h2>Sujeito Dev</h2>

            <div className="Menu">
                <Link to="/Sobre" >Sobre</Link>
                <Link to="/Contato" >Contato</Link>
                <Link to="/" >Home</Link>

            </div>
            
        </header>
    )
}

export default Header;
