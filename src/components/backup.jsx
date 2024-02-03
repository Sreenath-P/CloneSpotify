import before from "../assets/images/before.svg"
import after from "../assets/images/after.svg"
import pl1 from "../assets/images/pl1.jpg"
import { Link } from "react-router-dom";

import search from "../assets/images/search.svg"

import logo from "../assets/images/logo.png"


function Home() {
    return (
        <>
            {/* <div className="  home  text-white w-full bg-red mt-1 ">  */}

            {/* <div className=" rounded-t-lg bg-neutral-900 flex gap-3 h-16 box-border pt-3 pl-6 font-sans font-bold z-10 absolute top-0">


                <div className="bg-black h-10 w-10 rounded-full">
                   <Link className="opacity-60 hover:opacity-100 duration-200">
                    <img src={before} alt="" className=" h-10" />
                   </Link>
                </div>
                <div className="bg-black h-10 w-10 rounded-full">
                <Link className="opacity-60 hover:opacity-100 duration-200">
                    <img src={after} alt="" className=" h-10" />
                   </Link>
                </div>
                <div className=" text-end pt-2 ">
                    <Link to="" className="no-underline opacity-60 hover:opacity-100 duration-200   text-white"><p className="">Sign up</p></Link>
                </div>
                <div className=" text-end pt-2">
                    <Link to="" className="no-underline opacity-60 hover:opacity-100 duration-200   text-white"><p className="">Log in</p></Link>
                </div>
                </div> */}


            {/* <div className="lists overflow-y-scroll"> */}





            {/* 
                </div>
                </div> */}


            <div className=" search text-white w-full h-full relative overflow-y-auto rounded-lg ">
                <div className=" rounded-t-lg bg-neutral-900 flex gap-3 h-16 box-border pt-3 pl-6 font-sans font-bold z-10 fixed w-full ">


                    <div className="bg-black h-10 w-10 rounded-full">
                        <Link className="opacity-60 hover:opacity-100 duration-200">
                            <img src={before} alt="" className=" h-10" />
                        </Link>
                    </div>
                    <div className="bg-black h-10 w-10 rounded-full">
                        <Link className="opacity-60 hover:opacity-100 duration-200">
                            <img src={after} alt="" className=" h-10" />
                        </Link>
                    </div>

                    {/* <div className=" h-10 bg-zinc-800 rounded-full ipsearch tablets:w-80 mobiles: w-44">
                        <img src={search} alt="" className=" relative top-2 pl-3" />
                        <input className=" tablets:w-52 mobiles:w-20 font-sans text-xs font-semibold bg-transparent border-none outline-0 text-white" type="search" placeholder="What do you want to litsen to?" />
                    </div> */}

                    <div className=" text-end pt-2  ">
                        <Link to="signup" className="no-underline opacity-60 hover:opacity-100 duration-200 text-white"><p className="">Sign up</p></Link>
                    </div>
                    <div className=" text-end pt-2">
                        <Link to="login" className="no-underline opacity-60 hover:opacity-100 duration-200   text-white"><p className="">Log in</p></Link>
                    </div>
                </div>


                {/* <div className="lists overflow-hidden "> */}

                    {/* <div className="search-main bg-neutral-900 h-full p-3 font-sans  "> */}

                        {/* <div className="search-main bg-neutral-900  p-3  font-sans "> */}

                            <div>


                                {/* <div className=" bg-gradient-to-b from-indigo-950 via-indigo-900 to-black text-xl">
                                    <div className=" w-screen   text-white text-3xl pt-2 "><b>Good Morning</b></div><br></br>
                                    <div className="h-auto w-auto   gap-x-2 gap-y-2  grid-cols-3  desktop:grid-cols-3 laptops:grid-cols-3 tablets:grid-cols-3 mobiles:grid-cols-2 grid">
                                        <div className=" song h-14 flex bg-neutral-700 hover:bg-neutral-800 duration-500 rounded-md text-white  "><img src="/src/assets/nivin.avif" alt="" className="h-14 w-14  pr-2 box-content" /> <h1 className="pt-2 text-lg font-sans">Premam x kadhal</h1> </div>
                                        <div className=" song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/feelgood.jpg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-lg font-sans">Feel Good Songs</h1></div>
                                        <div className=" song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/atm.jpg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-lg font-sans ">Any Time Hits</h1></div>

                                        <div className="song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/ln.webp" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-lg font-sans">Lonely Hits</h1></div>
                                        <div className="song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/trt.jpeg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-lg font-sans">Tamil Road Trips</h1></div>
                                        <div className="song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white"><img src="/src/assets/MPS.jpg" alt="" className="h-14 w-14 pr-2 box-content " /><h1 className="pt-2 text-lg font-sans">Malayalam Party Songs</h1></div>
                                    </div>
                                </div>
                                <div className="text-white text-2xl m-5 "><b>Made For You</b></div>
                                <div className="desktop:grid-cols-7 laptops:grid-cols-5 tablets:grid-cols-4 mobiles:grid-cols-2 grid gap-x-6">
                                    <div className="bg-neutral-900 hover:bg-neutral-800 rounded-md h-72 w-auto">
                                        <img src="/src/assets/dw.jpeg" alt="" className="rounded-md w-fit" />
                                        <b>Discover Weekly</b><p className=" text-gray-400">Your weekly mixtape of fresh music.Updates every Monday.</p>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className=" p-3 "><img src="/src/assets/rhd.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b> Raw hardstyle Daily</b><br></br><p className=" text-gray-400">

                                            Hardstyle at its best. All the best Hardstyle Bangers! </p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3 "><img src="/src/assets/hmch.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b>Ham radio club House</b><br></br><p className=" text-gray-400">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs. </p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3 "><img src="/src/assets/tch.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b> Top club Hits</b><br></br><p className=" text-gray-400">Evergreen Hit Meledios of Malayalam</p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3 w"><img src="/src/assets/dmm.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b>Daily Mix 1</b><br></br><p className=" text-gray-400">Elton John, Bryan Adams, Jim Horn and more</p></div>
                                    </div>

                                </div>
                                <div className="text-white text-2xl m-5"><b>Fresh new music</b></div>
                                <div className="desktop:grid-cols-7 laptops:grid-cols-5 tablets:grid-cols-3 mobiles:grid-cols-2 grid m-4 gap-x-6 ">
                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3  "><img src="/src/assets/hvm.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className="m-3"><b>Vibes Malayalam</b><br></br><p className=" text-gray-400">It's time to vibe to these happy hits from Mollywood!</p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className=" p-3 "><img src="/src/assets/mt.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b>Malayalam trending</b><br></br><p className=" text-gray-400">Handpicked from latest and trending malayalam songs</p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3 "><img src="/src/assets/mm.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b>Monsoon Malayalam</b><br></br><p className=" text-gray-400">Catch the latest songs from Malayalam !</p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3 "><img src="/src/assets/me.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b> Malayalam Hits</b><br></br><p className=" text-gray-400">Evergreen Hit Meledios of Malayalam</p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3 w"><img src="/src/assets/hh.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b>Hot Hits</b><br></br><p className=" text-gray-400">Catch the hottest Malayalam tracks here !</p></div>
                                    </div>

                                </div>
                                <div className="text-white text-2xl m-5"><b>Today's Biggest Hits</b></div>
                                <div className="desktop:grid-cols-7 laptops:grid-cols-5 tablets:grid-cols-3 mobiles:grid-cols-2 grid m-4 gap-x-6 ">
                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3  "><img src="/src/assets/tnm.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className="m-3"><b>Trending Now Malayalam</b><br></br><p className=" text-gray-400">Every song that's Trending NOW from Mollywood! Cover: King of Kotha</p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className=" p-3 "><img src="/src/assets/hhh.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b>Hot Hits Hindi</b><br></br><p className=" text-gray-400">Hottest Hindi music served here. Cover - Animal</p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3 "><img src="/src/assets/bc.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b>Bollywood Central</b><br></br><p className=" text-gray-400">Bollywood Central, jab baje toh seedha dil ke centre mein lage ❤️ Cover - Animal</p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3 "><img src="/src/assets/tni.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b>Trending Now India</b><br></br><p className=" text-gray-400">Every track you're listening/should be listening to ;Cover- Animal</p></div>
                                    </div>



                                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                                        <div className="  p-3 w"><img src="/src/assets/kc.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                                        <div className=" m-3"><b>Kollywood Cream</b><br></br><p className=" text-gray-400">Finest collection of Tamil Music from the past 10 years Cover : Jailer</p></div>
                                    </div>

                                </div> */}




                                <div className=" search text-white w-full h-full relative overflow-y-auto">
                                    <div className="top-0 rounded-t-lg bg-neutral-900 flex gap-3 h-16 box-border pt-3 pl-6 font-sans font-bold z-10 fixed w-full">


                                        <div className="bg-black h-10 w-10 rounded-full">
                                            <Link className="opacity-60 hover:opacity-100 duration-200">
                                                <img src={before} alt="" className=" h-10" />
                                            </Link>
                                        </div>
                                        <div className="bg-black h-10 w-10 rounded-full">
                                            <Link className="opacity-60 hover:opacity-100 duration-200">
                                                <img src={after} alt="" className=" h-10" />
                                            </Link>
                                        </div>

                                        <div className=" h-10 bg-zinc-800 rounded-full ipsearch tablets:w-80 mobiles: w-44">
                                            <img src={search} alt="" className=" relative top-2 pl-3" />
                                            <input className=" tablets:w-52 mobiles:w-20 font-sans text-xs font-semibold bg-transparent border-none outline-0 text-white" type="search" placeholder="What do you want to litsen to?" />
                                        </div>

                                        <div className=" text-end pt-2  ">
                                            <Link to="" className="no-underline opacity-60 hover:opacity-100 duration-200 text-white"><p className="">Sign up</p></Link>
                                        </div>
                                        <div className=" text-end pt-2">
                                            <Link to="" className="no-underline opacity-60 hover:opacity-100 duration-200   text-white"><p className="">Log in</p></Link>
                                        </div>
                                    </div>


                                    <div className="lists overflow-hidden">

                                        <div className="search-main bg-neutral-900 h-full p-3 font-sans mt-20 ">

                                            <div className="search-main bg-neutral-900  p-3  font-sans ">

                                                <div>

                                                    {/* <div className="h-screen w-screen bg-black text-white"> */}

                                                    <div className=" bg-gradient-to-b from-indigo-950 via-indigo-900 to-black text-xl">
                                                        <div className=" w-screen   text-white text-3xl pt-2 "><b>Good Morning</b></div><br></br>
                                                        <div className="h-auto w-auto   gap-x-2 gap-y-2  grid-cols-3  desktop:grid-cols-3 laptops:grid-cols-3 tablets:grid-cols-3 mobiles:grid-cols-2 grid">
                                                            {/* <div className=" song h-10  flex rounded-lg "><img src="/src/assets/nivin.avif" alt="" className="h-10 w-10" /> <div className="flex bg-white opacity-30 hover:opacity-60 text-black pl-2"><h1>premam x kadhal</h1><button class="h-10 w-10 focus:outline-none rounded-full bg-red-600"></button></div></div> */}
                                                            <div className=" song h-14 flex bg-neutral-700 hover:bg-neutral-800 duration-500 rounded-md text-white  "><img src="/src/assets/nivin.avif" alt="" className="h-14 w-14  pr-2 box-content" /> <h1 className="pt-2 text-lg font-sans">Premam x kadhal</h1> </div>
                                                            <div className=" song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/feelgood.jpg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-lg font-sans">Feel Good Songs</h1></div>
                                                            <div className=" song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/atm.jpg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-lg font-sans ">Any Time Hits</h1></div>

                                                            <div className="song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/ln.webp" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-lg font-sans">Lonely Hits</h1></div>
                                                            <div className="song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white "><img src="/src/assets/trt.jpeg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2 text-lg font-sans">Tamil Road Trips</h1></div>
                                                            <div className="song h-14 flex bg-neutral-700 hover:bg-neutral-800 rounded-md duration-500 text-white"><img src="/src/assets/MPS.jpg" alt="" className="h-14 w-14 pr-2 box-content " /><h1 className="pt-2 text-lg font-sans">Malayalam Songs</h1></div>
                                                        </div>
                                                    </div>
                                                    <div className="text-white text-2xl m-5 "><b>Made For You</b></div>
                                                    <div className="desktop:grid-cols-7 laptops:grid-cols-5 tablets:grid-cols-4 mobiles:grid-cols-2 grid gap-8">
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/rhd.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Raw Hits</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>




                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/hvm.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Ham radio</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>

                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/tch.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Top club</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/dmm.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Daily Mix 1</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/smile.png" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Smile vol 1</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/cv.jpg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Chill Vibes</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/Happy.jpg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Happy Dance</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>

                                                    </div>



                                                    <div className="text-white text-2xl m-5"><b>Fresh new music</b></div>
                                                    <div className="desktop:grid-cols-7 laptops:grid-cols-5 tablets:grid-cols-4 mobiles:grid-cols-2 grid gap-8">

                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/hvm.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Happy Vibes </h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>




                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/mt.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5"> Trending KOK</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>

                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/mm.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Monsoon Songs</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/me.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Malayalam Hits</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/hh.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Hot Hits</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/sc.jpg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Sunset Chill</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/ml.jpg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Malayalam Lofi</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>

                                                    </div>
                                                    <div className="text-white text-2xl m-5"><b>Today's Biggest Hits</b></div>
                                                    <div className="desktop:grid-cols-7 laptops:grid-cols-5 tablets:grid-cols-4 mobiles:grid-cols-2 grid gap-8">

                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/tnm.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Trending Now</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>

                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/hhh.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Hindi Hits</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>

                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/bc.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Bollywood</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/tni.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Trending India</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/kc.jpeg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Kollywood Hits</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/mh.jpg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Malayalam Hits</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                        <div class=" flex items-center justify-center bg-gray-800 h-max ">


                                                            <a class="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 rounded-lg w-60 group" href="">


                                                                <img src="/src/assets/tl.jpg" class="w-full rounded shadow" />


                                                                <h3 class="text-gray-200 font-bold mt-5">Tamil Lofi</h3>


                                                                <p class="text-gray-400 font-light mt-2 text-xs">Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.</p>

                                                            </a>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>




                            </div>





                        </div>
                    {/* </div> */}

                {/* </div> */}


            {/* </div> */}
            {/* </div> */}







        </>
    )
}
export default Home;