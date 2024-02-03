import { useState, useEffect } from "react";
import arrow from "/src/assets/supportimg/arrow.svg"
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import React from 'react';
import axios from 'axios';


function Support() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/api/getusername", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`

      }
    })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
  }, []);
  const getFirstLetterCapitalized = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    document.querySelector("#main2").style.display = "none";
  })
  // document.body.style.backgroundColor = "black";
  const [dp, setDp] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)
  return (
    <>
      <div className=" bg-gradient-to-b from-green-800 via-slate-950 to-black">
        {/* <div className=" h-16 w-auto flex justify-end bg-transparent">
        <div className="pr-72"><img src="/src/assets/supportimg/logo.png" alt="" className="h-14 pt-4  " /></div>

        <div className="grid grid-flow-col justify-stretch  pl-72 gap-x-10">
          <button className="text-white hover:text-green-500"><b>Premium</b></button>
          <button className="text-white hover:text-green-500 "><b>Support</b></button>
          <button className="text-white hover:text-green-500"><b>Download</b></button>
          <div className="text-white pt-5">|</div>
        </div>
        <div className=""><img src="/src/assets/supportimg/acc.svg" alt="" className="h-12 w-auto pt-4 pl-36  hover:fill-green-500" /></div>
        <div className="pt-3">
          <div class="relative inline-block text-left" onClick={() => setDp(!dp)}>
            <div>
              <button type="button" class="inline-flex w-full justify-center gap-x-1.5 bg-transparent px-3 py-2 text-sm font-semibold text-white shadow-sm  hover:text-green-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <b> Profile</b>
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

          </div>
          <div className={`${dp || "hidden"} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">

              <a href="#" class="text-black hover:text-green-600 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account</a>
              <a href="#" class="text-black hover:text-green-600 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Log out</a>


            </div>
          </div>
        </div>
      </div> */}
        <div className="w-full h-[80px] flex justify-between items-center px-4 text-gray-300">
          <div>
            <img className="h-12 " src="/src/assets/supportimg/logo.png"

              alt="My Logo"
              style={{ width: "200px" }}
            />

          </div>
          {/* Menu */}
          <ul className=" hidden  laptops:visible gap-4">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500}>
                Education
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Menu Icons*/}
          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/* Mobile Menu */}
          <ul className={!nav ? 'hidden' : 'absolute top-20 right-0 w-96 h-96  bg-gradient-to-b from-green-800 via-slate-950 to-black flex flex-col  items-center rounded-lg'}>
            <li className="py-2 text-2xl mt-2">
              <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Premium
              </Link>
            </li>
            <li className="py-2 text-2xl">
              <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                Support
              </Link>
            </li>
            <li className="py-2 text-2xl">
              <Link onClick={handleClick} to="education" smooth={true} duration={500}>
                Download
              </Link>
            </li>
            <li className="py-2 text-2xl">
              <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Profile
              </Link>
            </li>
            <li className="py-2 text-2xl">
              <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                Account
              </Link>
            </li>
            <li className="py-2 text-2xl">
              <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>

        </div>

        {/* <div className="text-red-600 pt-20 flex place-content-between">Spotify Content</div> */}

        <div className="flex justify-center pb-8 box-border laptops:w-4/5 laptops:pl-80  ">

          <div className=" pl-28 h-auto w-auto mx-auto">
            <div className="text-gray-400 ">Spotify Support</div>
            <div className="text-white  text-5xl pb-6"><b>How can we help you?</b></div>
            {data?.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex gap-x-2">
                  <img src="/src/assets/supportimg/acc.svg" alt="" className="h-16 w-auto pt-4 " />
                  <h1 className="text-white text-2xl pt-6 "><b>Hello,  {getFirstLetterCapitalized(item.username)}</b></h1>
                </div>

              </React.Fragment>
            ))}

            <div className=" h-10 bg-white  mt-4 flex w-4/5 ">
              <img src="/src/assets/supportimg/search.svg" alt="" className="  pl-3" />
              <input className="font-sans text-xs font-semibold bg-transparent border-none outline-0  " type="search" placeholder="Search" />
            </div>
            <div className="container   gap-3 mobiles:grid-cols-2 desktop:grid-cols-3 laptops:grid-cols-3 tablets:grid-cols-3 grid  justify-evenly w-4/5 pt-6 ">

              <div className="box overflow-hidden tablets:h-24 tablets:w-auto laptops:h-24 laptops:w-auto mobiles:h-24 mobiles:w-auto  bg-pink-600 rounded-md">
                <h2 className="text-white text-xl m-2"><b>Payment Help</b></h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklXL7bUg9123Dlb7uoN-45uyN7jWyVx28hyFrgAPnxOlzqaxjAYPq3HvT3Zck430nPuI&usqp=CAU"
                  className=" h-50 w-50  rotate-45 desktop:pl-40 laptops:px-28  tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-16 mobiles:h-28 mobiles:w-28 box-content  " />
              </div>
              <div className="box overflow-hidden tablets:h-24 tablets:w-auto laptops:h-24 laptops:w-auto mobiles:h-24 mobiles:w-auto bg-blue-500 rounded-md">
                <h2 className="text-white text-xl m-2"><b>Account Help</b></h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklXL7bUg9123Dlb7uoN-45uyN7jWyVx28hyFrgAPnxOlzqaxjAYPq3HvT3Zck430nPuI&usqp=CAU"
                  className=" h-50 w-50  rotate-45 desktop:pl-40 laptops:px-28  tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-16 mobiles:h-28 mobiles:w-28 box-content  " />
              </div>
              <div className="box overflow-hidden tablets:h-24 tablets:w-auto laptops:h-24 laptops:w-auto mobiles:h-24 mobiles:w-auto  bg-pink-900 rounded-md">
                <h2 className="text-white text-xl m-2"><b>Plan Help</b></h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklXL7bUg9123Dlb7uoN-45uyN7jWyVx28hyFrgAPnxOlzqaxjAYPq3HvT3Zck430nPuI&usqp=CAU"
                  className=" h-50 w-50  rotate-45 desktop:pl-40 laptops:px-28  tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-16 mobiles:h-28 mobiles:w-28 box-content  " />
              </div>
              <div className="box overflow-hidden tablets:h-24 tablets:w-auto laptops:h-24 laptops:w-auto mobiles:h-24 mobiles:w-auto bg-orange-600 rounded-md">
                <h2 className="text-white text-xl m-2"><b>App Help</b></h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklXL7bUg9123Dlb7uoN-45uyN7jWyVx28hyFrgAPnxOlzqaxjAYPq3HvT3Zck430nPuI&usqp=CAU"
                  className=" h-50 w-50  rotate-45 desktop:pl-40 laptops:px-28  tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-16 mobiles:h-28 mobiles:w-28 box-content  " />
              </div>
              <div className="box overflow-hidden tablets:h-24 tablets:w-auto laptops:h-24 laptops:w-auto mobiles:h-24 mobiles:w-auto bg-teal-800  rounded-md">
                <h2 className="text-white text-xl m-2"><b>Device Help</b></h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklXL7bUg9123Dlb7uoN-45uyN7jWyVx28hyFrgAPnxOlzqaxjAYPq3HvT3Zck430nPuI&usqp=CAU"
                  className=" h-50 w-50  rotate-45 desktop:pl-40 laptops:px-28  tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-16 mobiles:h-28 mobiles:w-28 box-content  " />
              </div>
              <div className="box overflow-hidden tablets:h-24 tablets:w-auto laptops:h-24 laptops:w-auto mobiles:h-24 mobiles:w-auto  bg-stone-500 rounded-md">
                <h2 className="text-white text-xl m-2"><b>Safety & Privacy</b></h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklXL7bUg9123Dlb7uoN-45uyN7jWyVx28hyFrgAPnxOlzqaxjAYPq3HvT3Zck430nPuI&usqp=CAU"
                  className=" h-50 w-50  rotate-45 desktop:pl-40 laptops:px-28  tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-16 mobiles:h-28 mobiles:w-28 box-content  " />
              </div>




            </div>




          </div>


        </div>
      </div>


      <div className="bg-neutral-800 ">
        <div className=" bg-neutral-800 h-full w-3/6 flex-justify-center grid mx-auto  gap-4">
          <h1 className="px-5 pt-4 font-bold text-white text-3xl ml-6 " >Quick Help</h1>

          <div className=" flex hover:underline">


            <div className=" ml-10 mt-1  text-white flex-grow text-lg hover:underline">Can't remember the login details</div>
            <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

          </div>
          <div className=" flex hover:bg-neutral-800">


            <div className=" ml-10 mt-1  text-white flex-grow text-lg hover:underline">Payment Methods</div>
            <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

          </div>
          <div className=" flex hover:bg-neutral-800">


            <div className=" ml-10 mt-1  text-white flex-grow text-lg hover:underline">Price Updates</div>
            <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

          </div>
          <div className=" flex mb-4 hover:bg-neutral-800">

            <div className=" ml-10 mt-1  text-white flex-grow text-lg hover:underline">Spotify's 2023 Wrapped FAQ</div>
            <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

          </div>
          <div className=" flex mb-4 hover:bg-neutral-800">

            <div className=" ml-10 mt-1  text-white flex-grow text-lg hover:underline">Can't reset password</div>
            <div className=""><img src={arrow} alt="" className="h-10 w-10" /></div>

          </div>


        </div>
        <div className="bg-neutral-950 h-72">
          <div className="text-white flex justify-center text-5xl pt-20">
            <h1 >Visit Our Community</h1>

          </div>
          <div className="text-white flex justify-center text-xl pt-6">
            <h1 >Have questions? Find answers from our worldwide Community of expert fans!</h1>

          </div>
          <div className=" flex justify-center text-xl pt-6 ">
            <button class="bg-green-500 hover:bg-green-600 rounded-full p-2">
              Go to Community
            </button>

          </div>

        </div>
        <div className=''>
          <div className=" laptops:flex laptops:flex-row laptops:gap-96 bg-black mobiles:flex mobiles:flex-col tablets:flex tablets:flex-row tablets:gap-96">
            <div className="  laptops:flex laptops:gap-44 bg-black mobiles:gap-10 tablets:flex tablets:flex-row tablets:gap-10">
              <div className="flex flex-col gap-2 pt-7 font-semibold text-stone-400 bg-black pl-3 pb-5">
                <p className=" text-white tex">Company</p>
                <p className="hover:text-green-500 ">About</p>
                <p className="hover:text-green-500 ">Jobs</p>
                <p className="hover:text-green-500 ">For the Record</p>
              </div>

              <div className="flex flex-col gap-2 pt-7 font-semibold text-stone-400 bg-black pl-3 pb-5">
                <p className=" text-white">Communities</p>
                <p className="hover:text-green-500 ">For Artists</p>
                <p className="hover:text-green-500 ">Developers</p>
                <p className="hover:text-green-500 ">Advertising</p>
                <p className="hover:text-green-500 ">Investors</p>
                <p className="hover:text-green-500 ">Vendors</p>
              </div>

              <div className="flex flex-col gap-2 pt-7 font-semibold text-stone-400 bg-black pl-3 pb-5">
                <p className=" text-white">Useful links</p>
                <p className=" hover:text-green-500">Support</p>
                <p className="hover:text-green-500">Free Mobile App</p>
              </div>
            </div>
            <div className=" bg-black flex gap-4 pt-5 w-auto mobiles:pb-5 mobiles:pl-5">
              <a href='https://www.instagram.com/spotify/'> <img src="https://icon-library.com/images/instagram-icon-png-white/instagram-icon-png-white-2.jpg" className=" h-9 w-9 hover:bg-stone-500 bg-stone-700 rounded-full p-2" /></a>
              <a href='https://twitter.com/spotify'><img src="https://icon-library.com/images/twitter-icon-white-png/twitter-icon-white-png-10.jpg" className=" h-9 w-9 hover:bg-stone-500 bg-stone-700 rounded-full p-2" /></a>
              <a href='https://www.facebook.com/Spotify'><img src="https://icon-library.com/images/facebook-xxl_22129.png" className=" h-9 w-9 hover:bg-stone-500 bg-stone-700 rounded-full p-2" /></a>
            </div>
          </div>

          <hr className=" w-full bg-black"></hr>
          <div className="flex flex-row laptops:gap-10 pt-7 font-semibold text-stone-400 bg-black pl-3 pb-5 laptops:flex laptops:flex-row mobiles:flex mobiles:flex-col mobiles:gap-2 tablets:flex tablets:flex-row tablets:gap-8">
            <p className=" hover:text-green-500">Legal</p>
            <p className=" hover:text-green-500">Privacy Center</p>
            <p className=" hover:text-green-500">Privacy Policy</p>
            <p className=" hover:text-green-500">Cookies</p>
            <p className=" hover:text-green-500">About Ads</p>
            <p className=" hover:text-green-500">Accessibility</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Support;