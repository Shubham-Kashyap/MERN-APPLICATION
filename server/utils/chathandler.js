const { Socket } = require("socket.io")
const chalk = require('chalk');

const { Server } = require("socket.io");
const io = new Server(4000, {
    /* options */
    cors: {
        origin: "http://localhost:4001"
    }
});
const connectWithClientSocket = () => {
    try {
        io.on("connection", (socket) => {
            console.log(chalk.cyan.bold('Server : socket is connected : ', socket.id));
        });
    } catch (err) {
        console.log(chalk.red.bold('+++++ SOCKET ERROR +++++ '), err.message);
    }
}

const sendWelcomeMessage = (socket) => {

}

exports.connectWithClientSocket = connectWithClientSocket;