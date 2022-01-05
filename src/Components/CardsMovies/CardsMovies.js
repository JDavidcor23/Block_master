import React from 'react';
import { 
    Poster,
    ContainerMovies, 
    CalificationContainer, 
    Estrella,Calificacion, 
    DivCalificacion,
    CardsPeliculas, 
    LinkCards,

} from './StyledCardsMovies';

import {pathImg} from '../../helpers/urls'
import Error from '../Error/Error';
const CardsMovies = ({movies, error, route}) => {
    let thisMovies =  movies.filter(movie => movie.poster_path != null && movie.backdrop_path != null)
    
    const guardarLocalStorage = (id)=>{
        const movieSelect = movies.find(movie => movie.id === id)
        localStorage.setItem("detalle", JSON.stringify(movieSelect))
        localStorage.setItem("Route", route)
    }
    return (
        <ContainerMovies className="container-movies">
            {error === "404" ?
            <div>
                <Error/>
            </div>
            :(thisMovies.map(movie =>(
                <LinkCards to="/Detail" key={movie.id} onClick={()=> guardarLocalStorage(movie.id)}>
                    <CardsPeliculas>
                    <DivCalificacion>
                        <Estrella src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639112517/Block_master/l97qdl2xvsughle4sefk.png"/>
                    <CalificationContainer src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639112517/Block_master/ttasy7wkie36p9xwsp7i.png"/>
                    <Calificacion>{movie.vote_average}</Calificacion>
                    </DivCalificacion>
                    <Poster src={pathImg+ movie.poster_path} alt={movie.title}/>
                </CardsPeliculas>
                </LinkCards>
                )))}
        </ContainerMovies>
    );
};

export default CardsMovies;