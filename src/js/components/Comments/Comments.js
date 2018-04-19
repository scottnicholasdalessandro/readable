import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchCommentsAPI} from '../../actions/index';
import Comment from '../Comment/Comment';
import CommentEditForm from '../Comment/CommentForm';

class Comments extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCommentsAPI(this.props.post.id));
  }
  render() {
    return (
      <div className="border border-primary rounded">
        {this.props.comments.length > 0 &&
          this.props.comments.map(comment => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        <hr />
        <CommentEditForm parentIdPost={this.props.post.id} comment />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    comments: Object.keys(state.comments).map(comment => state.comments[comment]),
    posts: state.posts
  };
}

export default connect(mapStateToProps)(Comments);
