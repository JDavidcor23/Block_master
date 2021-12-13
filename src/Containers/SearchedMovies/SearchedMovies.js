import React from 'react';
import {searcUrl, apiKey} from '../../helpers/urls'
import { useParams } from 'react-router-dom';
import CardsMovies from '../../Components/CardsMovies/CardsMovies';
import {BodyMovies} from './styledSearchedMovies'

const SearchedMovies = () => {

    const params = useParams();
    const {movie} = params;
    const [movies, setMovies] = React.useState([])
    const [error, setError] = React.useState(false)

    const getSearch = async() =>{
        const resp = await fetch(searcUrl(apiKey, movie))
        const data = await resp.json()
        return data
    }
    React.useEffect(() => {
        getSearch()
        .then(data => {
            if(data.results.length  < 1){
                setError("404")
                setMovies([])
            }else{
                setError("")
                setMovies(data.results)
            }
        })
         
    }, [params])
    return (
        <BodyMovies>
            <CardsMovies movies={movies} error={error} setError={setError}/> 
        </BodyMovies>
    );
};

export default SearchedMovies;