import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SearchMovies from '../Pages/SearchMovies/SearchMovies'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Perfil from '../Pages/Perfil/Perfil'
import Detail from '../Pages/Detail/Detail'


function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
        <Route path="/Detail" element={<Detail/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/searchmovies/:movie" element={<SearchMovies/>}/>
      </Routes>
    
  );
}

export default AppRouter;
