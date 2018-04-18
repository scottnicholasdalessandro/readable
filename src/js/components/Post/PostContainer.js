import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {fetchPost} from '../../actions';
import Post from './Post';
import PropTypes from 'prop-types';
import {fetchPosts} from '../../actions/index';
import {connect} from 'react-redux';

class PostContainer extends Component {
  
  // componentDidMount() {    
  //   this.props.dispatch(fetchPosts()); // I wish I could find a way to not have to call this...
  // }
  render() {
    const {id} = this.props.match.params;
    return (
      <Post post={this.props.posts[id]} editing={this.props.location.state ? this.props.location.state.editing : false} />
    );
  }
}



const mapStateToProps = (state, ownProps) => {  
  return {    
    ...ownProps,
    posts: state.posts    
  };
};

export default connect(mapStateToProps)(withRouter(PostContainer));
