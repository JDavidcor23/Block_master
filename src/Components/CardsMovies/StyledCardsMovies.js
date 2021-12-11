import styled from "styled-components";


export const ContainerMovies = styled.div`
width: 90%;
flex-wrap: wrap;
display: flex;
justify-content: space-between;
margin: 0 auto;
position:relative;
`
export const CardsPeliculas = styled.div`
margin-bottom: 10px;
`

export const Poster = styled.img`
width: 200px;
`

export const DivCalificacion= styled.div`
position: absolute;
display: flex;

`
export const CalificationContainer = styled.img`
width: 100px;
position:relative;
display: flex;
`
export const Estrella = styled.img`
position: absolute;
top:20%;
width: 30px;
z-index:1;
`
export const Calificacion = styled.p`
position: absolute;
    font-size: 1.2rem;
    color: white;
    top: 35%;
    left: 50%;
`