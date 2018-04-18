import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchCommentsAPI} from '../../actions/index';
import Comment from '../Comment/Comment';
import CommentEditForm from '../Comment/CommentForm';

class Comments extends Component {
  // I refactored my post reducer and added it to the posts reducer, I no longer
  // need to use componentWillUpdate, this felt unecessary, was it?
  
  // componentWillUpdate(prevProps) {    
  //   // NOTES: First time using this lifecycle method. I wonder if there is a better structure so I don't have to resort to using this.
  //   // Is this a bad practice?
  //   debugger;
  //   if (this.props.post.commentCount !== prevProps.comments.length) {
  //     this.props.dispatch(fetchCommentsAPI(this.props.post.id));
  //   }
  // }

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
          <hr/>
          <CommentEditForm parentIdPost={this.props.post.id} comment dispatch={this.props.dispatch}></CommentEditForm> 
      </div>
    );
  }
}

//  

// Comments.propTypes = {
//   post: PropTypes.object,
//   comments: PropTypes.array
// };

function mapStateToProps(state, ownProps) {  
  return {
    comments: Object.keys(state.comments).map(comment => state.comments[comment]),
    posts: state.posts
  };
}

export default connect(mapStateToProps)(Comments);
