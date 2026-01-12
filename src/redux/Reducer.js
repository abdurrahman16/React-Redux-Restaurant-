import DISHES from '../data/Dishes';
import COMMENTS from '../data/comments';
import { combineReducers } from 'redux';


const dishReducer = (dishSate=DISHES, action) =>{
    return dishSate;
}
const commentReducer = (commentState=COMMENTS, action) =>{
         if (action.type==='ADD_COMMENT'){
        let comment = action.payload;
        comment.id=commentState.length
        comment.date=new Date().toDateString();
        return comments.concat(comment) ;   
            
        
    }
    return commentState;
}

//1. Define the Reducer function
const Reducer = (state = initialState, action) =>{
    
    
    return state;
}


//3. goto store.js

export default Reducer=combineReducers({
    dishes:dishReducer,
    comments:commentReducer
});