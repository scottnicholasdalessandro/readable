import React from 'react';
import Post from '../Post';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const PostsList = ({posts}) => {
  {
    return posts.length > 0 && posts.map(post => <Post key={post.id} post={post} />);
  }
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsList;
