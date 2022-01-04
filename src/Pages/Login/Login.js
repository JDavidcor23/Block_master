import React from 'react';
import {ContainerLogin, FormLogin, LoginIput, ButtonLogin, H2Login, LinkRegistro, LinkButton} from './StyledLogin'
import axios from 'axios';
import { urlUser } from '../../helpers/endponit';

const Login = () => {
    const [usuarioRegitrado, setUsuarioRegitrado] = React.useState([])
    const [user, setUser] = React.useState({
        email:"",
        password:"",
    })
    const {email, password} = user
    const hayCorreo =  usuarioRegitrado.some(correo => correo.email === user.email)
    const thisPassword =  usuarioRegitrado.some(con => con.password === user.password)
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
        if(hayCorreo === true && thisPassword === true){
            localStorage.setItem("user", user.email)
        }
        else if(hayCorreo === false){
            alert("correo no existe")
        }
        else if(thisPassword === false){
            alert("Contraseña icorrecta")
        }
    }
    React.useEffect(() => {
        axios.get(urlUser)
         .then(resp => setUsuarioRegitrado(resp.data))
        }, [])
    return (
         <ContainerLogin>
             <FormLogin onSubmit={handleSubmit}>
                 <H2Login>Igresa tus datos</H2Login>
                 <LoginIput type="email" name="email" value={email} onChange={handleChange} placeholder='Email' required/>
                 <LoginIput type="password" name="password" value={password} onChange={handleChange} placeholder='Contraseña' required/>
                 {hayCorreo === true && thisPassword === true ?
                 <LinkButton to="/Home">
                 <ButtonLogin onClick={handleHome}>Iniciar Secion</ButtonLogin></LinkButton>
                 : <ButtonLogin onClick={handleHome}>Iniciar Secion</ButtonLogin>}
                 <p>¿No tienes cuenta? <LinkRegistro to="/register">Click aqui</LinkRegistro></p>
             </FormLogin>
         </ContainerLogin>
    );
};

export default Login;