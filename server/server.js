
const dotenv = require("dotenv");
const app = require("./app");
// const PORT = process.env.PORT || 3001;

const { Server } = require("socket.io");
const io = new Server({ /* options */ });

// config
dotenv.config({ path: "server/config/config.env" });
const PORT = process.env.PORT;

async function checkSocketIo(port) {
  try {
    io.on("connection", (socket) => {
      // ...
    });
    
    io.listen(port);
  } catch (err) {
    console.log('+++++ SOCKET ERROR +++++ ',err.message);
  }
}


async function boot() {
  try {
    await require('./models/connection').connect();
    await app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }

};


boot();


