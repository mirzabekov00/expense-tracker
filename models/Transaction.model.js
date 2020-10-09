const {Schema, model} = require('mongoose')

const schema = new Schema({
  text: {type: String, trim: true, required: [true, 'Please add some text']},
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number'],
  },
  createdAt: {type: Date, default: Date.now},
})

module.exports = model('Transaction', schema)
