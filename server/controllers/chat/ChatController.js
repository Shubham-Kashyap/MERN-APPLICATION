const { ErrorResponse, SuccessResponse } = require('../../utils/Response');
const { chat } = require('../../exports/library');

class ChatController {

    /**
     * ----------------------------------------------------------------
     * Get Chat hostory
     * ----------------------------------------------------------------
     */
    getChatHostory = async (req, res) => {
        try {
            const data = await chat.find({});
            return SuccessResponse(res, 'data fetched successfully', data);
        } catch (error) {
            return ErrorResponse(res, error.message);
        }
    }
    /**
     * ----------------------------------------------------------------
     * Send Message to friends
     * ----------------------------------------------------------------
     */
    sendMessage = (req, res) => {
        try {
            return SuccessResponse(res, 'data fetched successfully', []);
        } catch (error) {
            return ErrorResponse(res, error.message);
        }
    }
}


module.exports = new ChatController();