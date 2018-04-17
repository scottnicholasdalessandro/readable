import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createCommentAPI, updateCommentAPI} from '../../actions/index';

class CommentEditForm extends Component {
  debugger;
  componentDidUpdate(prevProps) {
    if(this.props.parentIdPost !== prevProps.parentIdPost) {
      this.setState({
        parentId: this.props.parentIdPost
      });   
    }
  }


/* this.props.parentIdPost is not updating properly, the initial render is
undefined */
// can possible use withRouter and take the url.

  state = {
    
    id: this.props.comment.id || uuid(),
    timestamp: this.props.comment.timestamp || Date.now(),
    body: this.props.comment.body || '',
    author: this.props.comment.author || '',
    parentId: this.props.comment.parentId || this.props.parentIdPost,
    editing: this.props.editing || false
    
  };

  clearFormInfo = () => {
    this.setState({
      timestamp: Date.now(),
      body: '',
      title: '',
      parentId: '',
      author: '',
      id: uuid(),
      editing: false
    });
  };
  
  handleOnChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    const comment = {
      ...this.state
    };
        
    if(this.state.editing) {
      this.props.dispatch(updateCommentAPI(comment));
      this.props.switchToEdit();
      
    } else {
      delete comment.editing;
      this.props.dispatch(createCommentAPI(comment));
      this.clearFormInfo();
    }    
  };
  render() {    
    const {editing} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h3>{`${editing ? 'Edit': 'Create'} Comment`}</h3>         
          <label>
            Author:
            <input
              type="text"
              onChange={this.handleOnChange}
              value={this.state.author}
              placeholder="Enter Author"
              required
              id="author"
              name="author"
            />
          </label>
          <label>

          </label>
          <label>
            Body:
            <textarea
              type="text"
              onChange={this.handleOnChange}
              value={this.state.body}
              placeholder="Enter Body"
              required
              id="body"
              name="body"
            />
          </label>
        </div>        
      <button type='submit'>{`${editing ? 'Edit': 'Create'} Comment`}</button>
      </form>
    );
  }
}


export default connect()(CommentEditForm);