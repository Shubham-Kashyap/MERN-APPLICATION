const { mongoose, chalk } = require('../exports/library');
const dbURI = process.env.MONGO_URL;
const dbName = process.env.MONGO_DBNAME;

const connect = async () => {
    try {
        await mongoose.connect(`${dbURI}`, {
            autoIndex: true, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 60000, // Close sockets after 60 seconds of inactivity,
            dbName : dbName, // Specifies which database to connect to and overrides any database specified in the connection string.
        });

        console.log(chalk.yellow.bold(`db connected - ${dbURI}`));
    } catch (error) {
        console.log(error.message);
        process.exit(0);
    }
}
exports.connect = connect;

