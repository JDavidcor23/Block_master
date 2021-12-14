import React from 'react';
import axios from 'axios';
import { urlUser } from '../../helpers/endponit';
import {Container, Form,  ImgPerfil,  InputSP} from './StyledPerfil'
const Perfil = () => {
    const [usuarioRegitrado, setUsuarioRegitrado] = React.useState([])
    const localEmail = localStorage.getItem("user")
    const EncuentraUser = usuarioRegitrado.find(user => user.email === localEmail)
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        nombre:"",
    })
    const {email, password, nombre} = user

    const handleChange = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const handleHome = () =>{
        fetch(urlUser+EncuentraUser.id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        localStorage.setItem("user", user.email)
    }
    React.useEffect(() => {
        axios.get(urlUser)
         .then(resp => setUsuarioRegitrado(resp.data))
         console.log(usuarioRegitrado)
        }, [])
    return (
         <Container>
             <Form onSubmit={handleSubmit}>
                 <h2>Modifica tus datos</h2>
                 <ImgPerfil src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639515355/Block_master/wnvnbonidfppo7nx3fyt.png" alt="perfil"/>
                 <InputSP type="text" name="name" value={nombre} onChange={handleChange} placeholder="nombre" required/>
                 <InputSP type="email" name="email" value={email} onChange={handleChange} placeholder="email" required/>
                 <InputSP type="password" name="password" value={password} onChange={handleChange} placeholder='Contraseña' required/>
                 <button onClick={handleHome} className='btn btn-warning'>Cambiar</button>
             </Form>
         </Container>
    );
};

export default Perfil;