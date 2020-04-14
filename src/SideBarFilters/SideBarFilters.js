import React, { Component } from 'react';
import * as fetcher from '../fetcher';
import './SideBarFilters.scss';
import FiltersList from './FiltersList/FiltersList';

class SideBarFilters extends Component {
  state = {
    genres: [],
    languages: [],
  };

  async componentDidMount() {
    const resGenre = await fetcher.fetchGenre();
    const resLanguage = await fetcher.fetchLanguages();

    const languages = resLanguage.data.map((language) => {
      return {
        id: language.iso_639_1,
        name: language.english_name,
      };
    });

    this.setState({
      genres: resGenre.data.genres,
      languages,
    });
  }

  render() {
    return (
      <div className="sideBarFilters">
        <FiltersList
          filterType="activeGeners"
          heading="Genre"
          filters={this.state.genres}
          activeFilters={this.props.activeGeners}
          handelFilter={this.props.handelFilter}
        />

        <FiltersList
          filterType="activeLanguages"
          heading="Language"
          filters={this.state.languages}
          activeFilters={this.props.activeLanguages}
          handelFilter={this.props.handelFilter}
        />
      </div>
    );
  }
}

export default SideBarFilters;
