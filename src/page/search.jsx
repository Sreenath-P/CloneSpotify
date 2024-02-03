import before from "../assets/images/before.svg"
import after from "../assets/images/after.svg"
import { Link } from "react-router-dom";
import search from "../assets/images/search.svg"
import pl1 from "../assets/images/pl1.jpg"

import  "./style.css";



function Search() {

   
    return (
        <>
            <div className=" search text-white w-full h-full relative overflow-y-auto  ">
                <div className="top-0 rounded-t-lg bg-neutral-900 flex gap-3 h-16 box-border pt-3 pl-6 font-sans font-bold z-10 fixed w-full mt-2">


                    <div className="bg-black h-10 w-10 rounded-full">
                        <Link to="/" className="opacity-60 hover:opacity-100 duration-200">
                            <img src={before} alt="" className=" h-10" />
                        </Link>
                    </div>
                    <div className="bg-black h-10 w-10 rounded-full">
                        <Link className="opacity-60 hover:opacity-100 duration-200">
                            <img src={after} alt="" className=" h-10" />
                        </Link>
                    </div>

                    <div className=" h-10 bg-zinc-800 rounded-full ipsearch tablets:w-80 mobiles: w-44 flex border-2">
                        <img src={search} alt="" className=" relative top-2 pl-3 h-7 w-7" />
                        <input className=" tablets:w-52 mobiles:w-20 font-sans text-xs font-semibold bg-transparent border-none outline-0 text-white" type="search" placeholder="What do you want to litsen to?" />
                    </div>

                    <div className=" text-end pt-2  ">
                        <Link to="/signup" className="no-underline opacity-60 hover:opacity-100 duration-200 text-white"><p className="">Sign up</p></Link>
                    </div>
                    <div className=" text-end pt-2">
                        <Link to="/login" className="no-underline opacity-60 hover:opacity-100 duration-200   text-white"><p className="">Log in</p></Link>
                    </div>
                </div>


                <div className="lists overflow-hidden">


                    <div className="search-main bg-neutral-900 h-full p-3 font-sans mt-14 ">





                        <div className="search-main bg-neutral-900  p-3  font-sans ">
                            <div >
                                <h1 className="text-white  text-2xl"> <b>Browse all</b></h1> <br />
                                <div className="container   gap-3 mobiles:grid-cols-2 desktop:grid-cols-7 laptops:grid-cols-6 tablets:grid-cols-4 grid  justify-evenly  ">
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-teal-800 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Podcast</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklXL7bUg9123Dlb7uoN-45uyN7jWyVx28hyFrgAPnxOlzqaxjAYPq3HvT3Zck430nPuI&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content  " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-600 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Live Events</b></h2>
                                        <img src="https://static.independent.co.uk/2023/09/25/13/GettyImages-1404555477.jpg"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box  overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-900 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Made for You</b></h2>
                                        <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb37bff6aa1d42bede9048750f/6/en/default"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-rose-800  rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>New Releases</b></h2>
                                        <img src="https://i.scdn.co/image/ab67706f000000029d67e2fc40134c5918399366"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-teal-300	 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Hindi</b></h2>
                                        <img src="https://i.scdn.co/image/ab67706f00000002e0b7df5361ff68ced79483ed"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-orange-400 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Punjabi</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zuT07cTWb9J6VXxU0WyoIF5UZZs-4uxXyCrGNio9o1lE59dNdQjmF1K0EGshVJ89Lqk&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box  overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-900 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Tamil</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpsYKqDzO9t6KUZST_R2HwUYOmWdVwr53xdz5vMIS4fc4FHB08zX-4cZ1vImCLjzfLUg&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto bg-rose-500 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Telugu</b></h2>
                                        <img src="https://i.scdn.co/image/ab67706f00000002c997eb5271afe854fd512221"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-lime-500 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Podacast Charts</b></h2>
                                        <img src="https://preview.redd.it/does-anyone-know-if-this-image-exists-without-the-spotify-v0-k0jt8jkzxdc81.jpg?width=640&crop=smart&auto=webp&s=9b50653921b19d77e06e64d771e6d4ea5a454158"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box  overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-rose-400 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Podcast New Releases</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhfrodevSD7Dz9Ek5bDe-8dPqRUE9rfIlLA&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box  overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-lime-400 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Video Podcasts</b></h2>
                                        <img src="https://i.scdn.co/image/ab6765630000ba8aacbcf909afef7869e9a75bae"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box  overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-emerald-300 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Business & technology</b></h2>
                                        <img src="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/7t1TLIZUb5LEHAJ2za1RjG/en"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-orange-500 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Sports</b></h2>
                                        <img src="https://i.scdn.co/image/ab6765630000ba8a2ea658f62c8ee4c3b650f276"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-600 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Pop</b></h2>
                                        <img src="https://tse4.mm.bing.net/th?id=OIP.w5intYEpZf32v0NOfmQEtgHaHa&pid=Api&P=0&h=180"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-green-600 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Indie</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcx2eOWOCRJwU0rUL3xq42E8WfxFwfTP7z4iOZh-JZLpryIM7W7UCi2H_Kc5lfMkILMs&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-yellow-300 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Trending</b></h2>
                                        <img src="https://i.scdn.co/image/ab67706f000000029aca80c44272329aa82d6dff"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-teal-800 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Love</b></h2>
                                        <img src="https://i.scdn.co/image/ab67706f00000002bc8990862fbf124ce4a1f0a7"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-cyan-900 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Discover</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4ukyK7Tzzd9AOmxmvRJK5w3Z7WSLaq_b0OI6Ls_Mgnc8U4cny_3nMEdpEJJIgJLBuFQ&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto bg-lime-200 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Mood</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFmQLJc-nyJs4LzJdKsA7hc585RccmHB4HhFxvwfGEgqEeWoe8At5UYzsMTV2R_OaTYM&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-red-600 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Party</b></h2>
                                        <img src="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-blue-950 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Devotional</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZAX0i0GeNGm7njXHnedfkIKf_g1G9CKUqA&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto bg-blue-300 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Decades</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSZ3MurR6zCoI2ZJ_svVHw6urkxVGjWWkmM2cKu1eHOrVr2d_UhEjEj5oUO_kjiKC6Lg&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto bg-pink-300 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Hip-Hop</b></h2>
                                        <img src="https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto bg-violet-600 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Disney</b></h2>
                                        <img src="https://i.scdn.co/image/ab67706f00000002215fab676f73bd0b8e813692"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-300 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Chill</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DUqNXXcU4L8Avsio3h0DtIAtMVXI7CfLWD_15tXkKcG7chD0DHdJmlmLMeUMXSOgNx4&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                    <div className="box overflow-hidden tablets:h-48 tablets:w-auto laptops:h-52 laptops:w-auto mobiles:h-40 mobiles:w-auto  bg-violet-600 rounded-md">
                                        <h2 className="text-white text-xl m-2"><b>Gaming</b></h2>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwHZ55qvPzh5tcgBfwixVvBeqFWCm96il3g&usqp=CAU"
                                            className=" w-32 h-32  rotate-45 desktop:pl-40 laptops:pl-36 tablets:pl-32 tablets:h-32 tablets:w-32 mobiles:pl-24 mobiles:h-28 mobiles:w-28 box-content " />
                                    </div>
                                </div>
                                <div className="">
                                    <div className=' mb-20'>
                                        <div className=" laptops:flex laptops:flex-row laptops:gap-96 bg-neutral-900 mobiles:flex mobiles:flex-col tablets:flex tablets:flex-row tablets:gap-96">
                                            <div className="  laptops:flex laptops:gap-44 bg-neutral-900 mobiles:gap-10 tablets:flex tablets:flex-row tablets:gap-10">
                                                <div className="flex flex-col gap-2 pt-7 font-semibold text-stone-400 bg-neutral-900 pl-3 pb-5">
                                                    <p className=" text-white tex">Company</p>
                                                    <p className=" hover:text-white hover:underline">About</p>
                                                    <p className=" hover:text-white hover:underline">Jobs</p>
                                                    <p className=" hover:text-white hover:underline">For the Record</p>
                                                </div>

                                                <div className="flex flex-col gap-2 pt-7 font-semibold text-stone-400 bg-neutral-900 pl-3 pb-5">
                                                    <p className=" text-white">Communities</p>
                                                    <p className=" hover:text-white hover:underline">For Artists</p>
                                                    <p className=" hover:text-white hover:underline">Developers</p>
                                                    <p className=" hover:text-white hover:underline">Advertising</p>
                                                    <p className=" hover:text-white hover:underline">Investors</p>
                                                    <p className=" hover:text-white hover:underline">Vendors</p>
                                                </div>

                                                <div className="flex flex-col gap-2 pt-7 font-semibold text-stone-400 bg-neutral-900 pl-3 pb-5">
                                                    <p className=" text-white">Useful links</p>
                                                    <p className=" hover:text-white hover:underline">Support</p>
                                                    <p className=" hover:text-white hover:underline">Free Mobile App</p>
                                                </div>
                                            </div>
                                            <div className=" bg-neutral-900 flex gap-4 pt-5 w-auto mobiles:pb-5 mobiles:pl-5">
                                                <a href='https://www.instagram.com/spotify/'> <img src="https://icon-library.com/images/instagram-icon-png-white/instagram-icon-png-white-2.jpg" className=" h-5 w-5 hover:bg-stone-500 bg-stone-700 rounded-full p-2" /></a>
                                                <a href='https://twitter.com/spotify'><img src="https://icon-library.com/images/twitter-icon-white-png/twitter-icon-white-png-10.jpg" className=" h-5 w-5 hover:bg-stone-500 bg-stone-700 rounded-full p-2" /></a>
                                                <a href='https://www.facebook.com/Spotify'><img src="https://icon-library.com/images/facebook-xxl_22129.png" className=" h-5 w-5 hover:bg-stone-500 bg-stone-700 rounded-full p-2" /></a>
                                            </div>
                                        </div>

                                        <hr className=" w-full bg-stone-800"></hr>
                                        <div className="flex flex-row laptops:gap-10 pt-7 font-semibold text-stone-400 bg-neutral-900 pl-3 pb-5 laptops:flex laptops:flex-row mobiles:flex mobiles:flex-col mobiles:gap-2 tablets:flex tablets:flex-row tablets:gap-8">
                                            <p className=" hover:text-white">Legal</p>
                                            <p className=" hover:text-white">Privacy Center</p>
                                            <p className=" hover:text-white">Privacy Policy</p>
                                            <p className=" hover:text-white">Cookies</p>
                                            <p className=" hover:text-white">About Ads</p>
                                            <p className=" hover:text-white">Accessibility</p>
                                        </div>
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
export default Search;