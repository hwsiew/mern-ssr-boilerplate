import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import createStore from './redux';

const store = createStore( window.REDUX_DATA );

ReactDOM.hydrate(
	<ReduxProvider store={ store }>
		<Router>
			<App />
		</Router>
	</ReduxProvider>, 
	document.getElementById('root')
);