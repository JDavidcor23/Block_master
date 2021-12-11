import React from 'react';
import CardsMovies from '../../Components/CardsMovies/CardsMovies';
import {apiKey, getAllMovies} from '../../helpers/urls'
import {BodyMovies} from './StyledAllMovies'

const AllMovies = () => {
    const [movies, setMovies] = React.useState([]) 
    React.useEffect(() => {
        fetch(getAllMovies(apiKey))
        .then(resp => resp.json())
        .then(data => setMovies(data.results))
    }, [])
    
    return (
        <BodyMovies>
            <CardsMovies movies={movies} />  
        </BodyMovies>
    );
};

export default AllMovies;