import React from 'react';
import { urlFavorites } from '../../helpers/endponit'
import CardsMovies from '../../Components/CardsMovies/CardsMovies';

const Favorites = () => {
    const [movies, setMovies] = React.useState([])
    const route = '/Favorites'
    React.useEffect(() => {
        fetch(urlFavorites)
        .then(resp => resp.json())
        .then(data => setMovies(data))
    }, [])
    return (
        <div style={{background: "#0f0e17", height:"100vh"}}>
            {movies.length === 0 ?
            <h2 style={{color:"white", textAlign:"center", marginTop:"20px"}}>No tienes ninguna película agregada</h2>
            :<div style={{background:"#0F0E17"}}>
                <CardsMovies movies={movies} route={route}/> 
            </div>}
        </div>
    );
};

export default Favorites;