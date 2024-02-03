import { useLocation, Link } from "react-router-dom";
import librarys from "../assets/images/library.svg"
import rightarrow from "../assets/images/right-arrow.svg"
import add from "../assets/images/add.svg"
import world from "../assets/images/world.svg"

// import { Link } from "react-router-dom";


function Library() {
    let { pathname } = useLocation();
    let list = ["/", "/search"];
    if (list.includes(pathname))
        // document.body.style.backgroundColor="black";
        return (
            <>

                {/* <div className="  text-white w-full mt-3 rounded-t-lg top-40 bg-neutral-900 h-full flex-shrink rounded-lg pt-40">
                    <div className="library bg-neutral-900 flex gap-4 p-4 box-border border-2 rounded-lg  font-bold font-sans w-full absolute h-16">
                        <div className=" opacity-60 hover:opacity-100 duration-200">
                            <Link to="/" className="no-underline  text-white flex"><img src={librarys} alt="" className="h-8 " /><p className="  pl-4 text-lg/[30px] ">Your Library</p></Link>
                        </div>

                        <div className="opacity-60 hover:opacity-100 duration-200 pl-9 pt-1">
                            <Link to="/" className="no-underline text-white  flex"><img src={add} alt="" className="h-6 " /></Link>
                        </div>
                        <div className="opacity-60 hover:opacity-100 duration-200 pt-1">
                            <Link to="/" className="no-underline text-white  flex"><img src={rightarrow} alt="" className="h-6 " /></Link>
                        </div>
                    </div>
                    <div className="lists overflow-y-auto ">
                        <div className="search-main bg-red-500 p-2 mt-14 h-96 ">
                            <div className=" rounded-lg w-full h-full bg-zinc-800 p-4 box-border" >
                                <h3 className=" font-bold font-sans text-base">Create your first playlist</h3>
                                <p className=" pt-3 font-sans text-sm font-semibold">It's easy, we'll help you</p>
                                <div className=" pt-3"><button className=" border-none rounded-full p-2 font-semibold font-sans w-28">Create playlist</button></div>
                            </div>
                            <div className=" rounded-lg w-full bg-zinc-800 p-4 box-border mt-6 " >
                                <h3 className=" font-bold font-sans text-base">Let's find some podcast to follow</h3>
                                <p className=" pt-3 font-sans text-sm font-semibold">We'll keep you updated on new episodes</p>
                                <div className=" pt-3"><button className=" border-none rounded-full p-2 font-semibold font-sans w-28">Browse podcast</button></div>
                            </div>
                            <div className="  bg-red-200"></div>
                        </div>
                    </div>
                </div> */}


                <div className=" h-[65vh] rounded-lg pb-2 w-full bg-neutral-900 absolute top-40 mt-1">
                    <div className="library bg-neutral-900 flex gap-4 p-4 box-border  rounded-t-lg  font-bold font-sans w-full absolute h-16">
                        <div className=" opacity-60 hover:opacity-100 duration-200">
                            <Link to="/" className="no-underline  text-white flex"><img src={librarys} alt="" className="h-8 " /><p className="  pl-4 text-lg/[30px] ">Your Library</p></Link>
                        </div>

                        <div className="opacity-60 hover:opacity-100 duration-200 pl-9 pt-1">
                            <Link to="/" className="no-underline text-white  flex"><img src={add} alt="" className="h-6 " /></Link>
                        </div>
                        <div className="opacity-60 hover:opacity-100 duration-200 pt-1">
                            <Link to="/" className="no-underline text-white  flex"><img src={rightarrow} alt="" className="h-6 " /></Link>
                        </div>
                    </div>
                    <div className=" bg-neutral-900 h-[32vh] w-full relative top-16 overflow-y-auto libr text-white p-2 box-border">
                        <div className=" rounded-lg w-full  bg-zinc-800 p-4 box-border" >
                            <h3 className=" font-bold font-sans text-base">Create your first playlist</h3>
                            <p className=" pt-3 font-sans text-sm font-semibold">It's easy, we'll help you</p>
                            <div className=" pt-3"><button className=" border-none rounded-full p-2 font-semibold font-sans w-28 bg-white text-black text-sm">Create playlist</button></div>
                        </div>
                        <div className=" rounded-lg w-full bg-zinc-800 p-4 box-border mt-6 " >
                            <h3 className=" font-bold font-sans text-base">Let's find some podcast to follow</h3>
                            <p className=" pt-3 font-sans text-sm font-semibold">We'll keep you updated on new episodes</p>
                            <div className=" pt-3"><button className=" border-none rounded-full p-2 font-semibold font-sans w-28 bg-white text-black text-sm">Browse podcast</button></div>
                        </div>
                        <div className=" h-8"></div>
                    </div>
                    <div className=" w-full h-max  absolute bottom-2 grid gap-3 font-sans text-xs font-semibold  text-stone-400 p-4 box-border">
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
                    </div>
                </div>
            </>
        )
}
export default Library;