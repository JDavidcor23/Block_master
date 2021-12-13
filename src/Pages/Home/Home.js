import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import AllMovies from '../../Containers/AllMovies/AllMovies';
import { getAllMovies, apiKey } from '../../helpers/urls';
import {ConatinerHome} from './StyledHome'

const Home = () => {
    const [movies, setMovies] = React.useState([]) 
    React.useEffect(() => {
        fetch(getAllMovies(apiKey))
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