const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
name : { type:  String, description: "Required Field", required: true },
username : { type:  String, description: "Required Field", required: true },
email : { type:  String, description: "Required Field", required: true },
password : { type:  String, description: "Required Field", required: true },
avatar : { type:  String, description: "Required Field", required: true },
bio : { type:  String, description: "Required Field", required: true },
lastLogin : { type:  Number, description: "Required Field", required: true },
createdAt : { type:  Number, description: "Required Field", required: true },
loginMode : { type:  String, description: "Required Field", required: true },
updatedAt : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('users', usersSchema);