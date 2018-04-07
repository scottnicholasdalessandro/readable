import React from 'react';
import PostsContainer from '../components/Posts/PostsContainer.js';

const PostsViewer = props => {
  const {category} = props.category;

  return <PostsContainer category={category || 'All'} />;
};

export default PostsViewer;
