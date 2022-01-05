import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import AllMovies from '../../Containers/AllMovies/AllMovies';
import {  apiKey } from '../../helpers/urls';
import Loader from '../../Components/Loader/Loader';
import {ConatinerHome} from './StyledHome'

const Home = () => {
     const [movies, setMovies] = React.useState([]) 
     const [page, setPage] = React.useState(1)
     const route = "/Home"
     const mostarMas = () =>{
         setPage(prevPage => prevPage + 1)
     }
     React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_video=true&page=${page}`)
        .then(resp => resp.json())
        .then(data => setMovies(prevMovies => prevMovies.concat(data.results)))
     }, [page])
    return (
            <div style={{background: "#0f0e17",
                height:"100vh", position:"relative"}}>
                <Loader/> 
                <ConatinerHome>
                    <Carousel/>
                    <h2 style={{color:"white", textAlign:"center"}}>Todas las peliculas</h2>
                    <AllMovies movies={movies} route={route}/>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <button className='btn btn-warning' onClick={mostarMas}>Mostrar más</button>
                    </div>
                </ConatinerHome>
            </div>

    );
};
export default Home;