import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteCommentAPI} from '../../actions/index';
import CommentEditForm from './CommentForm';
import UpDown from '../UpDown';
import PropTypes from 'prop-types';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.switchToEdit = this.switchToEdit.bind(this);
  }

  state = {
    editing: false
  };

  switchToEdit() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    const {comment} = this.props;
    const {editing} = this.state;


    if(editing) {
      return (
        <CommentEditForm comment={comment} switchToEdit={this.switchToEdit} editing></CommentEditForm>
      );
    }
    return (
      <div>
        <span> Author: {comment.author}</span>
        <span> VoteScore: {comment.voteScore}</span>
        <p> Body: {comment.body} </p>
        <UpDown id={comment.id} score={comment.voteScore} scoreType='comment'></UpDown>
        <button onClick={() => this.props.dispatch(deleteCommentAPI(comment.id))}>
          <i className="material-icons md-18">remove_circle_outline</i>
        </button>
        <button onClick={() => this.switchToEdit()}>
          <i className="material-icons md-18">mode_edit</i>
        </button>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object
};

function mapStateToProps(state, ownProps) {  
  debugger;
  return {    
    post: state.post,
    ...ownProps    
  };
}

export default connect(mapStateToProps)(Comment);
