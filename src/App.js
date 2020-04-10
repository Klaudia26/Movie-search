import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopBar from './TopBar/TopBar';
import SideBarFilters from './SideBarFilters/SideBarFilters';
import SideBarNews from './SideBarNews/SideBarNews';
import MainPage from './MovieViews/MainPage';
import MoviePage from './MovieViews/MoviePage';
import TvShowsPage from './MovieViews/TvShowsPage';
import Scroll from './Scroll/Scroll';
import WatchlistPage from './MovieViews/WatchlistPage';
import './main.scss';
import SignUp from './SignUp/SignUp';

class App extends Component {
  state = {
    movieWatchList: [],
    keyword: '',
    activeFilters: [],
  };

  handelFilter = (filterId) => {
    const { activeFilters } = this.state;
    // if (activeFilters.includes(filterId)) {
    if (activeFilters.some((filter) => filter === filterId)) {
      const filters = activeFilters.filter((filter) => filter !== filterId);

      this.setState({
        activeFilters: filters,
      });
      return;
    }
    this.setState({
      activeFilters: activeFilters.concat(filterId),
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addMovieToWatchMovie = (movie) => {
    this.setState({
      movieWatchList: this.state.movieWatchList.concat(movie),
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
            <SideBarFilters
              handelFilter={this.handelFilter}
              activeFilters={this.state.activeFilters}
            />
            <Route
              exact
              path="/"
              render={() => (
                <Scroll>
                  <MainPage
                    keyword={this.state.keyword}
                    addMovieToWatchMovie={this.addMovieToWatchMovie}
                    activeFilters={this.state.activeFilters}
                  />
                </Scroll>
              )}
            />
            <Route
              path="/movies"
              render={() => (
                <Scroll>
                  <MoviePage
                    keyword={this.state.keyword}
                    addMovieToWatchMovie={this.addMovieToWatchMovie}
                  />
                </Scroll>
              )}
            />
            <Route
              path="/tvshows"
              render={() => (
                <Scroll>
                  <TvShowsPage
                    keyword={this.state.keyword}
                    addMovieToWatchMovie={this.addMovieToWatchMovie}
                  />
                </Scroll>
              )}
            />
            <Route
              path="/watchlist"
              render={() => (
                <Scroll>
                  <WatchlistPage
                    keyword={this.state.keyword}
                    movieWatchList={this.state.movieWatchList}
                  />
                </Scroll>
              )}
            />

            <Route
              path="/signup"
              render={() => (
                <Scroll>
                  <SignUp />
                </Scroll>
              )}
            />
          </>
        </Router>
        <Scroll>
          <SideBarNews />
        </Scroll>
      </>
    );
  }
}

export default App;
