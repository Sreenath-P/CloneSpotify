import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    useEffect(() => {
        document.querySelector("#main2").style.display = "none";
    })
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:'' ,
        username:'',
        password:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
         console.log(formData); 
          const response = await axios.post('http://localhost:3000/api/register', formData);
          console.log(response.data);
          alert(response.data.msg)
          navigate("/login")
        } catch (error) {
          alert('Registration failed:' +  error.response.data.msg)
          console.error('Registration failed:', error.response.data.msg);
        }
      };

    return (
        <>
         <div className="px-3 h-24 w-full  bg-black">
                <img src="./Spotify_Logo.png" alt="" className="mx-6 py-5 h-18 w-32 place-items-center" />
            </div>
            <div className=" bg-black h-full text-justify flex flex-col place-items-center gap-5">
                <div className=" flex flex-col gap-16">
                    <h1 className="text-white font-sans font-bold text-5xl">Sign up to start<br /> listening</h1>
                    <form onSubmit={handleSubmit} className=" pl-3 ">
                        <p className=" text-white font-bold font-sans pb-2">Email address</p>
                        <input type="email" name="email" placeholder="name@domain.com" className="signup bg-black border border-stone-500 p-2 w-80 hover:border-stone-50 text-white font-sans font-semibold"  onChange={handleChange} /><br /><br/>

                        <p className=" text-white font-bold font-sans pb-2">Username</p>
                        <input type="text" name="username" placeholder="name" className=" signup bg-black border border-stone-500 p-2 w-80 hover:border-stone-50 text-white font-sans font-semibold" onChange={handleChange} /><br /><br />

                        <p className=" text-white font-bold font-sans pb-2">Password</p>
                        <input type="password" name="password"  placeholder="password" className=" signup bg-black border border-stone-500 p-2 w-80 hover:border-stone-50 text-white font-sans font-semibold" onChange={handleChange} /><br /><br />


                        <a className=" text-green-400 underline underline-offset-1" href="">Use phone number instead</a><br /><br />
                        <input type="submit" value={"Sign Up"} className=" bg-green-500 h-11 w-80 rounded-full font-bold hover:bg-green-400 border-none" />
                        {/* <button className=" bg-green-500 h-11 w-80 rounded-full font-bold hover:bg-green-400">Next</button> */}
                    </form>

                </div>
                <div className=" flex place-items-center">
                    <hr className=" w-36 mr-3"></hr>
                    <p className=" text-white text-center">or</p>
                    <hr className="w-36 ml-3"></hr>
                </div>
                <div className=" flex flex-col gap-3">
                    <div className=" signup1 bg-black border border-stone-500 p-2 w-80 hover:border-stone-50 rounded-full flex gap-10 ">
                        <img src="http://pngimg.com/uploads/google/google_PNG19635.png" className=" w-8 h-8" />
                        <a className=" text-white font-sans font-bold pt-1" href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&access_type=offline&client_id=1046568431490-ij1gi5shcp2gtorls09frkc56d4mjbe2.apps.googleusercontent.com&state=AQD%2BYQBdfJXDuLdAtt%2FICqfcZnEFRkus%2FJlKB0XOFIkdFbbXEWYmowqBOkBUoqUCWXekL%2Fgvq8TjBuNmjQ6hUTA%2Fpbnw0SW7pVyh07enwNDmScWun5iW2Fyh5TjZR3v7EPqUUglx9wDjurlj%2FiY3RDKVIo%2B7G6fPAdXZ%2FhTPtM37Xdjd9SNm7sVxw%2FLFSKVYQ1k4mbItqCk1vKRWBYnvmUuvvn0rXrAI3vKf10z0GdgQEhxVmtsUTLg2QlptjMyxEdOPaLFQOGbgp3W8pL01WeRUnSGNav44pbqGsfzxMGKknN5UkQkfYJVyDnNN2vadP21a27HbN1KRHYPzLLO%2Bl80JlVR2Kg5NEpdtHK%2Fr5HcwA%2B%2F7ilxT5UDK7gE2zUEop9x8B0zjzNYTN6Cuhogp9%2FdpS5QncXSQUAPen1oitvKDR0EYmuwAcPpuaVX0ehiO4SijPGAqAZdnKqQMY%2Bi8oKjjkmAVkPhWxmZh%2FPeQAEIRb7j8akt0Nlg7RntYZixfja68bWVMgc%2FhQgl0OA%3D%3D&scope=profile%20email%20openid&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fgoogle%2Fredirect%2Fsignup&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow">Sign up with Google</a>
                    </div>
                    <div className="signup1 bg-black border border-stone-500 p-3 w-80 hover:border-stone-50 rounded-full flex gap-10">
                        <img src="https://static.levels.fyi/facebooklogo.png" className=" w-7 h-6 pl-1" />
                        <a className=" text-white font-sans font-bold" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=174829003346&kid_directed_site=0&app_id=174829003346&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv17.0%2Fdialog%2Foauth%3Fclient_id%3D174829003346%26state%3DAQArAFr1u7fBPdg0eESUXW8hmhH9OlVZ7x%252BmQ2a%252Bhr5i8OAV%252BnDl3lyNtebVmUcHODf4mVnax41wkMOL3AAN6KZAnhxB54DrRKUjJW8vj1sNLnY7ZZzqGGc8jDDPA9%252BtJHSXR47FHhDMEWzh5%252FaA0KHFqB5srVa19111dYdAW989y8j98mbdVZFHvvUF%252FiH%252BpyKuQOXmVYJnsKqgX0qOlKkruqO8Xp7ziyF1doroHrMOgf%252F7avnBihfjg762lCKwv8RjJH1jOx9uFFA4zxUlz3TZKJp3J%252B5QmvB2A0QaQSx6%252FfEeOQIeqVwtU%252B6ini2nE7tdybr3%252BkgkUfRSBKK3PXXHQJ7XO0ftBkP%252FJHplhyKwe4oM3o46j1htgmYs8SpzVspV9K9sO%252BmticyNfz0Z%252B%252F%252B2X9JuXnkfdTGvQH4%252FaasHH4URsW22DNarnwcFxZuMsOer3S%252FTHFlSwH%252F9wvl%252BPGNiufOxWo4RYVeIH76zCISLnrCmBmQ%252F0Z8yT7EIjwfrZGdiV9U4yOCbB3PhRA%253D%253D%26redirect_uri%3Dhttps%253A%252F%252Faccounts.spotify.com%252Flogin%252Ffacebook%252Fredirect%252Fsignup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dc1420bd2-4b22-4df2-a8d2-6eedbf73da09%26tp%3Dunspecified&cancel_url=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Ffacebook%2Fredirect%2Fsignup%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DAQArAFr1u7fBPdg0eESUXW8hmhH9OlVZ7x%252BmQ2a%252Bhr5i8OAV%252BnDl3lyNtebVmUcHODf4mVnax41wkMOL3AAN6KZAnhxB54DrRKUjJW8vj1sNLnY7ZZzqGGc8jDDPA9%252BtJHSXR47FHhDMEWzh5%252FaA0KHFqB5srVa19111dYdAW989y8j98mbdVZFHvvUF%252FiH%252BpyKuQOXmVYJnsKqgX0qOlKkruqO8Xp7ziyF1doroHrMOgf%252F7avnBihfjg762lCKwv8RjJH1jOx9uFFA4zxUlz3TZKJp3J%252B5QmvB2A0QaQSx6%252FfEeOQIeqVwtU%252B6ini2nE7tdybr3%252BkgkUfRSBKK3PXXHQJ7XO0ftBkP%252FJHplhyKwe4oM3o46j1htgmYs8SpzVspV9K9sO%252BmticyNfz0Z%252B%252F%252B2X9JuXnkfdTGvQH4%252FaasHH4URsW22DNarnwcFxZuMsOer3S%252FTHFlSwH%252F9wvl%252BPGNiufOxWo4RYVeIH76zCISLnrCmBmQ%252F0Z8yT7EIjwfrZGdiV9U4yOCbB3PhRA%253D%253D%23_%3D_&display=page&locale=en_GB&pl_dbl=0">Sign up with Facebook</a>
                    </div>
                    <div className="signup1 bg-black border border-stone-500 p-3 w-80 hover:border-stone-50 rounded-full flex gap-10 ">
                        <img src="https://clipground.com/images/logo-apple-png-7.png" className=" w-8 h-6 pl-2" />
                        <a className=" text-white font-sans font-bold " href="https://appleid.apple.com/auth/authorize?response_type=code&response_mode=form_post&client_id=com.spotify.accounts&state=AQDJIFYGSW9eaD%2Bo9jf6AL0RCZidyPMm0IXFq2JaLqYp4BwwYBX0%2FM0H279jIciLsoj49b3fWES%2FGOe%2FlgYF5WbwpnwUGI3u7qOAVyyzaWaAguRaTHx7oF%2FWn0jFTG8B154f8suLMQB%2BYtEOdXVwECN0AlDyoboTPnjQvgK8CkAjD5XlA6IFd2t2K7fp0W428Kz6sMAmR%2B7VfOpT%2Bgh5ipI0mnutiIw0I2FliifZZIhkRBJY%2Bu7vIo6Im1uuuh9D7%2BAF9T1e6lqzJ6oQS0k8977BY%2BegF7E5oJGMnAP4uqoM3OjiGzXMSi9y5Ap4gFOvvVvdYgTwgW%2BZTxrb%2FuxpE5jCrMj%2BZnCHWOyV9zc%2B2X9ZH8DbrAc6jMjfwqu3u94F4251Gp9u8IOoq1uHdArUc0dI8coYJANvF91cTw%2BcZtMthOvAjjS5BhTBAkFztU2iifyuA260WvT8aFwgEg4lK2vcCWSryS35jM5Klj56jP%2BN5ebmgLSWe8qwbg5y5S5pp6Ww%2BqbSGbaC9O0aqw%3D%3D&scope=name+email&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fapple%2Fredirect%2Fsignup">Sign up with Apple</a>
                    </div>
                </div>
                <hr className=" w-80"></hr>
                <div className=" flex gap-2">
                    <p className=" text-stone-400 font-sans">Already have an account?</p><a className=" text-white underline underline-offset-1" href="./login"> Log in here</a>
                </div>
                <div>
                    <p className=" text-xs text-stone-400 text-center pb-5">This site is protected by reCAPTCHA and the Google<br />
                        Privacy Policy and Terms of Service apply</p>
                </div>
            </div>
        </>
    )
}
