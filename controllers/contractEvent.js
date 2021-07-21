const contractEventssRouter = require('express').Router()
const ContractEvent = require('../models/ContractEvent');


/**
 * Returns Event Object Corresponding to the transactionId.
 *
 * @pathParam {string} Transaction Hash.
 * @return {object} Event Object.
 */

 contractEventssRouter.get('/:transactionId', async (request, response) => {
    let transactionId = request.params.transactionId
    let event = await ContractEvent.findOne({ transactionId })
    response.json({ data : event })
})


/**
 * Returns List of Events based on Passed Parameters.
 *
 * @param {number} limit number of transactions to return, default is 25.
 * @param {number} skip number of transactions to Skip, default is 0.
 * @param {string} sortField sort Field, default is sort by timeStamp 
 * @param {number} sortOrder sort order, default is descending order.
 * @param {string} from from address, default is "".
 * @param {string} to from address, default is "".
 * @param {string} eventName eventName, default is allEvents.
 * @param {number} since (timeStamp greater than)timestamp after which to return Events, default is 0.
 * @return {object} Event Object List.
 */

 contractEventssRouter.get('/', async (request, response) => {
    let findCondition = {}
    let { contractAddress, limit, skip, sortField, sortOrder, from, to, eventName, since } = request.query
    limit = Number(limit)  || 25
    skip = skip || 0
    sortField = sortField || 'timeStamp'
    sortOrder = sortOrder || -1
    let sortObject = {}
    sortObject[sortField] = sortOrder
    
    if (contractAddress) {
        findCondition['contractAddress'] = contractAddress
    }
    if (from) {
        findCondition['topicMap.from'] = from
    }
    if (to) {
        findCondition['topicMap.to'] = to
    }
    if (eventName) {
        findCondition['eventName'] = eventName
    }
    if (since) {
        findCondition['timeStamp'] = { $gt : since }
    }
    let matchingEvents = await ContractEvent.find(findCondition).sort(sortObject).limit(limit).skip(skip)
    response.json({ result : matchingEvents.length , data : matchingEvents })
})



module.exports = contractEventssRouter