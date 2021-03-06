import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SearchMovies from '../Pages/SearchMovies/SearchMovies'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Detail from '../Pages/Detail/Detail'
import Favorites from '../Pages/Favorites/Favorites'
import TopRated from '../Pages/TopRated/TopRated'


function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Detail" element={<Detail/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Favorites" element={<Favorites/>}/>
        <Route path="/TopRated" element={<TopRated/>}/>
        <Route path="/searchmovies/:movie" element={<SearchMovies/>}/>
      </Routes>
    
  );
}

export default AppRouter;
