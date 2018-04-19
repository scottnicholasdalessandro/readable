import React, {Component} from 'react';
import PostsList from './PostsList';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts, sortValues} from '../../actions';
import SortChanger from '../SortChanger/SortChanger';
import PropTypes from 'prop-types';

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.sortChange = this.sortChange.bind(this);
  }
  
  sortChange(e) {
    this.props.dispatch(sortValues(e.target.value));    
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    return (
      <div>
        <SortChanger sortChange={this.sortChange} />
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}

PostsContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired
  
};

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.category;
  
  function sortChangeFunctions(sorter) {
    switch (sorter) {
      case 'NEWEST':
        return function(a, b) {
          return new Date(b.timestamp) - new Date(a.timestamp);
        };
      case 'OLDEST':
        return function(a, b) {
          return new Date(a.timestamp) - new Date(b.timestamp);
        };
      case 'HIGHEST_SCORE':
        return function(a, b) {
          return b.voteScore - a.voteScore;
        };
      case 'LOWEST_SCORE':
        return function(a, b) {
          return a.voteScore - b.voteScore;
        };
    }
  }
  
  const sortFunction = sortChangeFunctions(state.sortVals);

  return {
    posts: Object.keys(state.posts)
      .filter(postID => (category === 'All' ? state.posts[postID] : state.posts[postID].category === category))
      .map(post => state.posts[post])
      .sort(sortFunction),
    sortVals: sortFunction
    
  };
};

export default connect(mapStateToProps)(PostsContainer);
