function posts(state = {}, action) {
  switch(action.type) {
    case 'RECEIVE_POST':      
      state = action.post;      
      return state;
    default:
      return state;
  }  
}

export default posts;