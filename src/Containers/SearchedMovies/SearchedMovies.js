import React from 'react';
import {searcUrl, apiKey} from '../../helpers/urls'
import { useParams } from 'react-router-dom';
import CardsMovies from '../../Components/CardsMovies/CardsMovies';
import {BodyMovies} from './styledSearchedMovies'

const SearchedMovies = () => {

    const params = useParams();
    //  const movie = "el señor de los anillos";
     const {movie} = params;
    const [movies, setMovies] = React.useState([])
    React.useEffect(() => {
         fetch(searcUrl(apiKey, movie))
         .then(resp => resp.json())
         .then(data => setMovies(data.results))
    }, [movie])
    return (
        <BodyMovies>
            <CardsMovies movies={movies} /> 
 
        </BodyMovies>
    );
};

export default SearchedMovies;