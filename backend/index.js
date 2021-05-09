const express = require("express");
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

/* mongoose setup for connection */
const connectUri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(connectUri, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.info("[mongodb] we're connected!");
});

app.use(express.static(path.join(__dirname,"public")));

if( 'development' === process.env.NODE_ENV){
	const middleware = require('./dev.js');
	app.use(middleware);
} 

app.use('/', home.default); 

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`[express] listening on port ${port}`));