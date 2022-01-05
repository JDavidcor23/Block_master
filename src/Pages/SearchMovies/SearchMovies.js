import React, { Component } from 'react';
import SearchedMovies from '../../Containers/SearchedMovies/SearchedMovies';
import {DivBackgroud}  from './StyledSearchMovies.js'
import Loader from '../../Components/Loader/Loader';

export default class SearchMovies extends Component {
  render() {
    return (
        <DivBackgroud>
            <Loader/>
            <SearchedMovies/> 
        </DivBackgroud>
    )
  }
}