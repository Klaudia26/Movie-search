import React, { Component } from 'react';
import TopBar from './TopBar/TopBar';
import SideBarFilters from './SideBarFilters/SideBarFilters';
import SideBarNews from './SideBarNews/SideBarNews';
import MovieList from './MovieList/MovieList';
import { fetchTopMovies, fetchBestMovies, fetchSearchMovies } from './fetcher';
import './main.scss';

class App extends Component {
  state = {
    searchMovie: [],
    topMovie: [],
    bestMovie: [],
    keyword: '',
  };

  async componentDidMount() {
    const resTopMovie = await fetchTopMovies();
    const resBestMovie = await fetchBestMovies();

    this.setState({
      topMovie: resTopMovie.data.results,
      bestMovie: resBestMovie.data.results,
    });
  }

  async searchMovie(keyword) {
    const resSearchMovie = await fetchSearchMovies(keyword);

    this.setState({
      searchMovie: resSearchMovie.data.results,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.searchMovie(e.target.value);
  };

  render() {
    console.log('search', this.state.searchMovie);
    return (
      <>
        <TopBar handleChange={this.handleChange} keyword={this.state.keyword} />
        <SideBarFilters />
        <MovieList
          topMovie={this.state.topMovie}
          bestMovie={this.state.bestMovie}
          searchMovie={this.state.searchMovie}
        />
        <SideBarNews />
      </>
    );
  }
}

export default App;
