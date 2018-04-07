import React from 'react';
import {Link} from 'react-router-dom';
import UpDown from './UpDown';

function Posts(props) {  
  return (
    
    <div className="border border-primary rounded">
      <Link to={`/${props.post.category}/${props.post.id}`}><h2> {props.post.title} </h2></Link>
      <span> Author: {props.post.author}</span>
      <span> Comments: {props.post.commentCount}</span>
      <span> Score: {props.post.voteScore}</span>
      <div className="d-flex justify-content-end">
        <UpDown id={props.post.id} score ={props.post.voteScore} />     
        <i className='material-icons md-18'>mode_edit</i>
        <i className='material-icons md-18'>remove_circle_outline</i>
      </div>
    </div>
    
  );
}

export default Posts;


// <i className='material-icons md-18'>thumb_up</i>
// <i className='material-icons md-18'>thumb_down</i>