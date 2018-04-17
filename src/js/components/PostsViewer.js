import React from 'react';
import PostsContainer from '../components/Posts/PostsContainer.js';
import PropTypes from 'prop-types';

const PostsViewer = props => {
  const {category} = props.category;

  return <PostsContainer sortValue="NEWEST" category={category || 'All'} />;
};

PostsViewer.propTypes = {
  category: PropTypes.object.isRequired
};

export default PostsViewer;
