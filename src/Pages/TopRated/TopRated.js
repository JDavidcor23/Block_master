import React from 'react';
import CardsMovies from '../../Components/CardsMovies/CardsMovies';
import {apiKey} from '../../helpers/urls'
const TopRated = () => {
    const [movies, setMovies] = React.useState([])
    const [page, setPage] = React.useState(1)
    const mostarMas = () =>{
        setPage(prevPage => prevPage + 1)
    }
    const route = "/TopRated"
    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`)
        .then(resp => resp.json())
        .then(data => setMovies(prevMovies => prevMovies.concat(data.results)))
    }, [page])
    return (
        <div style={{background: "#0f0e17", height:"100vh"}}>
            <div style={{background:"#0F0E17"}}>
                <CardsMovies movies={movies} route={route}/> 
                <div style={{display: "flex",justifyContent: "center"}}>
                    <button className='btn btn-warning' onClick={mostarMas}>Mostrar más</button>
                </div>
            </div>
        </div>
    );
};

export default TopRated;