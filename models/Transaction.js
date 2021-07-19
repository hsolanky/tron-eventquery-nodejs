const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const transactionSchema = new mongoose.Schema({
    timeStamp  : Number,
    triggerName : String,
    transactionId : String,
    blockHash : String,
    blockNumber : Number,
    energyUsage : Number,
    energyFee : Number,
    originEnergyUsage : Number,
    energyUsageTotal : Number,
    netUsage : Number,
    netFee : Number,
    result : String,
    contractAddress : Object,
    contractType : String,
    feeLimit : Number,
    contractCallValue : Number,
    contractResult : Object,
    fromAddress : String,
    toAddress : String,
    assetName : String,
    assetAmount : Number,
    latestSolidifiedBlockNumber : Number,
    data : String,
})

transactionSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  module.exports = mongoose.model('Transaction', transactionSchema)