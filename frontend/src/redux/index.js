import { createStore, combineReducers, applyMiddleware } from "redux";
import { demoReducer, apiReducer } from './reducers'; // import list of reducers here
import thunkMiddleware from "redux-thunk"; // this is required to work for redux fetching remote data
import { apiAction } from './actions';

const rootReducer = combineReducers(
	{
		reducer: demoReducer,
		apiReducer
	}
)

/**
 * export actions if any
 */
export {
	apiAction
};

/*
	this will build a store with initial state.
	At client end, initial ship together with the html can be initialize using this method
*/
export default ( initialState ) => createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));