 import React from 'react';
 import { pathImg  } from '../../helpers/urls';
 const Carousel = () => {
     return (
<div style={{background:"#0F0E17"}}id="carousel1" className="carousel slide carousel-fade" data-ride="carousel">
             <div className="carousel-inner">
                <div className="carousel-item active">
                    <img style={{width:"100%", height: "50vh", objectFit:"contain"}}src={pathImg + "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"} alt="Spider-Man: No Way Home"/>
                </div>
                <div className="carousel-item">
                    <img style={{width:"100%", height: "50vh", objectFit:"contain"}} src={pathImg + "/o76ZDm8PS9791XiuieNB93UZcRV.jpg"} alt="Resident Evil: Welcome to Raccoon City"/>
                </div>
                <div className="carousel-item">
                    <img style={{width:"100%", height: "50vh", objectFit:"contain"}}  src={pathImg + "/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg"} alt="The Matrix Resurrections"/>
                </div>
                <div className="carousel-item">
                    <img style={{width:"100%", height: "50vh", objectFit:"contain"}} src={pathImg + "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg"} alt="Encanto"/>
                </div>
            </div>  
            <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next" style={{background: "none"}}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <ol className="carousel-indicators">
                <li data-target="#carousel1" data-slide-to="0" className="active"></li>
                <li data-target="#carousel1" data-slide-to="1"></li>
                <li data-target="#carousel1" data-slide-to="2"></li>
            </ol>
            
        </div>
     );
 };

 export default Carousel;