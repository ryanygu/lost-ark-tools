const mongoose = require('mongoose')

const schema = mongoose.Schema({
  rarity: String,
  line1: [String],
  line2: [String],
  line3: [String],
  score: Number,
  created: { type: Date, default: Date.now },
  account:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  }
})

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('AbilityStone', schema)