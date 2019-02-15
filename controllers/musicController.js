const Music = require('../models/music')
const { getImage } = require('../helpers/getImage')

module.exports = {

  all: (req, res) => {
    Music
      .find({})
      .then(musics => {
        // if (!musics.length) {
        //   res.status(404).json({
        //     msg: 'There is no music found, please upload a new one'
        //   })
        // } else {
          res.status(200).json(musics)
        // }
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          msg: err.message
        })
      })
  },

  create: (req, res) => {
    getImage(req.body.title)
      .then(data => {
        
        let input = {
          title: req.body.title,
          artist: req.body.artist,
          url: req.file.cloudStoragePublicUrl,
          img_url: data,
          user: req.user._id
        }

        return Music
          .create(input)
      })
      .then(music => {
        res.status(201).json(music)
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
      artist: req.body.artist,
      url: req.file.cloudStoragePublicUrl,
      img_url: data,
      user: req.user._id
    }

    Music
      .findByIdAndUpdate({ _id: req.params.id }, input, { new: true })
      .then(music => {
        res.status(200).json(music)
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
          id: req.params.id
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