import DISHES from '../data/Dishes';
import COMMENTS from '../data/comments';
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';


const dishReducer = (dishState = DISHES, action) => {
  switch (action.type) {
    default:
      return dishState;
  }
};


const commentReducer = (commentState = COMMENTS, action) => {
  switch (action.type) {

    case actionTypes.ADD_COMMENT:
      const comment = action.payload;

      return commentState.concat({
        ...comment,
        id: commentState.length,
        date: new Date().toISOString()
      });

    default:
      return commentState;
  }
};


const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer
});

export default Reducer;
