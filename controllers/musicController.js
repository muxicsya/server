const Music = require('../models/music')

module.exports = {

  all: (req, res) => {
    Music
      .find({
        user: req.currentUser._id
      })
      .then(musics => {
        if (!musics.length) {
          res.status(404).json({
            msg: 'There is no music found, please upload a new one'
          })
        } else {
          res.status(200).json({
            Musics: musics
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  },

  create: (req, res) => {
    let input = {
      title: req.body.title,
      url: req.body.url,
      img_url: req.body.img_url,
      user: req.body.user//req.currentUser._id
    }

    Music
      .create(input)
      .then(music => {
        res.status(201).json({
          msg: 'New Music has been uploaded',
          Task: music
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  },

  update: (req, res) => {
    let input = {
      title: req.body.title,
      url: req.body.url,
      img_url: req.body.img_url,
      user: req.currentUser._id
    }

    Music
      .findByIdAndUpdate({ _id: req.params.id }, input, { new: true })
      .then(music => {
        res.status(201).json({
          msg: 'Music has been updated',
          Music: music
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  },

  delete: (req, res) => {
    Music
      .findByIdAndDelete({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          msg: 'Music has been deleted',
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  }

}