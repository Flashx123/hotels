const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,  //this is cols that are to be inserted wia 
        unique : true
    },
    PhoneNumber : {
        type : String,
        required : true
    },
    Jobs : {
        type : String,
        enum : ['Lawyer','Prostitute','Chef' , 'Teacher'],
        required : true
    }
});

const Person = mongoose.model('Person' , personSchema);
module.exports = Person;
///this is to try out the Github
