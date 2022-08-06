const { ErrorResponse, SuccessResponse } = require('../../utils/Response');
const { chalk } = require('../../exports/library');
const { user, personalAccessToken } = require('../../exports/library');
const { check, validationResult } = require("express-validator");
const { generateUsername } = require('../../helpers/validate');
const { encryptHash, compareHash } = require('../../services/crypto');
const { generateToken, checkToken } = require('../../services/auth');
const { db } = require('../../models/user');
let _request = '';

class UserController {
  // greetings
  async greetings(req, res) {
    console.log("this is api --> greet ");
    return SuccessResponse(res, "Hello this is greetings  ", []);
  }
  /**
   * ----------------------------------------------------------------
   * User Signup
   * ----------------------------------------------------------------
   */
  async userSignup(req, res, next) {
    try {
      // console.log(user)
      _request = await req.body;
      const result = await user.create({
        name: _request.name,
        country_code: _request.country_code,
        phone_no: _request.phone_no,
        username: await generateUsername(),
        email: _request.email,
        password: await encryptHash(_request.password),
        role: 'user'
      })
      const token = await generateToken(result._id);
      await personalAccessToken.create({
        user_id: result._id,
        personal_access_token: token,
        // remember_token: Math.random().toString(6)
        remember_token: btoa(String.fromCharCode(...new Uint8Array(Array(30).fill().map(() => Math.round(Math.random() * 30)))))

      });
      result.token = token;
      return SuccessResponse(res, "data saved successfully", result);
    } catch (error) {
      return ErrorResponse(res, error.message);
    }

  }
  /**
   * ----------------------------------------------------------------
   * Login
   * ----------------------------------------------------------------
   */
  async login(req, res, next) {
    try {
      let data = await user.findOne({
        $or: [
          { 'email': req.body.username },
          // { 'phone_no': req.body.username  }
        ]
      });
      if (!data) {
        throw new Error("User not found");
      }
      if (!compareHash(req.body.password, data.password)) {
        throw new Error('Incorrect password');
      }
      const token = await generateToken(data._id);
      await user.findOneAndUpdate({
        _id: data._id
      }, {
        remember_token: btoa(String.fromCharCode(...new Uint8Array(Array(30).fill().map(() => Math.round(Math.random() * 30)))))
      });

      const result = await user.aggregate([{
        $match: {
          _id: data._id
        }
      }, {
        $lookup: {
          from: "personal_access_tokens", // collection name in db
          localField: "_id",
          foreignField: "user_id",
          as: "token"
        },
        
      },{
        $unwind: '$token',
      },]);
      SuccessResponse(res, "Data fetched successfully", result[0]);
    } catch (error) {
      return ErrorResponse(res, error.message);
    }
  }
  /**
   * ----------------------------------------------------------------
   * fetch profile
   * ----------------------------------------------------------------
   */
  async fetchProfile(req, res, next) {
    try {
      
      return SuccessResponse(res, "Profile data fetched successfully", req.user);
    } catch (error) {
      return ErrorResponse(res, error.message);
    }
  }

}

module.exports = new UserController();







