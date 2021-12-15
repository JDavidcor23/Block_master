import React from 'react';
import { 
    Poster,
    ContainerMovies, 
    CalificationContainer, 
    Estrella,Calificacion, 
    DivCalificacion,
    CardsPeliculas,
    Loader, 
    ContainerLoader 
} from './StyledCardsMovies';

import {pathImg} from '../../helpers/urls'
import { Link } from 'react-router-dom';
import Error from '../Error/Error';
const CardsMovies = ({movies, error}) => {
    let thisMovies =  movies.filter(movie => movie.poster_path != null && movie.backdrop_path != null)
    const guardarLocalStorage = (id)=>{
        const movieSelect = movies.find(movie => movie.id === id)
        localStorage.setItem("detalle", JSON.stringify(movieSelect))
    }
    return (
        <ContainerMovies className="container-movies">
            <ContainerLoader className="ContainerLoader">
                <Loader></Loader>
            </ContainerLoader> 
            {error === "404" ?
            <div>
                <ContainerLoader class="ContainerLoader">
                    <Loader></Loader>
                </ContainerLoader> 
                <Error/>
            </div>
            :(thisMovies.map(movie =>(
                    <Link to="/Detail" key={movie.id} onClick={()=> guardarLocalStorage(movie.id)}>
                        <CardsPeliculas>
                        <DivCalificacion>
                            <Estrella src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639112517/Block_master/l97qdl2xvsughle4sefk.png"/>
                        <CalificationContainer src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639112517/Block_master/ttasy7wkie36p9xwsp7i.png"/>
                        <Calificacion>{movie.vote_average}</Calificacion>
                        </DivCalificacion>
                        <Poster src={pathImg+ movie.poster_path} alt={movie.title}/>
                    </CardsPeliculas>
                    </Link>
                )))}
        </ContainerMovies>
    );
};

export default CardsMovies;