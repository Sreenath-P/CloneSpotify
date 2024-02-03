import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from "../assets/images/logo.png"
import { useNavigate } from 'react-router-dom';

function Login() {
    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(24 24 27)';
        document.querySelector("#main2").style.display = "none";
    })
    const [Data, setData] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post('http://localhost:3000/api/login', Data);
            console.log(response.data);
            alert(response.data.msg)
            localStorage.setItem("token", response.data.token);
            navigate("/homenew")
        }
        catch (error) {
            alert('login failed' + error.response.data.msg)
            //   console.error('login failed:', error.response.data.msg);
        }
    }

    return (
        <>
            <div className="px-3 h-24 w-full bg-black ">
                <img src={logo} alt="" className="mx-6 py-5 h-18 w-32 place-items-center" />
            </div>
            <br></br>
            <div className="container flex justify-center bg-gradient-to-b from-zinc-900 to-black h-max w-full">
                <div className="p-5 bg-black rounded-lg px-32">
                    <h1 className=" loginh p-8 text-white text-center text-5xl font-bold">Log in to Spotify </h1>
                    <div className="p-4 flex flex-col items-center gap-3">
                        <div className=" login1 bg-black border border-stone-500 p-2 w-80 hover:border-stone-50 rounded-full flex">
                            <img src="http://pngimg.com/uploads/google/google_PNG19635.png" className=" w-8 h-8" />
                            <a className="text-white text-justify p-1 px-8 font-bold" href=''>Continue with Google</a>
                        </div>
                        <div className=" login1 bg-black border border-stone-500 p-2 w-80 hover:border-stone-50 rounded-full flex">
                            <img src="https://www.pngkey.com/png/full/153-1536567_facebook-icon-white-png.png" className=" w-8 h-8" />
                            <a className="text-white text-justify p-1 px-8 font-bold" href=''>Continue with Facebook</a>
                        </div>
                        <div className=" login1 bg-black border border-stone-500 p-2 w-80 hover:border-stone-50 rounded-full flex">
                            <img src="https://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white-md.png" className=" w-8 h-7 px-1" />
                            <a className="text-white text-justify p-1 px-8 font-bold" href=''>Continue with Apple</a>
                        </div>
                        <div className=" login1 bg-black border border-stone-500 p-2 w-80 hover:border-stone-50 rounded-full flex">
                            <a className="text-white text-justify p-1 px-8 font-bold" href=''>Continue with phone number</a>
                        </div>
                        <br></br>
                        <hr className="w-2/3"></hr>
                    </div>
                    <br></br>
                    <form onSubmit={handleSubmit}>
                        <div className=" form1 p-5 flex flex-col justify-center text-justify gap-3 text-white">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                Email or Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                className="block flex-1 rounded-md border border-stone-500 bg-stone-900 py-2 pl-2 text-white placeholder:text-gray-400 hover:border-2 hover:border-white"
                                placeholder="Email or Username"
                                onChange={handleChange}
                            />

                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="block flex-1 rounded-md border border-stone-500 bg-stone-900 py-2 pl-2 text-white placeholder:text-gray-400  hover:border-2 hover:border-white"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <br></br>
                            <input type="submit" value={"Log In"} className=" text-black bg-green-500 h-11 w-96 rounded-full font-bold hover:bg-green-400 border-none  text-center" />
                            <br></br>
                            <a className="underline underline-offset-1 text-center hover:text-green-500 text-white font-bold text-sm" href=''>Forgot your password? </a>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <div className="flex gap-2">
                                <p className=' pl-16 text-sm font-bold'>Don't have an account?</p> <a href='./signup' className="underline underline-offset-1 text-center text-white hover:text-green-500 text-sm font-bold"> Signup for Spotify</a>
                                <br></br>
                            </div>
                        </div>
                    </form>
                </div>

            </div>


        </>
    )
}
export default Login
