/**
 * ----------------------------------------------------------------
 * Way One
 * ----------------------------------------------------------------
 */
// class Response {
//   SuccessResponse =  (status = 200, message = "" , data = []) =>{
//     return {
//        status : true, status_code : status, message : message, response : data
//     }
//   }
//
//
//   ErrorResponse =  (status = 404, message = "" , data = []) =>{
//     return {
//     status : false,status_code : status, message : message, response : data
//     }
//   }
//
// }

/**
 * ------------------------------------------------
 * Way Second
 * ------------------------------------------------
 */

class Response {
  async SuccessResponse(res, message, data = []) {
    return res.send({
      status: true,
      message: message,
      response: data
    });
  }
  async ErrorResponse(res, message, data = []) {
    return res.send({
      status: false,
      message: message,
      response: data
    });
  }
}
ret_res = new Response();

exports.ErrorResponse = ret_res.ErrorResponse;
exports.SuccessResponse = ret_res.SuccessResponse;
