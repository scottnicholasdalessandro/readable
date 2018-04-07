function categories(state = [{name:'All', path:''}], action) {
  
  switch (action.type) {
    case 'RECEIVED_CATEGORIES':   
       
      state = [...state, ...action.categories];
      
      return state;    
    default:      
      return state;
  }
}

export default categories;
