import React, {Component} from 'react';
import PostEditForm from './PostEditForm';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Comments from '../Comments/Comments';
import {distanceInWordsToNow} from 'date-fns';
import {deletePostAPI} from '../../actions/index';
import {connect} from 'react-redux';
import UpDown from '../UpDown';

class Post extends Component {
  constructor(props) {
    super(props)
    this.editToggle = this.editToggle.bind(this);
  }
  state = {
    editing: false
  };

  editToggle() {
    this.setState({editing: !this.state.editing});
  }

  deletePost() {
    this.props.dispatch(deletePostAPI(this.props.post.id)); // is it better to add this to my post container and pass it down? without this action, Post is mostly a presentational component
    window.location.href = `/`;
  }

  render() {
    debugger;
    const {editing} = this.state;
    if (editing || !this.props.post) {
      return <PostEditForm editToggle={this.editToggle} editing={this.state.editing} post={this.props.post || {}} />;
    }
    return (
      <div>
        <div>
          <h2>Title: {this.props.post.title}</h2>
          <span>Author: {this.props.post.author}</span>
          <br />
          <span>Posted: {distanceInWordsToNow(this.props.post.timestamp)} ago </span>
          <br />
          <span>Comments: {this.props.post.commentCount}</span>
          <br />
          
          <span>Score: {this.props.post.voteScore}</span> <span><UpDown id={this.props.post.id} scoreType='post' score={this.props.post.voteScore}></UpDown></span>
          <br />
          <p>Body: {this.props.post.body}</p>
          
          <button type="button" className="btn btn-primary" onClick={() => this.editToggle()}>
            Make Edit
          </button>
          <button type="button" className="btn btn-primary" onClick={e => this.deletePost(e)}>
            Delete Post
          </button>
        </div>
        <hr />
        <Comments post={this.props.post} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    ...ownProps
  };
}

export default connect(mapStateToProps)(withRouter(Post));
