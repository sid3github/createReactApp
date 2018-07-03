const mongoose = require('mongoose');



var ContactSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    githubUsername:{
        type: String,
        required:true
    },
    avatarURL:{
        type: String
    }

});



var contacts = mongoose.model("contacts", ContactSchema);

module.exports = contacts;
