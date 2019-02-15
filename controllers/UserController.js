const User = require('../models/User')
const { jwtSign } = require('../helpers/jwt')
const { compare } = require('../helpers/bcrypt')

class UserController {
  static register(req, res) {
    User
      .create({
        email: req.body.email,
        password: req.body.password
      })
      .then(newUser => {
        var payload = {
          email: newUser.email,
          _id: newUser._id
        }

        res
          .status(201)
          .json({
            msg: "create success",
            data: newUser,
            token: jwtSign(payload)
          })
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({
            msg: "internal server error",
            err
          })
      })
  }

  static login (req, res) {
    User
      .findOne({
        email: req.body.email
      })
      .then(user => {
        if (!user) {
          res
            .status(404)
            .json({
              msg: "you have to signup first"
            })
        } else {
          if (compare(req.body.password, user.password)) {
            var payload = {
              email: user.email,
              _id: user._id
            }

            res
              .status(200)
              .json({
                msg: "signin success",
                token: jwtSign(payload),
                data: user
              })
          } else {
            res
              .status(404)
              .json({
                msg: "incorrect email/password"
              })
          }
        }
      })
  }

  static getOne (req, res) {
    console.log('===========', req.user)
    res.status(200).json(req.user)
  }
}

module.exports = UserController