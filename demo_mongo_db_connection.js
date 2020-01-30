// Connecting to MongoDB
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) {
    console.error(err)
    return
  }
  
const db = client.db('World02')
// Create and get a collection (Table)
const collection = db.collection('Country')


// Insert data into a collection a Document
// ต้องใส่ข้อมูลอย่างน้อย 1 อัน, db กับ table ถึงจะถูกสร้างขึ้นมา
// collection.insertOne({name: 'Thailand'}, (err, result) => {

// })

// You can add multiple items using insertMany(), passing an array as the first parameter:
// collection.insertMany([{name: 'Japan'}, {name: 'China'}], (err, result) => {

// })


// Find all documents
// collection.find().toArray((err, items) => {
//   console.log(items)
// })

// Find a specific document
// collection.find({name: 'Japan'}).toArray((err, items) => {
//   console.log(items)
// })

//or

// collection.findOne({name: 'Japan'}, (err, item) => {
//   console.log(item)
// })

// Can be used with promises
// collection.findOne({name: 'Japan'})
//   .then(item => {
//     console.log(item)
//   })
//   .catch(err => {
//   console.error(err)
//   })

//or async/await:
// const find = async () => {
//   try {
//     const item = await collection.findOne({name: 'Japan'})
//   } catch(err => {
//   console.error(err)
//   })
// }

// find()


//Update an existing document
// collection.updateOne({name: 'China'}, {'$set': {'name': 'Taiwan'}}, (err, item) => {
//   console.log(item)
// })


//Delete a document
// collection.deleteOne({name: 'Evelyn'}, (err, item) => {
//   console.log(item)
// })


//Closing the connection
// client.close()

})