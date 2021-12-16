import React from 'react';
import CardsMovies from '../../Components/CardsMovies/CardsMovies';
import {apiKey} from '../../helpers/urls'
const TopRated = () => {
    const [movies, setMovies] = React.useState([])
    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then(resp => resp.json())
        .then(data => setMovies(data.results))
    }, [])
    return (
        <div style={{background: "#0f0e17", height:"100vh"}}>
            <div style={{background:"#0F0E17"}}>
                <CardsMovies movies={movies}/> 
            </div>
        </div>
    );
};

export default TopRated;