import { createStore, combineReducers, applyMiddleware } from "redux";
import { demoReducer } from './reducers'; // import list of reducers here

const rootReducer = combineReducers(
	{
		reducer: demoReducer
	}
)

/*
	this will build a store with initial state.
	At client end, initial ship together with the html can be initialize using this method
*/
export default ( initialState ) => createStore(rootReducer, initialState);