const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3,'first name must be at least 3 characters long'],
        },
        lasttname: {
            type: String,
            // required: true,
            minlength: [3,'Last name must be at least 3 characters long'],
        }
    },
    email:  {
        type: String,
        unique : true,
        required: true,
        minlength: [5,'Email name must be at least 3 characters long'],
    },
    password:{
        
            type: String,
            required: true,
            select : false,
            // minlength: [3,'first name must be at least 3 characters long'],
        
    },
    socketID :{
        type: String,
    }
})
//Gnerate token
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id:this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword =async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword = async function (password) {
    
    return await bcrypt.hash(password,10);

}
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;