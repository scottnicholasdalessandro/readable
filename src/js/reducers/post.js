// I don't think I 100% need this reducer
// A) - Is it okay to re-use actions, I am using the 'UPDATE_POST' action in my posts reducer AND here.
// B) - Instead of this reducer, I can just access the individual post in the posts reducer
// C) - With this approach, I can either access the individual post with the post ID (I may need to pass that down via props)

import * as actions from '../actions/action-constants';

function post(state = {}, action) {

  switch (action.type) {
    case 'RECEIVE_POST':
      state = action.post;
      return state;
    case 'UPDATE_POST':
      state = action.post;
      return state;
    case actions.ADD_POST_COMMENT:
    debugger;
      return {
        ...state,
        [action.parentId]: {
          // add all properties of the post
          ...state[action.parentId],
          // add 1 to comment count
          commentCount: state[action.parentId].commentCount + 1
        }
      };

    case actions.REMOVE_POST_COMMENT:
      return {
        ...state,
        [action.parentId]: {
          // add all properties of the post
          ...state[action.parentId],
          // sbutract  1 from comment count
          commentCount: state[action.parentId].commentCount - 1
        }
      };
    default:
      return state;
  }
}

export default post;
