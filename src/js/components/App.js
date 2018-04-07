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

/*
the properties of the object returned from mapStateToProps() will be passed to the component as props! 
You can think of mapStateToProps() as just a function that lets connect() know how to map specific
 parts of the store’s state into usable props.
 */

export default App;


