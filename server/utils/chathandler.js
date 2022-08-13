const { Socket } = require("socket.io")
const chalk = require('chalk');

const { Server } = require("socket.io");
const io = new Server(4000, {
    /* options */
    cors: {
        origin: ["http://localhost:3000", "http://localhost:5000"],
        autoConnect: false, reconnection: false
    }
});
const connectWithClientSocket = () => {
    try {
        io.on("connection", (socket) => {
            console.log(chalk.cyan.bold('Server : socket is connected : ', socket.id));
            // socket.on('message', ({ message, id }) => {
            //     io.emit('sendMessage', { user: users[id], message, id });
            // })

        });
    } catch (err) {
        console.log(chalk.red.bold('+++++ SOCKET ERROR +++++ '), err.message);
    }
}

const sendWelcomeMessage = (socket) => {

}
const message = (socket) => {
    socket.on('message', (data) => {
        console.log(' message received ', data);
        io.emit('sendMessage', 'receiver fuck off')
    });
}

exports.connectWithClientSocket = connectWithClientSocket;