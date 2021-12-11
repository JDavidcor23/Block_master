import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SearchMovies from '../Pages/SearchMovies/SearchMovies'
import Error404 from '../Pages/Error404/Error404'


function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searchmovies/:movie" element={<SearchMovies/>}/>
        <Route path="/error" element={<Error404/>}/>
      </Routes>
    
  );
}

export default AppRouter;
