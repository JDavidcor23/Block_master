import styled from "styled-components";
import { keyframes } from 'styled-components'

const containerLoader = keyframes`
 0% { opacity: 1;
    visibility: visible; }
 85% { opacity: 1;
    visibility: visible; }
 100% {  opacity: 0;
    visibility: hidden;}
`

const AnimationLoader = keyframes`
 0% { transform: rotate(0deg); }
 100% {  transform: rotate(360deg);
         visibility: hidden;}
`


export const ContainerLoader = styled.div`
width: 100%;
height: 100%;
display: flex;
/* align-items: center; */
justify-content: center;
background-color: #0f0e17;
position: absolute;
z-index: 3;
animation: ${containerLoader} 2.5s linear forwards;
}
`
export const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  &:after{
     content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${AnimationLoader} 1.2s linear infinite;
  
}
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
