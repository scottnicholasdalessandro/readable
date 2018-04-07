import React from 'react';
import {connect} from 'react-redux';
import {upDownUpdate } from '../actions/index';

const UpDown = props => {
  return (
    <div>
      <button onClick={() => props.dispatch(upDownUpdate(props.id, 'upVote'))} className="material-icons md-18">thumb_up</button>
      <button onClick={() => props.dispatch(upDownUpdate(props.id, 'downVote'))} className="material-icons md-18">thumb_down</button>
      <span>{props.score}</span>
    </div>
  );
};

export default connect()(UpDown);

