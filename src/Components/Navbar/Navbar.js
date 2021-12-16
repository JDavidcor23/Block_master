import React from 'react';
import { Link } from 'react-router-dom';
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

    const [input, setInput] = React.useState("")
    const handleChange = (e) =>{
        setInput(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDeafault();
    }
    return (
        <Nav>
            <Ul>
                <LinkReact to="/Home"><Logo src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1638917366/Block_master/axlnvl0bw4js7kmoduvp.png" alt="logo"/></LinkReact>
                <Li><LinkReact to="/Home">Todas</LinkReact></Li>
                <Li><LinkReact to="/TopRated">Mejor valoradas</LinkReact></Li>
                <Li><Link to="/Favorites"><img width="30px" src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639660295/Block_master/efimv7u3m0e8shtmocxh.png" alt="perfil"/></Link></Li>
                <Li><Link to="/Perfil"><img width="50%" src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639360757/Block_master/vjvk83kiubpybhq0utkf.png" alt="perfil"/></Link></Li>
            </Ul>
            
            <From className='Buscardor' onSubmit={handleSubmit} action=''>
                <InputSearch 
                type="text"
                placeholder='Busca tu pelicula favorita'
                value={input}
                onChange={handleChange}
                required
                />
                <Link  to={`/searchmovies/${input}`}>
                <ButtonSearch type="submit">
                    <ImgSearch src='https://res.cloudinary.com/dhu6ga6hl/image/upload/v1638919435/Block_master/kmuvt15nereuupyxtufr.png' alt="lupa"/>
                </ButtonSearch>
                </Link>
            </From>
            
        </Nav>
    );
};

export default Navbar;