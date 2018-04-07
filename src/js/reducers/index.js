// import {ADD_POST} from '../actions';
import {combineReducers} from 'redux';
import posts from './posts';
import post from './post';
import categories from './categories';



export default combineReducers({
  posts,
  post,
  categories
});