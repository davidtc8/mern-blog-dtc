import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
// We want to save two things while adding a new user:
// time of creation
// time of update
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;