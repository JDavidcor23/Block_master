import React from 'react';
import axios from 'axios';
// import {DetailContainer} from './StyledDetail'
import './prueba.css'
import {pathImg, apiKey, getVideo} from '../../helpers/urls'
import {urlFavorites} from '../../helpers/endponit'
const Detail = () => {
    const [keyVideo, setKeyVideo] = React.useState('')
    const [moviesAdd, setMoviesAdd]  = React.useState([])
    const correoRegistrado = localStorage.getItem("user")
    const detailMovie = JSON.parse(localStorage.getItem("detalle"))
    const yaEstaAgregada = moviesAdd.some(favorita => favorita.email === correoRegistrado && favorita.movieId === detailMovie.id)
    const peliculaAdd = moviesAdd.find(favorita => favorita.email === correoRegistrado && favorita.movieId === detailMovie.id)
    const postMovies = () =>{
        const emailUser=localStorage.getItem("user")
        let favoriteMovies ={
            email:emailUser,
            movieId: detailMovie.id,
            title: detailMovie.title,
            poster_path: detailMovie.poster_path,
        } 
        if(yaEstaAgregada === true){
            alert("la pelicula ya esta añadida a favoritos")
        }else{
            axios.post(urlFavorites, favoriteMovies)
            alert("pelicula añadida a favoritos")
        }
    }
    const deleteMovies = () =>{
         if( yaEstaAgregada === undefined){
             alert("esta pelicula no esta añadida a favoritos")
         }else{
            fetch(urlFavorites + peliculaAdd.id,{
                method:"DELETE"
            })
         }
        console.log(peliculaAdd)
    }
    React.useEffect(() => {
        axios.get(getVideo(apiKey, detailMovie.id))
        .then(response => {
            setKeyVideo(response.data.results[0].key)
        })
        axios.get(urlFavorites)
        .then(response => {
            // console.log(response.data)
            setMoviesAdd(response.data)
        })
         console.log(moviesAdd)
    }, [])
    return (
        <div className='Container'>
            <div className='container-detalle'>
                    <div className='backdrop-container'> 
                        <img src={pathImg + detailMovie.backdrop_path} alt={detailMovie.title}/>
                    </div>
                    <div className='video-container'>
                        <h2>{detailMovie.title}</h2>
                    <iframe src={"https://www.youtube.com/embed/" + keyVideo}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>{detailMovie.overview}</p>
                    <button className='btn btn-warning mt-10' onClick={postMovies}>Agregar a favoritos</button>
                    <button className='btn btn-danger t-10' onClick={deleteMovies}>Eliminar de favoritos</button>
                    </div>
            </div>
        </div>
    );
};

export default Detail;