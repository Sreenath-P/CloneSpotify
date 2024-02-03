// import spotify from "../assets/spt.png";
import React,{ useState, useEffect } from "react";
import sp2 from "../assets/image/spotify.png"
import arrow from "../assets/image/r.svg"
import edit from "../assets/image/edit_FILL0_wght400_GRAD0_opsz24.svg";
import sp3 from "../assets/image/social.png"
import recover from "../assets/image/refresh_FILL0_wght400_GRAD0_opsz24.svg";
import address from "../assets/image/home_FILL0_wght400_GRAD0_opsz24.svg";
import order from "../assets/image/article_FILL0_wght400_GRAD0_opsz24.svg";
import payment from "../assets/image/credit_card_FILL0_wght400_GRAD0_opsz24.svg";
import redeem from "../assets/image/redeem_FILL0_wght400_GRAD0_opsz24.svg";
import manage from "../assets/image/apps_FILL0_wght400_GRAD0_opsz24.svg";
import notification from "../assets/image/notifications_FILL0_wght400_GRAD0_opsz24.svg";
import privacy from "../assets/image/lock_FILL0_wght400_GRAD0_opsz24.svg";
import login from "../assets/image/edit_note_FILL0_wght400_GRAD0_opsz24.svg";
import device from "../assets/image/devices_FILL0_wght400_GRAD0_opsz24.svg";
import arrow2 from "../assets/image/arrow_forward_FILL0_wght400_GRAD0_opsz24.svg";
import help from "../assets/image/help_FILL0_wght400_GRAD0_opsz24.svg";
import diamond from "../assets/image/diamond_FILL0_wght400_GRAD0_opsz24.svg";
import sp4 from "../assets/image/iconmonstr-spotify-1.svg";
import logo from "../assets/image/logo.png";
import user from "../assets/image/account_circle_FILL0_wght400_GRAD0_opsz24.svg";


import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';







function Account() {

   useEffect(() => {
      document.querySelector("#main2").style.display = "none";
  })


   const [dp, setDp] = useState(false);
   document.body.style.backgroundColor = "black"


   const [nav, setNav] = useState(false)
   const handleClick = () => setNav(!nav)

  


   return (
      <>
      <div className=" h-screen">
<div className="w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
      <div>
        <img className="h-12 "
          src={logo}
          alt="My Logo"
          style={{ width: "200px" }}
        />
        
      </div>
      {/* Menu */}
        <ul className=" hidden  laptops:visible gap-4">
        <li>
        <Link  to="home"  smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li>
        <Link  to="about"  smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li>
        <Link  to="education"  smooth={true} duration={500}>
          Education
        </Link>
        </li>
        <li>
        <Link  to="skills"  smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li>
        <Link  to="projects"  smooth={true} duration={500}>
          Projects
        </Link>
        </li>
        <li>
        <Link  to="contact"  smooth={true} duration={500}>
          Contact
        </Link>
        </li>
        </ul>

      {/* Menu Icons*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-20 right-0 w-full h-96 bg-black flex flex-col  items-center'}>
        <li className="py-2 text-2xl mt-2">
        <Link  onClick={handleClick} to="home"  smooth={true} duration={500}>
          Premium
        </Link>
        </li>
        <li className="py-2 text-2xl">
        <Link onClick={handleClick} to="about"  smooth={true} duration={500}>
          Support
        </Link>
        </li>
        <li className="py-2 text-2xl">
        <Link onClick={handleClick} to="education"  smooth={true} duration={500}>
          Download
        </Link>
        </li>
        <li className="py-2 text-2xl">
        <Link onClick={handleClick} to="skills"  smooth={true} duration={500}>
          Profile
        </Link>
        </li>
        <li className="py-2 text-2xl">
        <Link onClick={handleClick} to="projects"  smooth={true} duration={500}>
          Account
        </Link>
        </li>
        <li className="py-2 text-2xl">
        <Link onClick={handleClick} to="contact"  smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

    </div>

  



         <div className=" text-white flex-justify-center ">


            {/* <div className="bg-white text-black h-20"> </div> */}


            <div className="flex h-72 w-3/6 flex-justify-center mx-auto mt-10 gap-5">
               <div className="w-3/5 bg-neutral-800 rounded-xl flex flex-col  ring-2 ring-white  hover:bg-neutral-900 ">
                  <div className=" flex flex-row justify-between mt-2">
                     <div className="w-26 text-white ml-3 text-sm ">Your Plan <br /><p className="text-2xl font-sans font-bold text-gray-300">Spotify Free</p></div>
                     <div className="w-26 ">
                        <img className="mobiles:hidden mr-2 mt-2 h-9 w-9" src={sp3} alt=""  />
                     </div>

                  </div>
                  <div className=" flex flex-row justify-end items-end flex-grow mr-2 p-5">
                     <button class="h-7 w-40 rounded-full ring-1 ring-white ring-opacity-2">

                        Explore Plans
                     </button>
                  </div>
               </div>
               <div className="diamond w-2/5 from-rose-400 bg-violet-700 rounded-xl bg-gradient-to-tr bg-gad flex justify-center items-center hover:from-rose-700 flex-col  ">
                  <img className=" h-20 w-20 " src={diamond} alt="" />
                  <div className="text-xs">Join Premium</div>

               </div>
            </div>


            <div className=" bg-neutral-800 h-full w-3/6 flex-justify-center grid mx-auto mt-10 gap-4">
               <h1 className="px-5 pt-4 font-bold " >Account</h1>

               <div className=" flex hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-8 w-8 " src={sp4} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Manage Your Plan</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>
               <div className=" flex hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={edit} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Edit Profile</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>
               <div className=" flex hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={recover} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Recover Playlists</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>
               <div className=" flex mb-4 hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={address} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Address</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>


            </div>

            <div className=" bg-neutral-800 h-full w-3/6 flex-justify-center grid mx-auto mt-10 gap-4">
               <h1 className="px-5 pt-4 font-bold" >Payment</h1>

               <div className=" flex hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={order} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Order history</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>
               <div className=" flex hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={payment} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Saved payment cards</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>
               <div className=" flex mb-4 hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={redeem} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Redeem</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>



            </div>

            <div className=" bg-neutral-800 h-full w-3/6 flex-justify-center grid mx-auto mt-10 gap-4">
               <h1 className="px-5 pt-4 font-bold" >Security and privacy</h1>

               <div className=" flex hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={manage} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Manage apps</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>
               <div className=" flex hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={notification} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Notification settings</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>
               <div className=" flex hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={privacy} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">privacy settings</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>
               <div className=" flex hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={login} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Edit login methods</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>
               <div className=" flex hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={device} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Set device password</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>
               <div className=" flex mb-4 hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={arrow2} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Sign out everywhere</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>



            </div>

            <div className=" bg-neutral-800 h-full w-3/6 flex-justify-center grid mx-auto mt-10 gap-4 mb-10">
               <h1 className="px-5 pt-4 font-bold" >Help</h1>

               <div className=" flex mb-4 hover:bg-neutral-700">

                  <div className="ml-2"><img className="h-9 w-9" src={help} alt="" /></div>
                  <div className=" ml-10 mt-1  text-white flex-grow">Spotify support</div>
                  <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

               </div>

            </div>
         </div>
         </div>

      </>

   )
}
export default Account;