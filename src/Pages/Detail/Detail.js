import React from 'react';
import axios from 'axios';
import {DontainerDetail, DetailDiv} from './StyledDetail'
import './prueba.css'
import { pathImg, apiKey, getVideo } from '../../helpers/urls'
import { urlFavorites } from '../../helpers/endponit'
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
     const deleteMovies = async() =>{
           if( yaEstaAgregada === undefined){
               alert("esta pelicula no esta añadida a favoritos")
           }else{
              await fetch(urlFavorites + peliculaAdd.id,{
                  method:"DELETE"
                })
                alert("la pelicula fue eliminada de favoritos")
           }
        console.log(urlFavorites)
     }
    React.useEffect(() => {
         axios.get(getVideo(apiKey, detailMovie.id))
             .then(response => {

                 setKeyVideo(response.data.results[0].key)
             })
         console.log(keyVideo)
         axios.get(urlFavorites)
         .then(response => {
             setMoviesAdd(response.data)
         })
    }, [moviesAdd])
    return (
        <DontainerDetail>
            <DetailDiv>
                <div className='backdrop-container'>
                    <img src={pathImg + detailMovie.backdrop_path} alt={detailMovie.title} />
                </div>
                <div className='video-container'>
                    <h2>{detailMovie.title}</h2>
                    <iframe src={`https://www.youtube.com/embed/${keyVideo}`}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        />
                    <p>{detailMovie.overview}</p>
                    <button className='btn btn-warning mt-10' onClick={postMovies}>Agregar a favoritos</button>
                    <button className='btn btn-danger t-10' onClick={deleteMovies}>Eliminar de favoritos</button> 
                </div>
            </DetailDiv>
        </DontainerDetail>
    );
};

export default Detail;