const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicSchema = new Schema({
  title: String,
  url: String,
  img_url: String,
  user:{ type: Schema.Types.ObjectId, ref: 'User' }
})

const Music = mongoose.model('Music', musicSchema)

module.exports = Music