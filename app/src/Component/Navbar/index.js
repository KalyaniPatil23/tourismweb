import './navbarStyle.css';
import { MenuItems } from './MenuItems';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faBars, faTimes, } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Navbar() {

    const [clicked, setClicked] = useState(false);
    const handleClicked = () =>{
        setClicked(!clicked);
    }
    return(
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Aloha</h1>
            <ul className={clicked? 'nav-menu active' : 'nav-menu'}>
                {
                    MenuItems.map((item, index) => (
                        <li key={index}>
                            <a className={item.cName} href='/'>
                                {/* <FontAwesomeIcon icon={faHome}/> */}
                                {item.title}
                            </a>
                        </li>
                    ))
                }
                <button >Book a trip</button>
            </ul>
            {/* <button >Book a trip</button> */}
            <div className='menu-icons'>
                <FontAwesomeIcon icon={clicked ? faTimes : faBars} onClick={handleClicked}/>
            </div>
        </nav>
    )

}

export default Navbar;