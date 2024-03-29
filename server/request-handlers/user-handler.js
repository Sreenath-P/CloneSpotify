import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userModel from "../models/spotifyuser.shema.js";

const { sign } = jwt;

export async function register(req, res) {
    try {
        let { username,password,email} = req.body;
        if (!(username && password && email)) {
            return res.status(400).json({
                msg: "Input fields cannot be empty!"
            })
        }
        let userExists = await userModel.findOne({ $or: [{ username }, { email }] });
        if (userExists) {
            return res.status(400).json({
                msg: `${username == userExists.username ? "Username" : "Email"} already exists!`
            })
        }
        let hashedPass = await bcrypt.hash(password, 12);
        await userModel.create({
            username,
            password: hashedPass,
            email,
        });
        return res.status(201).json({
            msg: "Registration successful!"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error occured!"
        })
    }
}

export async function login(req,res) {
    try {
        let { username, password } = req.body;
        if(!username || !password) {
            return res.status(400).json({
                msg: "Username or password cannot be empty!"
            })
        }
        let user = await userModel.findOne({ username });
        if(!user) {
            return res.status(400).json({
                msg: "Invalid username or password!"
            })
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if(isMatch) {
            let token = sign({
                username: user.username,
                userId: user._id,
                type: user.type
            }, process.env.SECRET_KEY,{
                expiresIn: "48h"
            });
            return res.status(200).json({
                msg: "Login successful!",
                type: user.type,
                token
            })
        }
        return res.status(400).json({
            msg: "Invalid username or password!"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error occured!"
        })
    }
}

export async function getUsername(req, res){
    let{username} = req.user;
    console.log(username);
    let profile = await userModel.find({username});
    res.json(profile);

}


// export async function profile(req, res) {
//     try {
//         let { userId } = req.user;
//         let user = await userModel.findOne({ _id: userId },{ password: 0 });
//         if(user) {
//             return res.status(200).json({
//                 msg: "User data",
//                 user
//             })
//         }
//         return res.status(404).json({
//             msg: "Unknown user!"
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ msg: "Error occured!" })
//     }
// }