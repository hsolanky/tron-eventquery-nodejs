const blocksRouter = require('express').Router()
const Block = require('../models/Block');

/**
 * Returns Block Object Corresponding to the blockHash.
 *
 * @pathParam {string} blockHash Hash.
 * @return {object} Block Object.
 */

blocksRouter.get('/:blockHash', async (request, response) => {
    let blockHash = request.params.blockHash
    let block = await Block.findOne({ blockHash })
    response.json({ data : block })
})

/**
 * Returns Block Object Corresponding to the blockNumber.
 *
 * @pathParam {string} blockHash Hash.
 * @return {object} Block Object.
 */

 blocksRouter.get('/blockNumber/:blockNumber', async (request, response) => {
    let blockNumber = request.params.blockNumber
    let block = await Block.findOne({ blockNumber })
    response.json({ data : block })
})

/**
 * Returns List of Blocks based on Passed Parameters.
 *
 * @param {number} limit number of transactions to return, default is 25.
 * @param {number} skip number of transactions to Skip, default is 0.
 * @return {object} Block Object List.
 */

blocksRouter.get('/', async (request, response) => {
    let findCondition = {}
    let { limit, skip} = request.query
    limit = Number(limit)  || 25
    skip = skip || 0
    
    let matchingBlocks = await Block.find(findCondition).limit(limit).skip(skip)
    response.json({ result : matchingBlocks.length , data : matchingBlocks })
})



module.exports = blocksRouter