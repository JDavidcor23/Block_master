import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import AllMovies from '../../Containers/AllMovies/AllMovies';
import {  apiKey } from '../../helpers/urls';
import {ConatinerHome} from './StyledHome'

const Home = () => {
     const [movies, setMovies] = React.useState([]) 
     React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=${apiKey}&include_video=true&page=1`)
        .then(resp => resp.json())
        .then(data => setMovies(data.results))
     }, [])
    return (
        <ConatinerHome>
            <Carousel/>
            <AllMovies movies={movies}/>
        </ConatinerHome>
    );
};

export default Home;