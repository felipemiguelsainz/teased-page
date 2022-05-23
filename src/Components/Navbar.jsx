import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar () {
    return(
        <div className="navbar">
            <div className="brand-name-container">
                <div className="brand-name"><Link to='/'>TEASED</Link></div>
                <div className='brand-slogan'>inspired by <span className='italic'>UNKNOWN</span></div>
            </div>
            <div className="items-navbar">
                <ul className="list-items-navbar">
                    <li><Link to='/Login'>CUENTA</Link></li>
                    <li>MIS ORDENES</li>
                    <li>ENVIOS</li>
                    <li>PAGOS</li>
                    <li>EDITAR MIS DATOS</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
