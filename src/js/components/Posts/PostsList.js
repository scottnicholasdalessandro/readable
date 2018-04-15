import React from 'react';
import Post from '../Post';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {fetchPosts} from '../../actions';

const PostsList = ({posts}) => {
  
  {
    return posts.length > 0 && posts.map(post => <Post key={post.id} post={post}/>);
  }
};



// const mapStateToProps = (state, ownProps) => {
//   const filter = ownProps.category;
//   return {
//     posts: Object.keys(state.posts)
//       .filter(post => (filter === 'all'
//         ? state.posts[post] :
//         state.posts[post].category === filter))
//       .map(post => state.posts[post])
//       .sort(sortBy(state.sorting.orderBy)),
//   };
// };



export default PostsList;
