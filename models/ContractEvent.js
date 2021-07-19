const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const transactionSchema = new mongoose.Schema({
    timeStamp : Object,
    triggerName : String,
    uniqueId : String,
    transactionId : String,
    contractAddress : String,
    callerAddress : String,
    originAddress : String,
    creatorAddress : String,
    blockNumber : Number,
    removed : Boolean,
    latestSolidifiedBlockNumber : Number,
    logInfo : Object,
    rawData : Object,
    abi : Object,
    eventSignature : String,
    eventSignatureFull : String,
    eventName : String,
    topicMap : Object,
    dataMap : Object
}, { collection: 'contractevent' })

transactionSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  module.exports = mongoose.model('Transaction', transactionSchema)