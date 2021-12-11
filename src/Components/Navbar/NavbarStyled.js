import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Nav = styled.div`
display: flex;
width: 100%;
background: #0F0E17;
justify-content: space-around;
align-items: center;
`
export const Ul = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
width: 50%;
`
export const Logo = styled.img`
width: 100px;
object-fit: contain;
`
export const LinkReact = styled(Link)`
text-decoration: none;
color: white;
transition: 0.3s ease;
`
export const Li = styled.li`
list-style: none;
&:hover ${LinkReact} {
    color:#FED941;
    border-bottom: 2px solid #FED941;
}
`
export const LinkBuscar = styled(Link)`
width: 100px;
background: red;
`
export const From = styled.form`
width: 40%;
display: flex;
position: relative;
`
export const InputSearch = styled.input`
    width: 80%;
    outline: none;
    height: 32px;
    border-radius: 10px;
    padding: 0 0 0 10px;
`
export const ButtonSearch = styled.button`
    width: 20%;
    position: absolute;
    background: rgba(254, 217, 65, 1);
    height: 30px;
    top: 1px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
    right: 10px;

`
export const ImgSearch = styled.img`
    height: 90%;
    margin: 2px 0 0 0;
`
