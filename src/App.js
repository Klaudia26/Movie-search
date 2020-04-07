import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopBar from './TopBar/TopBar';
import SideBarFilters from './SideBarFilters/SideBarFilters';
import SideBarNews from './SideBarNews/SideBarNews';
import * as fetcher from './fetcher';
import './main.scss';
import MainPage from './MovieViews/MainPage';
import MoviePage from './MovieViews/MoviePage';
import TvShowsPage from './MovieViews/TvShowsPage';
import Scroll from './Scroll/Scroll';

class App extends Component {
  state = {
    upcomingtMovie: [],
    tvShows: [],
    keyword: '',
  };

  async componentDidMount() {
    const resupcomingtMovie = await fetcher.fetchUpcomingMovies();

    this.setState({
      upcomingtMovie: resupcomingtMovie.data.results,
    });
  }

  // async fetchTvShows(keyword) {
  //   const resSearchMovie = await fetcher.fetchSearchMovies(keyword);

  //   this.setState({
  //     tvShows: resSearchMovie.data.results,
  //   });
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Router>
          <>
            <TopBar
              handleChange={this.handleChange}
              keyword={this.state.keyword}
            />
            <SideBarFilters />
            <Route
              exact
              path="/"
              render={() => (
                <Scroll>
                  <MainPage keyword={this.state.keyword} />
                </Scroll>
              )}
            />

            <Route
              path="/movies"
              render={() => (
                <Scroll>
                  <MoviePage keyword={this.state.keyword} />
                </Scroll>
              )}
            />
            <Route
              path="/tvshows"
              render={() => (
                <Scroll>
                  <TvShowsPage keyword={this.state.keyword} />
                </Scroll>
              )}
            />
          </>
        </Router>
        <Scroll>
          <SideBarNews movies={this.state.upcomingtMovie} />
        </Scroll>
      </>
    );
  }
}

export default App;
