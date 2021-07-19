require('dotenv').config()

let MONGODB_URI = process.env.MONGODB_URI
let PORT = process.env.PORT || 8100

module.exports = {
    MONGODB_URI,
    PORT
}