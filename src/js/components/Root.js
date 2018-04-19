import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Post from './Post/Post';
import PostContainer from './Post/PostContainer';
import PostEditForm from './Post/PostEditForm';
import Nav from './Nav';
import FourOhFour from './FourOhFour';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/:category?" exact component={App} />
          <Route exact path="/post/create" component={Post} />
          <Route exact path="/:category/:id" component={PostContainer} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
