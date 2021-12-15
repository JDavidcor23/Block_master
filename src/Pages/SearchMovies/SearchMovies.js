import React, { Component } from 'react';
import SearchedMovies from '../../Containers/SearchedMovies/SearchedMovies';
import {DivBackgroud}  from './StyledSearchMovies.js'

export default class SearchMovies extends Component {
  render() {
    return (
        <DivBackgroud>
            <SearchedMovies/> 
        </DivBackgroud>
    )
  }
}