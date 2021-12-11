import React from 'react';
import { 
    Poster,
    ContainerMovies, 
    CalificationContainer, 
    Estrella,Calificacion, 
    DivCalificacion,
    CardsPeliculas 
} from './StyledCardsMovies';

import {pathImg, getMovie, apiKey} from '../../helpers/urls'
import DetalleMovies from '../DetalleMovies/DetalleMovies'
const CardsMovies = ({movies}) => {
    
    const thisMovies = movies.filter(movie => movie.poster_path != null)
    const [movieId, setMovieId] = React.useState([])
    const [mostraDetalle, setMostraDetalle] = React.useState(false)
    const handleId = async(id) =>{
       const resp = await fetch(getMovie(apiKey, id))
       const data = await resp.json()
       setMovieId(await data)
       setMostraDetalle(!mostraDetalle)
       console.log(mostraDetalle)
    }

    return (
        <ContainerMovies className="container-movies">
        {mostraDetalle === true && 
        <DetalleMovies detalle={movieId}/>}
        {(thisMovies.map(movie =>(
             <CardsPeliculas key={movie.id} onClick={()=>handleId(movie.id)}>
                 <DivCalificacion>
                     <Estrella src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639112517/Block_master/l97qdl2xvsughle4sefk.png"/>
                 <CalificationContainer src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639112517/Block_master/ttasy7wkie36p9xwsp7i.png"/>
                 <Calificacion>{movie.vote_average}</Calificacion>
                 </DivCalificacion>
                 <Poster src={pathImg+ movie.poster_path} alt={movie.title}/>
             </CardsPeliculas>
        )))}
        {mostraDetalle === true && 
        <DetalleMovies detalle={movieId} cerrar={mostraDetalle} setCerrar={setMostraDetalle}/>}  
        </ContainerMovies>

    );
};

export default CardsMovies;