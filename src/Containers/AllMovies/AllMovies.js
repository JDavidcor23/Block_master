import React from 'react';
import CardsMovies from '../../Components/CardsMovies/CardsMovies';
import {BodyMovies} from './StyledAllMovies'

const AllMovies = ({movies, route}) => {
    return (
        <BodyMovies>
            <CardsMovies movies={movies} route={route}/>  
        </BodyMovies>
    );
};

export default AllMovies;