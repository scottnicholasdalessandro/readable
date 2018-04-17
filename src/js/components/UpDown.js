import React from 'react';
import {connect} from 'react-redux';
import {upDownUpdate} from '../actions/index';
import PropTypes from 'prop-types';

const UpDown = props => {
  return (
    <div>
      <button
        onClick={() => props.dispatch(upDownUpdate(props.id, 'upVote', props.scoreType))}
        className="material-icons md-18"
      >
        thumb_up
      </button>
      <button
        onClick={() => props.dispatch(upDownUpdate(props.id, 'downVote', props.scoreType))}
        className="material-icons md-18"
      >
        thumb_down
      </button>
      <span>{props.score}</span>
    </div>
  );
};

UpDown.propTypes = {
  id: PropTypes.string.isRequired,
  scoreType: PropTypes.string.isRequired
};

export default connect()(UpDown);
