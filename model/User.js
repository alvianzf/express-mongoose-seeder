var mongoose = require('mongoose')
var seeder = require('mongoose-seeder')
var data = require('../seed/userSeed')

const userSchema = new mongoose.Schema({
    _id: {
        type: Number,
        requried: true,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    }
}, {timestamps: true});


userSchema.statics.UserSeed = function(){
    let users = this

    users.find().then(res => {
        if(!res.length > 0) {
            users.insertMany(data).then(docs => console.log(docs)).catch(err => console.log('err', err.message))
        }
    }).catch(err => console.log('err', err))
}

mongoose.model('User', userSchema)
