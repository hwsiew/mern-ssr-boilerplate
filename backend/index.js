const express = require("express");
const cors = require('cors');
const path = require("path");
const mongoose = require('mongoose');
const { 
	MONGO_USER,
	MONGO_PASSWORD, 
	MONGO_PORT, 
	MONGO_HOST,
	MONGO_DB
} = require('./config.js');

/* Rotues */
const home = require('./build/home');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

// This enable client js automatically rebuild by webpack in development environment 
if('development' === process.env.NODE_ENV){
	const middleware = require('./dev.js');
	app.use(middleware);
} 

app.use('/', home.default); 

// connect MongoDB with retry strategy
var connectMongoDB = function(){
	const mongooseUri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
	mongoose
		.connect(mongooseUri, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(() => {
			console.log('[mongodb] is ready!')
			app.emit('ready'); 
		})
		.catch((err) => {
			console.log(err);
			setTimeout(connectMongoDB, 5000);
		});
}
connectMongoDB();

/* server listen */
const port = process.env.PORT || 3000;
app.on('ready', () => {
	app.listen(port, () => console.info(`[express] listening on port ${port}`));
});