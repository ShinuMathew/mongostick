const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongostick')
    .then(() => console.log('Connected to mongo'))
    .catch(err => console.error(`Unable to connect to mongo db. Following error occured :\n${err}`))

const DataSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
})

const DataModel = mongoose.model('mongostick', DataSchema)

async function createData() {
    const dataModel = new DataModel({
        name: "My",
        author: "Sneha",
        tags: ["Success"],
        isPublished: true
    })
    
    const result = await dataModel.save();
    mongoose.connection.close()
    console.log(result)
}

createData();