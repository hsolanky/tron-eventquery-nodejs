const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const blockSchema = new mongoose.Schema({
  timeStamp  : Number,
	triggerName : String,
	blockNumber : Number,
	blockHash : String,
	transactionSize : Number,
	latestSolidifiedBlockNumber : Number,
	transactionList : Array
}, { collection: 'block' })

blockSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  module.exports = mongoose.model('block', blockSchema)