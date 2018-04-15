import React, {Component} from 'react';

class Comment extends Component {
  render() {
    const {comment} = this.props;
    return (
      <div key={comment.id}>
        <span> Author: {comment.author}</span>
        <span> VoteScore: {comment.voteScore}</span>
        <p> Body: {comment.body} </p>
      </div>
    );
  }
}

export default Comment;
