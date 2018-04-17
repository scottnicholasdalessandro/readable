import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {fetchPost} from '../../actions';
import Post from './Post';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

class PostContainer extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.dispatch(fetchPost(id));
  }
  render() {
    return (
      <Post post={this.props.post} editing={this.props.location.state ? this.props.location.state.editing : false} />
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    post: state.post
  };
};

export default connect(mapStateToProps)(withRouter(PostContainer));
