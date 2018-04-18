import React, {Component} from 'react';
import PostEditForm from './PostEditForm';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Comments from '../Comments/Comments';
import {distanceInWordsToNow} from 'date-fns';
import {deletePostAPI} from '../../actions/index';
import {connect} from 'react-redux';

class Post extends Component {
  constructor(props) {
    super(props);
    this.editToggle = this.editToggle.bind(this);
  }
  state = {
    editing: this.props.location.state ? this.props.location.state.editing : false
  };

  editToggle() {
    this.setState({editing: !this.state.editing});
  }

  deletePost() {
    this.props.dispatch(deletePostAPI(this.props.post.id));
    window.location.href = `/`;
  }

  render() {
    debugger;
    const {editing} = this.state;
    if (editing || !this.props.post) {
      
      return <PostEditForm editToggle={this.editToggle} editing={this.state.editing} post={this.props.post || {}}></PostEditForm>;
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
          <span>Score: {this.props.post.voteScore}</span>
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


function mapStateToProps(state, ownProps){
  debugger;
  return {
    posts: state.post,    
    ...ownProps
  };
}



export default connect(mapStateToProps)(withRouter(Post));
