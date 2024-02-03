import mongoose from "mongoose";


const schema = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        unique: false
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },


    // image: {
    //     type: String,
    //     required: false,
    //     unique: false
    // },
    // phone: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // type: {
    //     type: String,
    //     required: true,
    //     unique: false
    // }
});

export default mongoose.model.SpotifyUserss || mongoose.model("SpotifyUsers", schema);