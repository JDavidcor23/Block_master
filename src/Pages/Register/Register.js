import React from 'react';
import {ContainerRegister, FormRegister, RegisterIput, ButtonRegister, H2Register, LinkLogin,LinkButton} from './StyledRegister'
import axios from 'axios';
import { urlUser } from '../../helpers/endponit';
const Register = () => {
    const [correo, setCorreo] = React.useState([])
    const [user, setUser] = React.useState({
        nombre:"",
        email:"",
        password:"",
    })
    const CorreoRepetio =  correo.some(correo => correo.email === user.email)

    const {nombre, email, password} = user

    const handleChange = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
     const postData = () => {
          if(CorreoRepetio === true){
             alert("el correo ya esta registrado")
         }else{
             axios.post(urlUser, user)
             localStorage.setItem("user", user.email)
         }
     }
    React.useEffect(() => {
        axios.get(urlUser)
         .then(resp => setCorreo(resp.data))
        }, [])
    return (
         <ContainerRegister>
             <FormRegister onSubmit={handleSubmit}>
                 <H2Register>Ingresa tus datos</H2Register>
                 <RegisterIput  name="nombre" value={nombre} onChange={handleChange} placeholder='Nombre' required/>
                 <RegisterIput type="email" name="email" value={email} onChange={handleChange} placeholder='Email' required/>
                 <RegisterIput type="password" name="password" value={password} onChange={handleChange} placeholder='Contraseña' required/>
                 {CorreoRepetio === true ?
                  <ButtonRegister onClick={postData}>Registrarse</ButtonRegister> 
                  :<ButtonRegister onClick={postData}><LinkButton to="/Home">Registrarse</LinkButton></ButtonRegister>}
                  <p>¿Ya tienes cuenta? <LinkLogin to="/">Click aqui</LinkLogin></p>
             </FormRegister>
         </ContainerRegister>
    );
};

export default Register;