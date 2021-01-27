const mongoose = require('mongoose')
const uri = 'mongodb://admin:admin@cluster0.hctwu.mongodb.net/booking?authSource=admin&replicaSet=atlas-3diqod-shard-0&w=majority&readPreference=primary&appname=mongodb-vscode%200.4.0&retryWrites=true&ssl=true'
mongoose.Promise = global.Promise

mongoose.connect(uri,{ useMongoClient: true,})

  .then(() => {
    console.log('Successfully connected to database')
  })

  .catch(error => {
    console.error('Error connecting to MongoDB database', error)
  })

module.exports = mongoose


