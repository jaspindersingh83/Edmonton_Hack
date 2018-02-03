const authReducer = (users= [], action) => {
    switch(action.type){
        case CREATE_USER:
          return action.payload.data;
    
        case LOGIN:
          return action.payload.data;
        
        default:
          return users;
    }
}

