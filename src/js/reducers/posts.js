import * as actions from '../actions/action-constants';



function posts(state = [], action) {
  
  switch(action.type) {
    case actions.RECEIVE_POSTS:
      const posts = action.posts.reduce((obj, post) => {        
        obj[post.id] = post;
        return obj;
      },{});
      
      return {
        ...state,
        ...posts
      };

    case actions.UP_DOWN_POST:
      debugger;
      return {
        ...state,
        [action.post.id]: action.post
      };      
    default:
      return state;
  }  
}

export default posts;