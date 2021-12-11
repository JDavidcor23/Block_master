import React from 'react';
import { 
    Poster,
    ContainerMovies, 
    CalificationContainer, 
    Estrella,Calificacion, 
    DivCalificacion,
    CardsPeliculas 
} from './StyledCardsMovies';

import {pathImg} from '../../helpers/urls'

const CardsMovies = ({movies}) => {
    const thisMovies = movies.filter(movie => movie.poster_path != null)

    return (
        <ContainerMovies className="container-movies">
        {(thisMovies.map(movie =>(
             <CardsPeliculas key={movie.id}>
                 <DivCalificacion>
                     <Estrella src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639112517/Block_master/l97qdl2xvsughle4sefk.png"/>
                 <CalificationContainer src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1639112517/Block_master/ttasy7wkie36p9xwsp7i.png"/>
                 <Calificacion>${movie.vote_average}</Calificacion>
                 </DivCalificacion>
                 <Poster src={pathImg+ movie.poster_path} alt={movie.title}/>
             </CardsPeliculas>
         )))}   
        </ContainerMovies>
    );
};

export default CardsMovies;