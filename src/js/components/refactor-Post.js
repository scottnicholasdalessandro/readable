import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';
import Posts from './Posts';


class Post extends Component {
  componentDidMount(prevProps) {
    fetchPost(this.props.match.params.id)(this.props.dispatch);
  }
  render() {
    const post = this.props.post;
    return (
      <Posts post={post} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post
  };
};

export default connect(mapStateToProps)(Post);
