import React from 'react';
import axios from 'axios';
import { urlUser } from '../../helpers/endponit';

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
    }
    React.useEffect(() => {
        axios.get(urlUser)
         .then(resp => setUsuarioRegitrado(resp.data))
        }, [])
    return (
         <div>
             <form onSubmit={handleSubmit}>
                 <h2>Modifica tus datos</h2>
                 <img src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639360757/Block_master/vjvk83kiubpybhq0utkf.png" alt="perfil"/>
                 <input type="text" name="name" value={nombre} onChange={handleChange} placeholder='nombre' required/>
                 <input type="email" name="email" value={email} onChange={handleChange} placeholder='Email' required/>
                 <input type="password" name="password" value={password} onChange={handleChange} placeholder='Contraseña' required/>
                 <button onClick={handleHome}>Cambiar</button>
             </form>
         </div>
    );
};

export default Perfil;