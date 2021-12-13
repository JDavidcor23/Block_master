import styled from "styled-components";
import { Link } from "react-router-dom";
export const ContainerRegister = styled.div`
position: absolute;
width: 100%;
top: 0;
display: flex;
justify-content: center;
height: 100%;
background: #0d3faa;
align-items: center;
`
export const FormRegister = styled.form`
width: 300px;
height: 70%;
color: white;
max-width: 350px;
margin: 0 auto;
display: flex;
justify-content: center;
padding:20px;
background: black;
flex-direction: column;
`
export const RegisterIput = styled.input`
margin: 10px 0;
height: 30px;
padding: 5px;
font-size:1.2rem;
font-family: 'Montserrat', sans-serif;
font-weight:bold;
`
export const H2Register = styled.h2`
font-size:2rem;
margin: 0 0 20px 0;
font-family: 'Montserrat', sans-serif;
font-weight: bold;
color: white;
`
export const ButtonRegister = styled.button`
    font-size: 1.5rem;
    margin: 20px 0 10px 0;
    cursor: pointer;
    background: #fed941;
    font-family: 'Montserrat',sans-serif;
    padding: 5px;
`
export const LinkLogin= styled(Link)`
color: #fed941;
`
export const LinkButton = styled(Link)`
text-decoration:none;
`