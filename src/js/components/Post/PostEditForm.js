import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPostAPI, updatePostAPI} from '../../actions/index';
import {withRouter} from 'react-router';
class PostEditForm extends Component {
  state = {
    timestamp: this.props.post.timestamp || Date.now(),
    editing: this.props.editing || false,
    body: this.props.post.body || '',
    title: this.props.post.title || '',
    category: this.props.post.category || '',
    author: this.props.post.author || '',
    id: this.props.post.id || uuid()
  };

  clearFormInfo = () => {
    this.setState({
      timestamp: Date.now(),
      body: '',
      title: '',
      category: '',
      author: '',
      id: uuid(),
      editing: false
    });
  };

  handleOnChange = e => {
    this.setState({[e.target.id]: e.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    const post = {
      ...this.state
    };
    if (this.state.editing) {
      this.props.dispatch(updatePostAPI(post));
      this.setState({
        editing: false
      });
      this.props.editToggle();
    } else {
      this.props.dispatch(createPostAPI(post));
      this.clearFormInfo();
      this.props.history.push(`/${post.category}/${post.id}`);
    }
  };
  render() {
    const {editing} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h2>{`${editing ? 'Edit' : 'Create'}  Post`}</h2>
          <label htmlFor="text">
            Title:
            <input
              type="text"
              onChange={this.handleOnChange}
              value={this.state.title}
              placeholder="Enter Title"
              required
              id="title"
              name="title"
            />
          </label>
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
          <label />
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
        <label>
          Category:
          <select id="category" onChange={this.handleOnChange} value={this.state.value} required>
            <option value="Select Category">Select Category</option>
            <option value="react">react</option>
            <option value="redux">redux</option>
            <option value="udacity">udacity</option>
          </select>
        </label>
        <button type="submit">{`${editing ? 'Edit' : 'Create'} Post `} </button>
      </form>
    );
  }
}

// connecting so I can dispatch actions...is it better to pass dispatch down from
// the parent component?
export default connect()(withRouter(PostEditForm));
