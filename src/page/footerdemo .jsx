import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Foot(){
     let { pathname } = useLocation();
    let list = ["/","/search"];
    if (list.includes(pathname))
    return(
     <>
     <div className=" h-20 w-screen absolute bottom-0  flex bg-gradient-to-r from-pink-600 via-purple-500 to-blue-400 text-white"><p className="ml-6 mt-2 text-base"><b>Preview of Spotify<br></br>Signup to get unlimited songs and podcasts with occasional ads.No credit card needed.</b></p>
     <div class="bg-white absolute right-4 rounded-full h-10 text-sm font-bold w-36 mt-4 flex justify-center hover:bg-slate-50 text-black">
          <Link to="/signup" className=" mt-2"> Sign up free</Link>
</div>



 
     </div>
     </>
    )
    return null;
 }
 export default Foot;