import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import PostContainer from './Post/PostContainer';
// import Nav from './Nav';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/:category?" component={App}/>
          <Route exact path="/:category/:id" component={PostContainer} />          
        </Switch>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
