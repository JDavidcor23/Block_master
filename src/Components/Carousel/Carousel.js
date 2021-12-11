import React from 'react';

const Carousel = () => {
    const img = "https://image.tmdb.org/t/p/original/"
    const [backgroutPath, setBackgroutPath] = React.useState([])

    
    const urlData = `https://api.themoviedb.org/3/discover/movie/?api_key=35cd12a9c692b8ebb4c0125b6c31d832&include_video=true&page=1`
    const getData= async()=>{
         let arryPoster = []
         const resp = await fetch(urlData)
         const data = await resp.json()
         const results = await data.results
        for(let i=0; i< 4; i++){
            arryPoster.push(results[i])
        }
         return arryPoster
    }
    React.useEffect(() => {
        getData()
        .then(value => setBackgroutPath(value))

    }, [])
    return (
        <div className='slides'>
        <input type="radio" name='radio-btn' id='radio1'/>
        <input type="radio" name='radio-btn' id='radio2'/>
        <input type="radio" name='radio-btn' id='radio3'/>
        <input type="radio" name='radio-btn' id='radio4'/>
         {
            (backgroutPath.map(backgrout =>(
            <div className='slide-firts'>
                <img src={img + backgrout.backdrop_path} alt=''/>
            </div>
            )))
        } 
    </div>
    );
};

export default Carousel;