import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchCommentsAPI} from '../../actions/index';
import Comment from '../Comment/Comment';
import CommentEditForm from '../Comment/CommentForm';

class Comments extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate(prevProps) {    
    // NOTES: First time using this lifecycle method. I wonder if there is a better structure so I don't have to resort to using this.
    // Is this a bad practice?
    debugger;
    if (this.props.post.commentCount !== prevProps.comments.length) {
      this.props.dispatch(fetchCommentsAPI(this.props.post.id));
    }
  }
  render() {
    
    return (
      <div className="border border-primary rounded">
      <button className='btn btn-primary'>New Comment</button>
        {this.props.comments.length > 0 &&
          this.props.comments.map(comment => {
            return <Comment key={comment.id} comment={comment} />;
          })}
          <hr/>
        <CommentEditForm parentIdPost = {this.props.post.id} comment='' ></CommentEditForm>  
      </div>
    );
  }
}


Comments.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  console.log(state.comments);
  return {
    post: ownProps.post,
    comments: Object.keys(state.comments).map(comment => state.comments[comment])
  };
}

export default connect(mapStateToProps)(Comments);
