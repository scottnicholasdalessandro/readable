import * as actions from '../actions/action-constants';



function posts(state = [], action) {
  
  switch(action.type) {
    case actions.RECEIVE_POSTS:
      state = [...action.posts];      
      return state;
    case actions.UP_DOWN_POST:
      console.log(action.post);
      return {
        // broken, considering refactoring the state to be an object
        // with each post.id as the key
        // updating a post with my format is complex.
        state.find((obj) => obj.id === action.post.id).vote++
          
        // [action.post.id]: action.post
      };
    default:
      return state;
  }  
}

export default posts;