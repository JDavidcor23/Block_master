import React from 'react';
import { urlFavorites } from '../../helpers/endponit'
import CardsMovies from '../../Components/CardsMovies/CardsMovies';

const Favorites = () => {
    const [movies, setMovies] = React.useState([])

    React.useEffect(() => {
        fetch(urlFavorites)
        .then(resp => resp.json())
        .then(data => setMovies(data))
    }, [])

    return (
        <div style={{background: "#0f0e17", height:"100vh"}}>
            <div style={{background:"#0F0E17"}}>
                <CardsMovies movies={movies}/> 
            </div>
        </div>
    );
};

export default Favorites;