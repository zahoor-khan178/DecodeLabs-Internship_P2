import mongoose from "mongoose";

const userschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 8
    }

}, { collection: 'user' });

const User = mongoose.model('user', userschema);
console.log('User schema defined successfully');

export default User;