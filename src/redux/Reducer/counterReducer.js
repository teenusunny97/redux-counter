import { INCREMENT,DECREMENT } from "../Actions/ActionTypes";
import initialState from "./initialState";
//reducer takes state and action as arguments
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export default counterReducer;