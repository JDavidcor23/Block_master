
export const apiKey = `35cd12a9c692b8ebb4c0125b6c31d832`

export const searcUrl =(apiKey, searh)=>{
    return `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&include_video=true&query=${searh}`
}
export const getMovie =(apiKey, id)=>{
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
}
export const pathImg = "https://image.tmdb.org/t/p/original/"

export const getAllMovies= (apiKey) =>{
    return `https://api.themoviedb.org/3/discover/movie/?api_key=${apiKey}&include_video=true&page=1`
}
