/**
 * Helper script to initialize project with respective enviroment variables in .env file.
 * 
 * Supported: 
 * 	EXPRESS_PORT
 * 	MONGO_USER
 * 	MONGO_PASSWORD
 * 	MONGO_DATABASE
 */
const fs 	   	= require('fs');
const readline 	= require("readline");
const rl 		= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Express port? (default: 3000)", express_port => {
	rl.question("MongoDB username? (default: mongoUserDefault)", mongo_user => {
		rl.question("MongoDB password? (default: mongoPasswordDefault)", mongo_password => {
			rl.question("MongoDB name of database to connect? (default: '')", mongo_database => {

				express_port = express_port || 3000;
				mongo_user   = mongo_user   || "mongoUserDefault";
				mongo_password = mongo_password || "mongoPasswordDefault";
				mongo_database = mongo_database || '';

				let content = `EXPRESS_PORT=${express_port}\n`;
				content += `MONGO_USER=${mongo_user}\n`;
				content += `MONGO_PASSWORD=${mongo_password}\n`;
				content += `MONGO_DATABASE=${mongo_database}\n`;

				fs.writeFileSync('.env', content);

				rl.close();
			});
		});
	});
});

rl.on("close", function() {
    console.log("\nEnjoy development !!!");
    process.exit(0);
});