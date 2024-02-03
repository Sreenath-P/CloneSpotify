import before from "../assets/images/before.svg"
import after from "../assets/images/after.svg"
import pl1 from "../assets/images/pl1.jpg"
import { Link } from "react-router-dom";
import bell from "../assets/images/bell.svg"
import dwnld from "../assets/images/dwnld.svg"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiOutlineExternalLink } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


import f1 from "/src/assets/rhd.jpeg"
import f2 from "/src/assets/hmch.jpeg"
import f3 from "/src/assets/tch.jpeg"
import f4 from "/src/assets/dmm.jpeg"
import f5 from "/src/assets/Smile.png"
import f6 from "/src/assets/cv.jpg"
import f7 from "/src/assets/Happy.jpg"
import s1 from "/src/assets/hvm.jpeg"
import s2 from "/src/assets/mt.jpeg"
import s3 from "/src/assets/mm.jpeg"
import s4 from "/src/assets/me.jpeg"
import s5 from "/src/assets/hh.jpeg"
import s6 from "/src/assets/sc.jpg"
import s7 from "/src/assets/ml.jpg"
import t1 from "/src/assets/tnm.jpeg"
import t2 from "/src/assets/hhh.jpeg"
import t3 from "/src/assets/bc.jpeg"
import t4 from "/src/assets/tni.jpeg"
import t5 from "/src/assets/kc.jpeg"
import t6 from "/src/assets/mh.jpg"
import t7 from "/src/assets/tl.jpg"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Homenew() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <>
      <div className=" search text-white w-full h-full relative overflow-y-auto rounded-lg">
        <div className=" search text-white w-full h-full relative overflow-y-auto">
          <div className="top-0 rounded-t-lg bg-neutral-900 flex gap-3 h-16 box-border pt-3 pl-6 font-sans font-bold z-10 fixed w-full mt-2">


            <div className="bg-black h-10 w-10 rounded-full">
              <Link className="opacity-60 hover:opacity-100 duration-200">
                <img src={before} alt="" className=" h-10" />
              </Link>
            </div>
            <div className="bg-black h-10 w-10 rounded-full">
              <Link to="/searchnew" className="opacity-60 hover:opacity-100 duration-200">
                <img src={after} alt="" className=" h-10" />
              </Link>
            </div>


            <div className="bg-black h-[31px] w-max rounded-2xl ">
              <Link to="https://www.spotify.com/in-en/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade&ref=web_loggedin_upgrade_button" className=" no-underline flex items-center text-black">
                <button className='bg-white rounded-full font-bold px-2 p-1 text-sm'>Explore Premium</button>
              </Link>
            </div>


            <div className="bg-black h-[31px] w-max rounded-2xl ">
              <Link className=" no-underline flex items-center">
                <img src={dwnld} alt="" className=" h-5 p-1.5" />
                <h1 className=" font-sans text-sm pr-4  text-white ">Install App</h1>
              </Link>
            </div>

            <div className="bg-black h-[31px] w-[31px] rounded-full">
              <Link className="opacity-60 hover:opacity-100 duration-200">
                <img src={bell} alt="" className=" h-5 p-1.5" />
              </Link>
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className=" dwnld  text-black  rounded-full bg-green-400 border-4 border-black box-border w-[31px] h-[31px] aspect-square">
                  <h1 className=" text-sm">R</h1>
                  {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/account">
                          <a
                            href="#"
                            className={classNames(
                              active ? 'flex no-underline bg-neutral-700 text-gray-100' : 'text-white no-underline flex',
                              'block px-4 py-2 text-sm'
                            )}

                          >
                            <div>Account</div>
                            <div><HiOutlineExternalLink
                              size={20}
                              className="cursor-pointer pl-28"
                            />
                            </div>

                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/profile">
                          <a
                            href="#"
                            className={classNames(
                              active ? 'no-underline bg-neutral-700 text-gray-100' : 'text-white no-underline',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            profile

                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="https://www.spotify.com/in-en/premium/?ref=web_loggedin_upgrade_menu"
                          className={classNames(
                            active ? ' flex no-underline bg-neutral-700 text-gray-100' : 'text-white no-underline flex',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <div>Upgrade to Premium</div>
                          <div><HiOutlineExternalLink
                            size={20}
                            className="cursor-pointer pl-8"
                          />
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/support">
                          <a
                            href="#"
                            className={classNames(
                              active ? 'no-underline bg-neutral-700 text-gray-100' : 'text-white no-underline',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Support
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    {/* <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="submit"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block w-full px-4 py-2 text-left text-sm'
                                                    )}
                                                >
                                                    Sign out
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </form> */}
                    <hr className="w-full pr-1 box-border opacity-10 " />
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'no-underline bg-neutral-700  text-gray-100' : 'text-white no-underline ',
                            'block px-4 py-2 text-sm'
                          )}
                          onClick={logout}
                        >
                          Log out
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* <div className=" h-10 bg-zinc-800 rounded-full ipsearch tablets:w-80 mobiles: w-44">
                                            <img src={search} alt="" className=" relative top-2 pl-3" />
                                            <input className=" tablets:w-52 mobiles:w-20 font-sans text-xs font-semibold bg-transparent border-none outline-0 text-white" type="search" placeholder="What do you want to litsen to?" />
                                        </div> */}
            {/* 
                                        <div className=" text-end pt-2  ">
                                            <Link to="" className="no-underline opacity-60 hover:opacity-100 duration-200 text-white"><p className="">Sign up</p></Link>
                                        </div>
                                        <div className=" text-end pt-2">
                                            <Link to="" className="no-underline opacity-60 hover:opacity-100 duration-200   text-white"><p className="">Log in</p></Link>
                                        </div> */}
          </div>


          <div className="lists overflow-hidden">

            <div className="search-main bg-neutral-900 h-full p-3 font-sans mt-14 ">

              <div className="search-main bg-neutral-900  p-3  font-sans ">

                <div>


                  <div className="  text-xl">
                    <div className=" w-screen   text-white text-3xl pt-2 "><b>Good Morning</b></div><br></br>
                    <div className="h-auto w-auto   gap-x-2 gap-y-2  grid-cols-3  desktop:grid-cols-3 laptops:grid-cols-3 tablets:grid-cols-3 mobiles:grid-cols-2 grid">
                     <Link to="p1"> <div className=" song h-14 flex bg-neutral-700 hover:bg-neutral-800 duration-500 rounded-md text-white  "><img src="/src/assets/nivin.avif" alt="" className="h-14 w-14  pr-2 box-content" /> <h1 className="pt-2 text-base font-sans">Premam x kadhal</h1> </div></Link>
                     <Link to="p2">  <div className=" song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/feelgood.jpg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-base font-sans">Feel Good Songs</h1></div></Link>
                     <Link to="p3"> <div className=" song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/atm.jpg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-base font-sans ">Any Time Hits</h1></div></Link>

                     <Link to="p4"> <div className="song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/ln.webp" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-base font-sans">Lonely Hits</h1></div></Link>
                     <Link to="p5"> <div className="song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/trt.jpeg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-base font-sans">Tamil Road Trips</h1></div></Link>
                     <Link to="p6"> <div className="song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white"><img src="/src/assets/MPS.jpg" alt="" className="h-14 w-14 pr-2 box-content " /><h1 className="pt-2 text-base font-sans">Malayalam Songs</h1></div></Link>
                    </div>
                  </div>
                  <div className="text-white text-2xl m-5 "><b>Made For You</b></div>
                  <div className="desktop:grid-cols-7 laptops:grid-cols-5 tablets:grid-cols-4 mobiles:grid-cols-2 grid gap-8">
                    <Link to="/p6">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={f1} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5 text-decoration-line:none;">Raw Hits</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs text-decoration-line: none;">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>


                    <Link to="/p5">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 no-underline delay-50 duration-100  p-5 rounded-lg w-60 group" href="">


                          <img src={f2} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Ham radio</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p1">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100 p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={f3} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Top club</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p3">
                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={f4} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Daily Mix 1</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>

                    <Link to="/p6">
                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={f5} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Smile vol 1</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p4">
                      <div class=" flex items-center justify-center bg-gray-800 h-max  ">

                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100 p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={f6} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Chill Vibes</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>

                    <Link to="/p2">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={f7} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Happy Dance</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>


                  </div>



                  <div className="text-white text-2xl m-5"><b>Fresh new music</b></div>
                  <div className="desktop:grid-cols-7 laptops:grid-cols-5 tablets:grid-cols-4 mobiles:grid-cols-2 grid gap-8">
                    <Link to="/p3">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={s1} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Happy Vibes </h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>

                    <Link to="/p4">


                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={s2} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5"> Trending KOK</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p5">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={s3} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Monsoon Songs</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p6">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={s4} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Malayalam Hits</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p1">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={s5} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Hot Hits</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p2">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={s6} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Sunset Chill</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p3">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={s7} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Malayalam Lofi</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                  </div>
                  <div className="text-white text-2xl m-5"><b>Today's Biggest Hits</b></div>
                  <div className="desktop:grid-cols-7 laptops:grid-cols-5 tablets:grid-cols-4 mobiles:grid-cols-2 grid gap-8">
                    <Link to="/p4">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={t1} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Trending Now</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p5">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={t2} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Hindi Hits</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p6">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={t3} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Bollywood</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p5">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={t4} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Trending India</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p4">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={t5} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Kollywood Hits</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p3">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={t6} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Malayalam Hits</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                    <Link to="/p2">

                      <div class=" flex items-center justify-center bg-gray-800 h-max ">


                        <a class="hover:bg-zinc-700 bg-zinc-800 delay-50 duration-100  p-5 rounded-lg w-60 group no-underline" href="">


                          <img src={t7} class="w-full rounded shadow" />


                          <h3 class="text-gray-200 font-bold mt-5">Tamil Lofi</h3>


                          <p class="text-neutral-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                        </a>

                      </div>
                    </Link>
                  </div>







                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Homenew;