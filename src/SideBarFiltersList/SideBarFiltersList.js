import React from 'react';

const SideBarFiltersList = (props) => {
  return (
    <div className="SideBarFiltersList">
      <h2 className="sideBarFilters__heading">{props.heading}</h2>
      <ul>
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
    </div>
  );
};

export default SideBarFiltersList;
