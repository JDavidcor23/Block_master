import React from 'react';
import { Link } from 'react-router-dom';
import {searcUrl, apiKey} from '../../helpers/urls'
import { Nav, Ul, Logo, Li, LinkReact,LinkBuscar } from './NavbarStyled';




const Navbar = () => {

    const [input, setInput] = React.useState([])
    const handleChange = (e) =>{
        setInput(e.target.value)

    }

    return (
        <Nav>
            <Ul>
                <LinkReact to="/"><Logo src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1638917366/Block_master/axlnvl0bw4js7kmoduvp.png" alt="logo"/></LinkReact>
                <Li><LinkReact to="/">Todas</LinkReact></Li>
                <Li><LinkReact to="/">Menos valoradas</LinkReact></Li>
            </Ul>
            <form className='Buscardor'>
                <input 
                type="search"
                placeholder='busca tu pelicula'
                value={input}
                onChange={handleChange}
                />
                <button>
                <Link  to={`/searchmovies/${input}`}><img src='https://res.cloudinary.com/dhu6ga6hl/image/upload/v1638919435/Block_master/kmuvt15nereuupyxtufr.png' alt="lupa"/>
                </Link>
                </button>
            </form>
            
        </Nav>
    );
};

export default Navbar;