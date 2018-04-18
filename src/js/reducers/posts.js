import * as actions from '../actions/action-constants';

function post(state = undefined, action) {
  switch (action.type) {
    case 'RECEIVE_POST':
      state = action.post;
      return state;
    case actions.CREATE_POST:
      return {
        
        ...action.post
      };
      
    
    case actions.ADD_POST_COMMENT:      
      return {
        ...state,
        commentCount: state.commentCount + 1
      };
    case actions.REMOVE_POST_COMMENT:
      return {
        ...state,      
          commentCount: state.commentCount - 1
        };      
    default:
      return state;
  }
}


function posts(state = {}, action) {
  switch (action.type) {
    case actions.RECEIVE_POSTS:
      const posts = action.posts.reduce((obj, post) => {
        obj[post.id] = post;
        return obj;
      }, {});
      return {
        ...state,
        ...posts
      };

    case actions.UP_DOWN_POST:
      return {
        ...state,
        [action.post.id]: action.post
      };

    case actions.CREATE_POST:
      debugger;
      // const newPost = post(undefined, action);
      const newPost = action.post;
      console.log(state);
      console.log(newPost);
      return {
        ...state,
        ...newPost          
      };

    case actions.UPDATE_POST:
      return {
        ...state,
        ...action.post
      };

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

    case actions.DELETE_POST:
      const copy = Object.assign({}, state);
      delete copy[action.post];
      return copy;

    default:
      return state;
  }
}

export default posts;
