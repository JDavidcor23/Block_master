import React from 'react';
import {ImgError, ContainerError} from './StyledError'
import {useParams} from 'react-router-dom'
const Error = () => {
    const params = useParams();
    const {movie} = params;
    return (
        <ContainerError>
            <ImgError src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1638918736/Block_master/ubrhjybwwjnhbt0d1qlb.png" alt="error 404"/>
            <p>No se encontraron Resultados para "{movie}"</p>
        </ContainerError>
    );
};

export default Error;