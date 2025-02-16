import { createStore,applyMiddleware,combineReducers} from "redux";
import counterReducer from "../Reducer/counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";

//Conditionally include middleware
//logger is a middleware that shows every action and state change in console
const middleware = [];
if (process.env.NODE_ENV !== "production") {
  middleware.push(logger); // Include logger only in development
}

const rootReducer = combineReducers({
    counter: counterReducer, // This key should be visible in the console
  });
//const store = createStore(rootReducer, applyMiddleware(logger));
//Create the store and if dont want to include logger in production
const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
  );

export default store;