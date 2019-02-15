const Music = require('../models/music')

function isOwner(req, res, next){
  Music
    .findById(req.params.id)
    .then(music => {
      if(music.user.toString() == req.user._id.toString()){
        next()
      } else{
        res
          .status(401)
          .json({
            msg: "unauthorized access"
          })
      }
    })
}

module.exports = isOwner