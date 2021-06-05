import express from 'express';
import path from "path";
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from '../../frontend/src/App.js';
import buildStore from '../../frontend/src/redux';

var router = express.Router();

router.get('/*', (req,res) => {

	let store = buildStore(/* take no initial state */);
	let state = store.getState(); // state need to ship together with html

	const context = {};
	const app = ReactDOMServer.renderToString(
		<ReduxProvider store={store}>
			{/* <StaticRouter> wiil need to take the current URL for switching in <App> */}
			<StaticRouter context={ context } location={ req.url }>
				<App />
			</StaticRouter>
		</ReduxProvider>
	);

	/**
	 * Read the index.html generated from build and replace the app's root with the content of app
	 */
	const indexFile = path.resolve('./frontend/index.html');
	fs.readFile(indexFile, 'utf8', (err, data) => {
		if (err) {
		  console.error('Something went wrong:', err);
		  return res.status(500).send('Oops, better luck next time!');
		}
	
		return res.send(
			data
			.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
			// ship state together with html
			.replace('<script id="redux-data"></script>', `<script> window.REDUX_DATA = ${JSON.stringify(state)} </script>`)
		);
	});

});

export default router;