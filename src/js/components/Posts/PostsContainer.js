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
    posts: state.posts
      .filter(post => {
        if(category === 'All') {
          return post;
        } else if(post.category === category) {
          return post;
        }
      })
  };
};

export default connect(mapStateToProps)(PostsContainer);
