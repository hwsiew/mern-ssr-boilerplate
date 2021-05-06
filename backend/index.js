import express from "express";
import path, { dirname } from "path";
import mongoose from 'mongoose';
import config from './config.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { 
	MONGO_USER,
	MONGO_PASSWORD, 
	MONGO_PORT, 
	MONGO_HOST,
	MONGO_DB
} = config;

const app = express();

const connectUri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(connectUri, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.info("[mongodb] we're connected!");
});

app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req,res) => {
	res.send("hello world");
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`[express] listening on port ${port}`));