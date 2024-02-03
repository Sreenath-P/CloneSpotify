import { useLocation, Link } from "react-router-dom";
import librarys from "../assets/images/library.svg"
import rightarrow from "../assets/images/right-arrow.svg"
import add from "../assets/images/add.svg"
// import world from "../assets/images/world.svg"
import search from "../assets/images/search.svg"
import recent from "../assets/images/recent.svg"
// import multi from "../assets/images/multi.svg"

// import { Link } from "react-router-dom";


function Librarynew() {
    let { pathname } = useLocation();
    let list = ["/searchnew","/homenew",];
    if (list.includes(pathname))




        // document.body.style.backgroundColor="black";
        return (
            <>














                <div className=" h-[65vh] rounded-lg pb-2 w-full bg-neutral-900 absolute top-40 mt-1">
                    <div className="library bg-neutral-900 flex gap-4 pl-4 pt-4 box-border  rounded-t-lg  font-bold font-sans w-full">
                        <div className=" opacity-60 hover:opacity-100 duration-200">
                            <Link to="/" className="no-underline  text-white flex"><img src={librarys} alt="" className="h-8 " /><p className="  pl-4 text-lg/[30px] ">Your Library</p></Link>
                        </div>

                        <div className="opacity-60 hover:opacity-100 duration-200 pl-9 pt-1">
                            <Link to="/" className="no-underline text-white  flex"><img src={add} alt="" className="h-6 " /></Link>
                        </div>
                        <div className="opacity-60 hover:opacity-100 duration-200 pt-1">
                            <Link to="/" className="no-underline text-white  flex"><img src={rightarrow} alt="" className="h-6 " /></Link>
                        </div>
                    </div><br />








                    {/* <div> */}
                    <div className="navbar bg-neutral-900 pl-4 box-border rounded-lg font-semibold font-sans absolute w-full flex gap-4 text-sm">
                        <div className=" bg-neutral-800 w-20 rounded-full h-8 hover:bg-neutral-700" >
                            <p className="h-6 text-center pt-1 text-white" >Playlist</p>
                        </div>
                        <div className=" bg-neutral-800 w-20 rounded-full h-8  hover:bg-neutral-700 " >
                            <p className="h-6 text-center pt-1 text-white" >Artists</p>
                        </div>
                        <div className=" bg-neutral-800 w-20 rounded-full h-8  hover:bg-neutral-700 " >
                            <p className="h-6 text-center pt-1 text-white" >Albums</p>
                        </div>
                    </div>
                    {/* </div> */}



                    {/* <div className=" pt-12"> */}
                    {/* <div className="navbar bg-neutral-900 grid gap-12 p-4 box-border rounded-lg font-bold font-sans absolute w-full">
                        <div className=" flex flex-row gap-40" >
                            <img src={search} alt="aa" className="h-6 pl-1 text-white" />
                            <div className=" flex ">
                                <div className="">
                                    <p className=" text-white">Recents</p>
                                </div>
                                <div>
                                    <img src={recent} alt="aa" className="h-6 pl-1 text-white" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* </div> */}
                    <div className=" bg-neutral-900 h-[50vh] w-full relative top-10 overflow-y-auto libr text-white p-2 box-border flex flex-col gap-5 ">

                        <div className="flex  ">
                            <div>
                            <img src={search} alt="aa" className="h-6 pl-1 text-white opacity-70" />
                            </div>

                            <div className="flex pl-60 opacity-70">
                            <p className=" font-sans text-sm">Recents</p>
                                <img src={recent} alt="aa" className="h-6 pl-1 text-white" />
                            </div>
                        </div>


                        <div className='flex font-semiboldflex gap-3  hover:bg-neutral-800'>
                            <img src='https://tse3.mm.bing.net/th?id=OIP.ww5-8WM48-RSVMhbTbm1dwHaHa&pid=Api&P=0&h=180' className='h-9 w-9 rounded' />
                            <div className='flex flex-col'>
                                <p className=' font-sans font-bold  text-white '>Liked Songs</p>
                                <p className=' text-stone-400 text-sm font-sans font-semibold'>Playlist . 10 songs</p>
                            </div>
                        </div>
                        <div className='flex font-semiboldflex gap-3  hover:bg-neutral-800'>
                            <img src='https://tse1.mm.bing.net/th?id=OIP.dFbw5XrfbpEeS8wJtZFcVwHaHa&pid=Api&P=0&h=180' className='h-9 w-9 rounded' />
                            <div className='flex flex-col'>
                                <p className=' font-sans font-bold  text-white '>Malayalam Podcasts</p>
                                <p className=' text-stone-400 text-sm font-sans font-semibold'>Podcast . Spotify</p>
                            </div>
                        </div>
                        <div className='flex font-semiboldflex gap-3   hover:bg-neutral-800'>
                            <img src='https://tse3.mm.bing.net/th?id=OIP.y0sGUkzMtC_WtvixifuPsgHaHa&pid=Api&P=0&h=180' className='h-9 w-9 rounded' />
                            <div className='flex flex-col'>
                                <p className=' font-sans font-bold  text-white '>This Is Memento Mori</p>
                                <p className=' text-stone-400 text-sm font-sans font-semibold'>Playlist. Spotify</p>
                            </div>
                        </div>
                        <div className='flex font-semiboldflex gap-3   hover:bg-neutral-800'>
                            <img src='https://tse2.mm.bing.net/th?id=OIP.8XSqo_Lit2m8c89uKmBcpwAAAA&pid=Api&P=0&h=180' className='h-9 w-9 rounded' />
                            <div className='flex flex-col'>
                                <p className=' font-sans font-bold  text-white '>Apna Bana Le (Unplugged)</p>
                                <p className=' text-stone-400 text-sm font-sans font-semibold'>Playlist . Arijit Singh</p>
                            </div>
                        </div>
                        <div className='flex font-semiboldflex gap-3   hover:bg-neutral-800'>
                            <img src='https://tse2.mm.bing.net/th?id=OIP.IceQOG83AQsn5vT8avyDAQAAAA&pid=Api&P=0&h=180' className='h-9 w-9 rounded' />
                            <div className='flex flex-col'>
                                <p className=' font-sans font-bold  text-white '>Romantic Malayalam</p>
                                <p className='text-stone-400 text-sm font-sans font-semibold'>Playlist . Spotify</p>
                            </div>
                        </div>
                        <div className='flex font-semiboldflex gap-3   hover:bg-neutral-800'>
                            <img src='https://tse4.mm.bing.net/th?id=OIP.eN8dWmjhqUUwt8KJ3ixJPQAAAA&pid=Api&P=0&h=180' className='h-9 w-9 rounded' />
                            <div className='flex flex-col'>
                                <p className=' font-sans font-bold  text-white '>Vaaranam Aayiram</p>
                                <p className='text-stone-400 text-sm font-sans font-semibold'>Album . Harris Jayaraj</p>
                            </div>
                        </div>
                        <div className='flex font-semiboldflex gap-3   hover:bg-neutral-800'>
                            <img src='https://tse2.explicit.bing.net/th?id=OIP.RfUN-soGmUwHjOnQtcCKAwAAAA&pid=Api&P=0&h=180' className='h-9 w-9 rounded' />
                            <div className='flex flex-col'>
                                <p className=' font-sans font-bold  text-white '>Old School</p>
                                <p className='text-stone-400 text-sm font-sans font-semibold'>Playlist . Spotify</p>
                            </div>
                        </div>
                        {/* <div className=" h-8"></div> */}
                    </div>
                    {/* <div className=" w-full h-max  absolute bottom-2 grid gap-3 font-sans text-xs font-semibold  text-stone-400 p-4 box-border">
                    <div className=" flex gap-2">
                        <p>Legal</p>
                        <p>Privacy Center</p>
                        <p>Privacy Policy</p>
                        <p>Cookies</p>
                        <p>About Ads</p>
                    </div>
                    <div><p>Accesebility</p></div>
                    <div><p>Cookies</p></div>
                    <div className=" eng flex text-white font-sans text-sm font-bold rounded-full bg-black w-max p-[3px] box-border h-8 mt-5">
                        <img src={world} alt="" className="h-5 pl-2 w-5 pt-[1px]" />
                        <p className="pr-3 pl-1">English</p>
                    </div>
                </div> */}
                </div>
            </>
        )
    return null;
}
export default Librarynew;