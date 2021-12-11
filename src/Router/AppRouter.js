import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SearchMovies from '../Pages/SearchMovies/SearchMovies'


function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searchmovies/:movie" element={<SearchMovies/>}/>
      </Routes>
    
  );
}

export default AppRouter;
