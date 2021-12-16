import styled from "styled-components";
import {Link} from 'react-router-dom'

export const LinkCards= styled(Link)`
margin: 10px 10px;
`
export const ContainerMovies = styled.div`
width: 90%;
flex-wrap: wrap;
display: flex;
justify-content: space-between;
margin: 0 auto;
position:relative;
`
export const CardsPeliculas = styled.div`
margin: 0 auto;
cursor: pointer;
margin-bottom: 20px;
`

export const Poster = styled.img`
width: 200px;
`

export const DivCalificacion= styled.div`
position: absolute;
display: flex;
width: 100px;
height: 50px;
`
export const CalificationContainer = styled.img`
width: 100%;
position:;
display: flex;

`
export const Estrella = styled.img`
position: absolute; 
width: 30px;
top:20%;
z-index:1;
`
export const Calificacion = styled.p`
position: absolute;
font-size: 1.2rem;
top: 20%;
color: white;
left: 40%;
font-family: 'Montserrat', sans-serif;
font-Weight: 400;
`
