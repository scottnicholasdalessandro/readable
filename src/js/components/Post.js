import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import UpDown from './UpDown';
import {deletePostAPI} from './../actions';
import PropTypes from 'prop-types';
import Post from './Post/Post';

const Posts = props => {
  return (
    <div className="border border-primary rounded">
      <Link to={`/${props.post.category}/${props.post.id}`}>
        <h2> {props.post.title} </h2>
      </Link>
      <span> Author: {props.post.author}</span>
      <span> Comments: {props.post.commentCount}</span>
      <span> Score: {props.post.voteScore}</span>
      <div className="d-flex justify-content-end">
        <UpDown id={props.post.id} score={props.post.voteScore} scoreType='post' />
        <Link
          to={{
            pathname: `/${props.post.category}/${props.post.id}`,
            state: {editing: true}
          }}
        >
          <i className="material-icons md-18">mode_edit</i>
        </Link>
        <button onClick={() => props.dispatch(deletePostAPI(props.post.id))}>
          <i className="material-icons md-18">remove_circle_outline</i>
        </button>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default connect()(Posts);
