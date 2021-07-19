const transactionsRouter = require('express').Router()
const Transaction = require('../models/Transaction');

/**
 * Returns Transaction Object Corresponding to the transactionId.
 *
 * @pathParam {string} Transaction Hash.
 * @return {object} Transaction Object.
 */

transactionsRouter.get('/:transactionId', async (request, response) => {
    let transactionId = request.params.transactionId
    let transaction = await Transaction.findOne({ transactionId })
    response.json(transaction)
})

/**
 * Returns List of Transactions based on Passed Parameters.
 *
 * @param {number} limit number of transactions to return, default is 25.
 * @param {number} skip number of transactions to Skip, default is 0.
 * @param {string} sortField sort Field, default is sort by timeStamp 
 * @param {number} sortOrder sort order, default is descending order.
 * @param {string} from from address, default is "".
 * @param {string} to from address, default is "".
 * @param {string} token AssetName of the transaction Object, default is "".
 * @param {number} timeStampGT (short for timeStamp greater than)timestamp after which to return Transactions, default is 0.
 * @return {object} Transaction Object.
 */

transactionsRouter.get('/', async (request, response) => {
    let findCondition = {}
    let { limit, skip, sortField, from, to, token, timeStampGT, sortOrder} = request.query
    limit = limit | 25
    skip = skip | 0
    sortField = sortField | 'timeStamp'
    sortOrder = sortOrder | -1
    let sortObject = {}
    sortObject[sortField] = sortOrder

    if (from) {
        findCondition['fromAddress'] = from
    }
    if (to) {
        findCondition['toAddress'] = to
    }
    if (token) {
        findCondition['assetName'] = token
    }
    if (timeStampGT) {
        findCondition['timeStamp'] = { $gt : timeStampGT}
    }
    let matchingTransactions = await Transaction.find(findCondition).sort(sortObject).limit(limit).skip(skip)
    response.json(matchingTransactions)
})



module.exports = transactionsRouter