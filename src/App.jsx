import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./page/navbar";
import Library from "./page/library";
import Home from "./page/home";
import Search from "./page/search";
import Signup from "./page/Signup";
import Login from "./page/login";
import Playbutton from "./page/playbutton";
import Account from "./components/account";
import Support from "./components/support";
import Homenew from "./page/homenew";
import Searchnew from "./page/searchnew";
import Logout from "./page/logout";
import Profile from "./page/profile";
import Librarynew from "./page/librarynew";
import Navnew from "./page/navnew";
import Foot from "./page/footerdemo ";
// import Playlist1 from "./playlist/playlist1";
import Playlist1 from "./playlist/playlist1";
import Playlist2 from "./playlist/playlist2";
import Playlist4 from "./playlist/playlist4";
import Playlist3 from "./playlist/playlist3";
import Playlist5 from "./playlist/playlist5";
import Playlist6 from "./playlist/playlist6";
// import Apps from "./page/audio";


function App() {
  const token = localStorage.getItem("token")
  return (
    <>

      <div className="main relative w-screen h-screen flex mt-[10px]">
        <BrowserRouter>
        <div className="w-full h-full flex gap-1">

          <div className="main2 flex flex-col relative w-[520px] h-screen ml-[5px]" id="main2">
             <Nav /> 
            <Library />
           { token && <Librarynew/>}
           { token && <Navnew/>} 
          </div >
          <div className="main3 relative rounded-lg  overflow-hidden w-screen h-screen overflow-y-auto ml-[5px] ">
            <Routes>
              {/* <Route index element={<Home/>}/> */}
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              {/* <Route path="/playbutton" element={<Playbutton/>}/> */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/support" element={<Support />} />
              <Route path="/homenew" element={token && <Homenew />} />
              <Route path="/searchnew" element={token && <Searchnew />} />
              <Route path="/p1" element={token &&<Playlist1 />} />
              <Route path="/p2" element={token &&<Playlist2 />} />
              <Route path="/p4" element={token &&<Playlist4 />} />
              <Route path="/p3" element={token &&<Playlist3 />} />
              <Route path="/p5" element={token &&<Playlist5 />} />
              <Route path="/p6" element={token &&<Playlist6 />} />
              <Route path="/profile" element={ <Profile/>} />
              <Route path="/logout" element={<Logout />} />
              {/* <Route path="/audio" element={<Apps />} /> */}
              {/* <Route path="/test" element={<Test />} /> */}
            </Routes>
          </div>
        </div>
          {/* <Account/> */}
           {< Foot/>}
           {token &&<Playbutton />}
        </BrowserRouter>
      </div>
    </>
  )
}
export default App;