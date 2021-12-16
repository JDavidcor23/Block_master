 import React from 'react';
 import { pathImg  } from '../../helpers/urls';
 const Carousel = () => {
     return (
<div style={{background:"#0F0E17"}}id="carousel1" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img style={{width:"100%", height: "50vh", objectFit:"contain"}}src={pathImg + "/70nxSw3mFBsGmtkvcs91PbjerwD.jpg"} alt='Venom: Let There Be Carnage'/>
                    {/* <button>VER AHORA</button>
                    <button>AGREGAR A FAVORITAS</button> */}
                </div>
                <div className="carousel-item">
                    <img style={{width:"100%", height: "50vh", objectFit:"contain"}} src={pathImg + "/5uVhMGsps81CN0S4U9NF0Z4tytG.jpg"} alt='Red Notice'/>
                    {/* <button>VER AHORA</button>
                    <button>AGREGAR A FAVORITAS</button> */}
                </div>
                <div className="carousel-item">
                    <img style={{width:"100%", height: "50vh", objectFit:"contain"}}  src={pathImg + "/mFbS5TwN95BcSEfiztdchLgTQ0v.jpg"} alt="The Last Duel"/>
                    {/* <button>VER AHORA</button>
                    <button>AGREGAR A FAVORITAS</button> */}
                </div>
                <div className="carousel-item">
                    <img style={{width:"100%", height: "50vh", objectFit:"contain"}} src={pathImg + "/g2djzUqA6mFplzC03gDk0WSyg99.jpg"} alt="Encanto"/>
                    {/* <button>VER AHORA</button>
                    <button>AGREGAR A FAVORITAS</button> */}
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
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