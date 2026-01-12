import DISHES from '../data/Dishes';
import COMMENTS from '../data/comments';

//2. initialize the state

const initialState ={
    dishes:DISHES ,
    comments: COMMENTS
}

//1. Define the Reducer function
const Reducer = (state = initialState, action) =>{
    return state;
}


//3. goto store.js

export default Reducer;