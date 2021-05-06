export default {
	MONGO_USER: process.env.MONGO_USER || 'root',
	MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'root',
	MONGO_HOST: process.env.MONGO_HOST || 'mongo',
	MONGO_PORT: process.env.MONGO_PORT || 27017,
	MONGO_DB: process.env.MONGO_DB || '',
};