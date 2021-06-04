import express from 'express';
import path from "path";
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import App from '../../frontend/src/App.js';


var router = express.Router();

router.get('/*', (req,res) => {
	const context = {};
	const app = ReactDOMServer.renderToString(
		/**
		 * <StaticRouter> wiil need to take the current URL for switching in <App>
		 */
		<StaticRouter context={ context } location={ req.url }>
			<App />
		</StaticRouter>
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
		  data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
		);
	});

});

export default router;