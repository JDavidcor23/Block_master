import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Nav = styled.div`
display: flex;
width: 100%;
background: black;
justify-content: space-around;
align-items: center;
/* padding: 10px 0; */
@media screen and (max-width: 700px) {
        flex-direction:column;
    } 
    `
export const Ul = styled.ul`
display: flex;
justify-content: space-between;
background: black;
align-items: center;
width: 50%;
@media screen and (max-width: 700px) {
    width: 100%;
    } 
`
export const Logo = styled.img`
width: 100px;
object-fit: contain;
@media screen and (max-width: 600px) {
        width: 60px;
    } 
`
export const LinkReact = styled(Link)`
text-decoration: none;
color: white;
background: black;
transition: 0.3s ease;
`

export const Li = styled.li`
list-style: none;
background: black;
text-align:center;
&:hover ${LinkReact} {
    color:#FED941;
    border-bottom: 2px solid #FED941;
}
@media screen and (max-width: 600px) {
        margin: 0 10px;
    } 
`
export const LinkBuscar = styled(Link)`
width: 100px;
background: red;
`
export const From = styled.form`
width: 40%;
display: flex;
background: black;
position: relative;
padding: 20px 0;
@media screen and (max-width: 700px) {
    width: 80%;
    } 
`
export const InputSearch = styled.input`
    width: 80%;
    outline: none;
    background: white;
    height: 32px;
    border-radius: 10px;
    padding: 0 0 0 10px;
`
export const ButtonSearch = styled.button`
    width: 20%;
    position: absolute;
    background: rgba(254, 217, 65, 1);
    height: 30px;
    top: 21px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
    right: 10px;

`
export const ImgSearch = styled.img`
    height: 90%;
    margin: 2px 0 0 0;
`
