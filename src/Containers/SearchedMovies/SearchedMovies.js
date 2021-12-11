import React from 'react';
import {searcUrl, apiKey} from '../../helpers/urls'
import { useParams } from 'react-router-dom';
import CardsMovies from '../../Components/CardsMovies/CardsMovies';

const SearchedMovies = () => {

    const params = useParams();
    //  const movie = "el señor de los anillos";
     const {movie} = params;
    const [movies, setMovies] = React.useState([])
    React.useEffect(() => {
         fetch(searcUrl(apiKey, movie))
         .then(resp => resp.json())
         .then(data => setMovies(data.results))
         console.log(movies)
    }, [movie])
    return (
        <div>
              <CardsMovies movies={movies} /> 
        </div>
    );
};

export default SearchedMovies;