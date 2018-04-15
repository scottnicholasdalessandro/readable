function categories(state = [], action) {
  
  switch (action.type) {
    case 'RECEIVED_CATEGORIES':   
       
      state = [{name:'All', path:''},...action.categories];
      
      return state;    
    default:      
      return state;
  }
}

export default categories;
