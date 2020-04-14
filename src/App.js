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
    activeGeners: [],
    activeLanguages: [],
  };

  handelFilter = (filterId, filterType) => {
    // filterType = activeGeners || activeLanguages

    // delete if exist
    if (this.state[filterType].some((filter) => filter === filterId)) {
      const filters = this.state[filterType].filter(
        (filter) => filter !== filterId
      );

      this.setState({
        [filterType]: filters,
      });
    } else {
      // otherwise add
      this.setState({
        [filterType]: this.state[filterType].concat(filterId),
      });
    }
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
              activeGeners={this.state.activeGeners}
              activeLanguages={this.state.activeLanguages}
            />
            <Route
              exact
              path="/"
              render={() => (
                <MainPage
                  keyword={this.state.keyword}
                  addMovieToWatchMovie={this.addMovieToWatchMovie}
                  activeGeners={this.state.activeGeners}
                  activeLanguages={this.state.activeLanguages}
                />
              )}
            />
            <Route
              path="/movies"
              render={() => (
                <Scroll>
                  <MoviePage
                    keyword={this.state.keyword}
                    addMovieToWatchMovie={this.addMovieToWatchMovie}
                    activeGeners={this.state.activeGeners}
                    activeLanguages={this.state.activeLanguages}
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

            <Route path="/signup" render={() => <SignUp />} />
          </>
        </Router>
        <SideBarNews />
      </>
    );
  }
}

export default App;
