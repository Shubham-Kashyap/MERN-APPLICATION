const Response = require('../../utils/Response');
const user = require('../../models/user');
class AdminController{
  // greetings
  async greetings(req , res) {
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
  async allusers(req , res) {
    try {
      const data = await user.find({
        role: 'user',
      });
    } catch (error) {
      return Response.ErrorResponse(res,error.messge)
    }
  }
}

// class object
let obj = new AdminController();
module.exports = obj;
