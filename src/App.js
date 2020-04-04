import React, { Component } from 'react';
import TopBar from './TopBar/TopBar';
import SideBarFilters from './SideBarFilters/SideBarFilters';
import SideBarNews from './SideBarNews/SideBarNews';
import MovieList from './MovieList/MovieList';
import { fetchTopMovies, fetchBestMovies } from './fetcher';
import './main.scss';

class App extends Component {
  state = {
    topMovie: [],
    bestMovie: [],
  };

  async componentDidMount() {
    const resTopMovie = await fetchTopMovies();
    const resBestMovie = await fetchBestMovies();
    console.log('nowe', resTopMovie);

    this.setState({
      topMovie: resTopMovie.data.results,
      bestMovie: resBestMovie.data.results,
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <>
        <TopBar />
        <SideBarFilters />
        <MovieList
          topMovie={this.state.topMovie}
          bestMovie={this.state.bestMovie}
        />
        <SideBarNews />
      </>
    );
  }
}

export default App;
