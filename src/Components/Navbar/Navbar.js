import React from 'react';
import { Link } from 'react-router-dom';
import {searcUrl, apiKey} from '../../helpers/urls'
import { Nav, 
        Ul, 
        Logo, 
        Li, 
        LinkReact, 
        From, 
        InputSearch, 
        ButtonSearch,
        ImgSearch 
    } from './NavbarStyled';




const Navbar = () => {

    const [input, setInput] = React.useState([])
    const [error, setError] = React.useState('')
    const handleChange = (e) =>{
        setInput(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDeafault();
        fetch(searcUrl(apiKey, input))
        .then(resp => resp.json())
        .then(data => setInput(data.results))
        .catch(err => setError(err))
    }
    return (
        <Nav>
            <Ul>
                <LinkReact to="/"><Logo src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1638917366/Block_master/axlnvl0bw4js7kmoduvp.png" alt="logo"/></LinkReact>
                <Li><LinkReact to="/">Todas</LinkReact></Li>
                <Li><LinkReact to="/">Menos valoradas</LinkReact></Li>
            </Ul>
            <From className='Buscardor' onSubmit={handleSubmit}>
                <InputSearch 
                type="text"
                placeholder='Busca tu pelicula favorita'
                value={input}
                onChange={handleChange}
                />
                <ButtonSearch>
                {!error
                ?<Link  to={`/searchmovies/${input}`}><ImgSearch src='https://res.cloudinary.com/dhu6ga6hl/image/upload/v1638919435/Block_master/kmuvt15nereuupyxtufr.png' alt="lupa"/>
                </Link>
                :<Link  to={`/error`}><ImgSearch src='https://res.cloudinary.com/dhu6ga6hl/image/upload/v1638919435/Block_master/kmuvt15nereuupyxtufr.png' alt="lupa"/>
                </Link>
                }
                </ButtonSearch>
            </From>
            
        </Nav>
    );
};

export default Navbar;