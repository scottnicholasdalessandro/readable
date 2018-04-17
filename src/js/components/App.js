import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostsViewer from '../components/PostsViewer';
import CategoryPicker from './Categories/CategoryPicker';
import {fetchCategory, fetchPosts} from '../actions';
import {withRouter} from 'react-router';


class App extends Component {
  render() {
    return (
      <div>        
        <CategoryPicker />
        <PostsViewer category={this.props.match.params} />
      </div>
    );
  }
}

export default App;
