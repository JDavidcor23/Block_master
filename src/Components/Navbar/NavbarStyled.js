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