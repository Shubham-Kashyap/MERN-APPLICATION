const { ErrorResponse, SuccessResponse } = require('../../utils/Response');


class ChatController {

    /**
     * ----------------------------------------------------------------
     * Get Chat hostory
     * ----------------------------------------------------------------
     */
     getChatHostory = (req,res) => {
        try {
            return SuccessResponse(res, 'data fetched successfully', []);
        } catch (error) {
            return ErrorResponse(res, error.message);
        }
    }
    /**
     * ----------------------------------------------------------------
     * Send Message to friends
     * ----------------------------------------------------------------
     */
     sendMessage = (req,res) => {
        try {
            return SuccessResponse(res, 'data fetched successfully', []);
        } catch (error) {
            return ErrorResponse(res, error.message);
        }
    }
}


module.exports = new ChatController();