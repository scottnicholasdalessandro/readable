import * as actions from '../actions/action-constants';
function comments(state = {}, action) {
  
  switch (action.type) {
    case actions.RECEIVED_COMMENTS: 
      state = action.comments.reduce((final, comment) => {
        final[comment.id] = comment;
        return final;
      }, {});      
      return state; 
      
    case actions.CREATE_COMMENT:
      state = {
        ...state,
        [action.comments.id]: action.comments
      };      
      return state;

    case actions.UPDATE_COMMENT:          
      return {
        ...state,
        [action.comments.id]: action.comments
      };
    
    case actions.DELETE_COMMENT:
      const copy = Object.assign({}, state);
      delete copy[action.comments];
      return copy;


    case actions.UP_DOWN_COMMENT:      
      return {
        ...state,
        [action.comment.id]: action.comment
      };
      
    default:      
      return state;
  }

}

export default comments;