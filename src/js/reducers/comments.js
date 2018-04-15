// import * from '../actions/action-constants';

function comments(state = [], action) {
  // debugger;
  switch (action.type) {
    case 'RECEIVED_COMMENTS':   
      state = action.comments.reduce((final, comment) => {
        final[comment.id] = comment;
        return final;
      }, {});      
      return state;    
    default:      
      return state;
  }
}

export default comments;