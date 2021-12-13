import React from 'react';
import CardsMovies from '../../Components/CardsMovies/CardsMovies';
import {BodyMovies} from './StyledAllMovies'

const AllMovies = ({movies}) => {
    return (
        <BodyMovies>
            <CardsMovies movies={movies} />  
        </BodyMovies>
    );
};

export default AllMovies;