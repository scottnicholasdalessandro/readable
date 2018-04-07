import React from 'react';

function Post({post}) {
  return (
    <div>
      <h2>{post.title}</h2>
      <span>Author: {post.author}</span>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
