import {combineReducers} from 'redux';
import posts from './posts';
import categories from './categories';
import comments from './comments';
import sortVals from './sortVals';

export default combineReducers({
  posts,
  categories,
  comments,
  sortVals
});
