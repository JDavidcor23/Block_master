import React from 'react';
import CardsMovies from '../../Components/CardsMovies/CardsMovies';
// import {
//     H2,
//     BodyMovies
// } from './StyledMovies';
import {apiKey, getAllMovies} from '../../helpers/urls'

const Movies = () => {
    const [movies, setMovies] = React.useState([]) 
    React.useEffect(() => {
        fetch(getAllMovies(apiKey))
        .then(resp => resp.json())
        .then(data => setMovies(data.results))
    }, [])
    
    return (
        <div>
            <CardsMovies
            movies={movies}
            />
        </div>
    );
};

export default Movies;