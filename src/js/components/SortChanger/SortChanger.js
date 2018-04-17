import React from 'react';
import PropTypes from 'prop-types';

const SortChanger = props => (
  <div>
    <span>Sort:</span>
    <select onChange={props.sortChange}>
      <option value={'HIGHEST_SCORE'}>Highest Score</option>
      <option value={'LOWEST_SCORE'}>Lowest Score</option>
      <option value={'NEWEST'}>Newest</option>
      <option value={'OLDEST'}>Oldest</option>
    </select>
  </div>
);

export default SortChanger;
