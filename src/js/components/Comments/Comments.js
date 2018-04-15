import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCommentsAPI} from '../../actions/index';
import Comment from '../Comment/Comment';

class Comments extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidUpdate(prevProps) {

    // NOTES: First time using this lifecycle method. I wonder if there is a better structure so I don't have to resort to using this.
    // Is this a bad practice?
    
    if(this.props.post.id !== prevProps.post.id ) {
      this.props.dispatch(fetchCommentsAPI(this.props.post.id));
    }
  }
  render() {
    return (
      <div className="border border-primary rounded">
        
        {this.props.comments.length > 0 && this.props.comments.map(comment => {          
          return (

            <Comment comment={comment}></Comment>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state.comments);
  return {
    post: ownProps.post,
    comments: Object.keys(state.comments).map(comment => state.comments[comment])
  };
}

export default connect(mapStateToProps)(Comments);
