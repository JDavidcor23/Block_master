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
export const ThisLoader = styled.div`
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
     border-color: #FED941 transparent #FED941 transparent;
     animation: ${AnimationLoader} 1.2s linear infinite;
   }
   `