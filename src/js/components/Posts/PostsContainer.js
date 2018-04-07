import React, {Component} from 'react';
import PostsList from './PostsList';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../../actions';
// import {withRouter} from 'react-router';

class PostsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.category;
  return {
    posts: Object.keys(state.posts)
      // if either returns true, the id is added to the filter array, then map over the filter array to add object values
      .filter(postID => (category === 'All' ? state.posts[postID] : state.posts[postID].category === category))
      .map(post => state.posts[post])    
  };
};

export default connect(mapStateToProps)(PostsContainer);
