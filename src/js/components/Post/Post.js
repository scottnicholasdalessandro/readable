import React, {Component} from 'react';
import PostEditForm from './PostEditForm';
import Comments from '../Comments/Comments';
import {distanceInWordsToNow} from 'date-fns';

class Post extends Component {
  constructor(props) {
    super(props);    
    this.editToggle = this.editToggle.bind(this);
  }
  state = {
    editing: false
  };

  editToggle() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    const {editing} = this.state;
    if (editing || this.props.post === undefined) {    
      return <PostEditForm  editToggle={this.editToggle} editing={this.props.editing} post={this.props.post || {}}/>;
    }

    return (
      <div>
      <div>
       <h2>Title: {this.props.post.title}</h2>
       <span>Author: {this.props.post.author}</span>
       <br/>
       <span>Posted: {distanceInWordsToNow(this.props.post.timestamp)} ago f</span>
       
       <p>Body: {this.props.post.body}</p>
       <button type='button' className='btn btn-primary' onClick={() => this.editToggle()}>Make Edit</button>
     </div>
     <hr/>
     <Comments post={this.props.post}></Comments>
     
     </div>

    );
  }
}

export default Post;
