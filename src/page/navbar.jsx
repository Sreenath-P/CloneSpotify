import { Link, useLocation } from "react-router-dom";
import spotify from "../assets/images/logo.png"
import homes from "../assets/images/homes.svg"
import search from "../assets/images/search.svg"

function Nav() {
    document.body.style.backgroundColor = "black";
    let {pathname} = useLocation();
    let list = ["/", "/search"  ];
    if(list.includes(pathname))
    return (
        <>
        {/* <div className="pt-2 absolute "> */}
            <div className="navbar bg-neutral-900 grid gap-4 p-4 box-border rounded-lg font-bold font-sans absolute w-full">
                <div className="" >
                <img src={spotify} alt="" className="h-6 pl-1" />
                </div>
                    
                <div className=" opacity-60 hover:opacity-100 duration-200">
                <Link to="/" className="no-underline  text-white flex "><img src={homes} alt="" className="h-8 "/><p className=" pt-2 pl-4 text-l  ">Home</p></Link>
                </div>

                <div className="opacity-60 hover:opacity-100 duration-200">
                <Link to="/search" className="no-underline text-white  flex"><img src={search} alt="" className="h-8 "/><p className=" pt-2 pl-4 text-l ">Search</p></Link> 
                </div>
            {/* </div> */}

    

            
        </div>
        </>
    )
    return null;
}
export default Nav;