import "../home.css"
function Home() {
    document.body.style.backgroundColor = "black";
    return (
        <>
            {/* <div className="h-8 w-screen bg-slate-300 text-white">abcd</div> */}
            <div className="h-screen w-screen bg-black text-white">

                <div className=" bg-gradient-to-b from-indigo-950 via-indigo-900 to-black text-xl">
                    <div className=" w-screen   text-white text-3xl pt-2 "><b>Good Morning</b></div><br></br>
                    <div className="h-auto w-auto   gap-x-2 gap-y-2  grid-cols-3 grid desktop:grid-cols-3 laptops:grid-cols-3 tablets:grid-cols-3 mobiles:grid-cols-2 grid">
                        {/* <div className=" song h-10  flex rounded-lg "><img src="/src/assets/nivin.avif" alt="" className="h-10 w-10" /> <div className="flex bg-white opacity-30 hover:opacity-60 text-black pl-2"><h1>premam x kadhal</h1><button class="h-10 w-10 focus:outline-none rounded-full bg-red-600"></button></div></div> */}
                        <div className=" song h-14 flex bg-gray-500 hover:bg-gray-400 duration-500 rounded-md text-black  "><img src="/src/assets/nivin.avif" alt="" className="h-14 w-14  pr-2 box-content" /> <h1 className="pt-2">Premam x kadhal</h1> </div>
                        <div className=" song h-14 flex bg-gray-500 hover:bg-gray-400 rounded-md duration-500 text-black "><img src="/src/assets/feelgood.jpg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2">Feel Good Songs</h1></div>
                        <div className=" song h-14 flex bg-gray-500 hover:bg-gray-400 rounded-md duration-500 text-black "><img src="/src/assets/atm.jpg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2">Any Time Hits</h1></div>

                        <div className="song h-14 flex bg-gray-500 hover:bg-gray-400 rounded-md duration-500 text-black "><img src="/src/assets/ln.webp" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2">Lonely Hits</h1></div>
                        <div className="song h-14 flex bg-gray-500 hover:bg-gray-400 rounded-md duration-500 text-black "><img src="/src/assets/trt.jpeg" alt="" className="h-14 w-14  pr-2 box-content" /><h1 className="pt-2">Tamil Road Trips</h1></div>
                        <div className="song h-14 flex bg-gray-500 hover:bg-gray-400 rounded-md duration-500 text-black"><img src="/src/assets/MPS.jpg" alt="" className="h-14 w-14 pr-2 box-content " /><h1 className="pt-2">Malayalam Party Songs</h1></div>
                    </div>
                </div>
                <div className="text-white text-2xl m-5 "><b>Made For You</b></div>
                <div className="desktop:grid-cols-7 laptops:grid-cols-4 tablets:grid-cols-3 mobiles:grid-cols-2 grid m-4 gap-x-6 ">
                    <div className="bg-neutral-900 hover:bg-neutral-800 h-auto w-auto rounded-md">
                        <div className="  p-3  "><img src="/src/assets/dw.jpeg" alt="" className="rounded-md w-auto object-cover" /></div>
                        <div className="m-3"><b>Discover Weekly</b><br></br><p className=" text-gray-400">Your weekly mixtape of fresh music.Updates every Monday.</p></div>
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

                </div>
                </div>



        </>
    )
}

export default Home;








  {/* <div className=" lib relative w-full  bg-neutral-900 top-40 mt-1 rounded-lg">

        <div className="library bg-neutral-900 flex gap-4 p-4 box-border border-2 rounded-lg  font-bold font-sans w-full absolute h-20 bg-slate-300">
                
            <div className=" opacity-60 hover:opacity-100 duration-200">
            <Link to="/" className="no-underline  text-white flex"><img src={librarys} alt="" className="h-8 "/><p className="  pl-4 text-lg/[30px] ">Your Library</p></Link>
            </div>

            <div className="opacity-60 hover:opacity-100 duration-200 pl-9 pt-1">
            <Link to="/" className="no-underline text-white  flex"><img src={add} alt="" className="h-6 "/></Link> 
            </div>
            <div className="opacity-60 hover:opacity-100 duration-200 pt-1">
            <Link to="/" className="no-underline text-white  flex"><img src={rightarrow} alt="" className="h-6 "/></Link> 
            </div>

        </div>

        <div className="lists overflow-y-scroll">kljlkjlk</div>

               
        <div className="search-main bg-neutral-900 h-screen p-3 mt-20 ">
            <div >
                <h1 className="text-white text-xl "> <b>Browse all</b></h1> <br />
                <div className="container gap-3  mobiles:grid-cols-2 desktop:grid-cols-7 laptops:grid-cols-6 tablets:grid-cols-4 grid  justify-evenly  ">
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-pink-500 rounded-md"><h2 className="text-white text-xl m-2"><b>Music</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-teal-800 rounded-md"><h2 className="text-white text-xl m-2"><b>Podcast</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-600 rounded-md"><h2 className="text-white text-xl m-2"><b>Live Events</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-900 rounded-md"><h2 className="text-white text-xl m-2"><b>Made for You</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-rose-500 rounded-md"><h2 className="text-white text-xl m-2"><b>New Releases</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-fuchsia-700 rounded-md"><h2 className="text-white text-xl m-2"><b>Hindi</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-yellow-700 rounded-md"><h2 className="text-white text-xl m-2"><b>Punjabi</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-900 rounded-md"><h2 className="text-white text-xl m-2"><b>Tamil</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-blue-500 rounded-md"><h2 className="text-white text-xl m-2"><b>Telugu</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-lime-500 rounded-md"><h2 className="text-white text-xl m-2"><b>Podacst Charts</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-rose-400 rounded-md"><h2 className="text-white text-xl m-2"><b>Podcast New Releses</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-fuchsia-950 rounded-md"><h2 className="text-white text-xl m-2"><b>Video Podcasts</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-teal-600 rounded-md"><h2 className="text-white text-xl m-2"><b>Business & technology</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-orange-500 rounded-md"><h2 className="text-white text-xl m-2"><b>New Releases</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-600 rounded-md"><h2 className="text-white text-xl m-2"><b>Hindi</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-yellow-300 rounded-md"><h2 className="text-white text-xl m-2"><b>Punjabi</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-teal-800 rounded-md"><h2 className="text-white text-xl m-2"><b>Tamil</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-green-400 rounded-md"><h2 className="text-white text-xl m-2"><b>Telugu</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-cyan-300 rounded-md"><h2 className="text-white text-xl m-2"><b>Telugu</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-red-600 rounded-md"><h2 className="text-white text-xl m-2"><b>Telugu</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto bg-blue-300 rounded-md"><h2 className="text-white text-xl m-2"><b>Telugu</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-600 rounded-md"><h2 className="text-white text-xl m-2"><b>Telugu</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto bg-pink-300 rounded-md"><h2 className="text-white text-xl m-2"><b>Telugu</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto bg-lime-200 rounded-md"><h2 className="text-white text-xl m-2"><b>Telugu</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-300 rounded-md"><h2 className="text-white text-xl m-2"><b>Telugu</b></h2></div>
                    <div className="box tablets:h-48 tablets:w-auto  laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-600 rounded-md"><h2 className="text-white text-xl m-2"><b>Telugu</b></h2></div>
                </div>
            </div>
        </div>
        </div> */}


            {/* <div className=" rounded-t-lg bg-neutral-900 flex gap-3 h-16 box-border pt-3 pl-6 font-sans font-bold z-10 absolute w-full">


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
