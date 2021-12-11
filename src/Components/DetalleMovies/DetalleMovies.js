import React from 'react';
import {DetailContainer, ImgPosterDetalle} from './StyledDetalleMovies'
import {pathImg} from '../../helpers/urls'

const DetalleMovies = ({detalle,cerrar, setCerrar}) => {
    const cerrarMovie = () =>{
        setCerrar(!cerrar)
    }
    return (
        <DetailContainer>
            <button onClick={cerrarMovie}>X</button>
            <h2>{detalle.original_title}</h2>
            <ImgPosterDetalle src={pathImg +detalle.poster_path} alt={detalle.original_title}/>
        </DetailContainer>
    );
};

export default DetalleMovies;