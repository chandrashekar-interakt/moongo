//CRUD create read update delete

const mongodb = require('mongodb')
const MOngoClient = mongodb.MongoClient
    //const ObjectID = mongodb.ObjectId


//const { MOngoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

//const id = ObjectID()
//console.log(id.id.length)

MOngoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect the database!')
    }

    const db = client.db(databaseName)

    //  db.collection('users').updateOne({
    //     _id: new ObjectID('628c881e8a35f4e5996b3c26')
    // }, {
    //     $inc: {
    //         age: 1
    //     },

    // })

    // .then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })



    // db.collection('tasks').findOneAndUpdate({
    //     _id: new ObjectID('628ca711e31cd526603ffc45')
    // }, {
    //     $set: {
    //         description: "new plants",
    //         completed: 'true'
    //     }
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(user)
    //})
    // db.collection('users').find({
    //     age: 24
    // }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({
    //     age: 24
    // }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').insertMany([{

    //     description: 'clean the house',
    //     completed: true
    // }, {
    //     description: 'renew inseption',
    //     completed: false
    // }, {
    //     description: 'pot plants',
    //     completed: false

    // }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert tasks!')
    //     } else {
    //         console.log('server is running!', result)
    //     }
    // }])
    //     db.collection('tasks').insertOne({


    //             description: 'this',
    //             completed: true
    //         }


    //     ).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }) 
    // db.collection('tasks').insertOne({
    //     description: "WHO",
    //     completed: false
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    db.collection('users').deleteMany({
        age: 24
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
    
})
console.log("hello chandu")
