import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {fetchPost} from '../../actions';
import Post from './Post';

import {connect} from 'react-redux';

class PostContainer extends Component {
  componentDidMount() {    
    const {id} = this.props.match.params;
    this.props.dispatch(fetchPost(id));
  }
  render() {    
    return (
      
      <Post post={this.props.post} />
        
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post
  };
};

export default connect(mapStateToProps)(withRouter(PostContainer));
