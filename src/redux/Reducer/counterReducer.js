import { INCREMENT,DECREMENT } from "../Actions/ActionTypes";
import initialState from "./initialState";

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