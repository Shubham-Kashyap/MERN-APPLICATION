const { ErrorResponse, SuccessResponse } = require('../../utils/Response');
const user = require('../../models/user');
const chatGroupManagement = require('../../models/group');
let _request;
class AdminController {
  // greetings
  async greetings(req, res) {
    // res.send({message:"this is web routes ---> great !"});
    let status_code = res.status(200);
    // res.send(Response.SuccessResponse(200, "routes are working"));
    await Response.SuccessResponse(res, "routes are working");
  }
  /**
   * 
   * @param {-------------------- all users --------------------} req 
   * @param {*} res 
   */
  async allusers(req, res, next) {
    try {
      const data = await user.find({});
      return SuccessResponse(res, "Profile data fetched successfully", data);
    } catch (error) {
      return ErrorResponse(res, error.message);
    }
  }
  /**
   * 
   * @param {------------------- add users to a group or individual ---------------} 
   * @param {*} req 
   */
  async createChatGroupForUsers(req, res) {
    try {
      _request = await req.body;
      const result = await chatGroupManagement.create({
        users: _request.user,
        mute_status: _request.country_code,

      });
      return SuccessResponse(res, "data added successfully,", result);
    } catch (error) {
      return ErrorResponse(res, error.message)
    }
  }
  async fetchChatGroupForUsers(req, res) {
    try {
      _request = await req.body;

      const result = await chatGroupManagement.find({});
      return SuccessResponse(res, "data fetched successfully,", result);
    } catch (error) {
      return ErrorResponse(res, error.message)
    }
  }
  async updateChatGroupForUsers(req, res) {
    try {
      _request = await req.body;

      const result = await chatGroupManagement.update({
        _id: _request.group_id
      }, {
        name: _request.name
      });
      return SuccessResponse(res, "data updated successfully,");
    } catch (error) {
      return ErrorResponse(res, error.message)
    }
  }
}

// class object
let obj = new AdminController();
module.exports = obj;
