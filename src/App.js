import React, { Component } from 'react';
import TopBar from './TopBar/TopBar';
import SideBarFilters from './SideBarFilters/SideBarFilters';
import SideBarNews from './SideBarNews/SideBarNews';
import MovieList from './MovieList/MovieList';
import './main.scss';

class App extends Component {
  render() {
    return (
      <>
        <TopBar />
        <SideBarFilters />
        <MovieList />
        <SideBarNews />
      </>
    );
  }
}

export default App;
