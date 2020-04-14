import React from 'react';
import Scroll from '../../Scroll/Scroll';
import './FiltersList.scss';

const FiltersList = (props) => {
  return (
    <div className="filters-list">
      <h2 className="filters-list__heading">{props.heading}</h2>
      <Scroll>
        <ul className="list">
          {props.filters.map((filter) => {
            return (
              <li key={filter.id} className="list__item">
                <label className="label">
                  <input
                    type="checkbox"
                    checked={props.activeFilters.includes(filter.id)}
                    onChange={() =>
                      props.handelFilter(filter.id, props.filterType)
                    }
                    className="input"
                  />
                  <span class="checkmark" />
                  {filter.name}
                </label>
              </li>
            );
          })}
        </ul>
      </Scroll>
    </div>
  );
};

export default FiltersList;
