import React from 'react';
import axios from 'axios';
import {DontainerDetail, DetailDiv} from './StyledDetail'
import { useNavigate } from 'react-router-dom';
import './prueba.css'
import { pathImg, apiKey, getVideo } from '../../helpers/urls'
import { urlFavorites } from '../../helpers/endponit'
const Detail = () => {
    const navigate = useNavigate()
    const [keyVideo, setKeyVideo] = React.useState('')
    const [moviesAdd, setMoviesAdd]  = React.useState([])
    const detailMovie = JSON.parse(localStorage.getItem("detalle"))
    const route = localStorage.getItem("Route")
    const yaEstaAgregada = moviesAdd.some(favorita =>favorita.id === detailMovie.id)
    const peliculaAdd = moviesAdd.find(favorita => favorita.id === detailMovie.id)
    const postMovies = () =>{   
         if(yaEstaAgregada === true){
             alert("la pelicula ya esta añadida a favoritos")
         }else{
             axios.post(urlFavorites, detailMovie)
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
     }
    React.useEffect(() => {
         axios.get(getVideo(apiKey, detailMovie.id))
             .then(response => {

                 setKeyVideo(response.data.results[0].key)
             })
         axios.get(urlFavorites)
         .then(response => {
             setMoviesAdd(response.data)
         })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
                    <button className="btn btn-primary btm-sm mx-2"onClick={() => navigate(route)}>Atras</button>
                    <button className='btn btn-danger t-10' onClick={deleteMovies}>Eliminar de favoritos</button> 
                </div>
            </DetailDiv>
        </DontainerDetail>
    );
};

export default Detail;