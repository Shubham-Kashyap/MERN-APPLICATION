
const dotenv = require("dotenv");
const app = require("./app");
const { connectWithClientSocket } = require('./utils/chathandler')
// const PORT = process.env.PORT || 3001;



// config
dotenv.config({ path: "server/config/config.env" });
const PORT = process.env.PORT;
/**
 * -------------------------------------------------------------
 * Chat essentials start
 * -------------------------------------------------------------
 */
connectWithClientSocket();
/**
 * -------------------------------------------------------------
 * Chat essentials end
 * -------------------------------------------------------------
 */


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


