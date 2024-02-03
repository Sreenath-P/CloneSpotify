import play from "../assets/images/plays.svg"
import shuffle from "../assets/images/shuffle.svg"
import skipn from "../assets/images/skip-n.svg"
import skippr from "../assets/images/skip-p.svg"
import loop from "../assets/images/loop.svg"
import { useLocation } from "react-router-dom"
import kaathal from"../assets/images/96.jpg"
import like from "../assets/images/like.svg"
import mic from "../assets/images/mic.svg"
import queue from "../assets/images/queue.svg"
import speker from "../assets/images/speaker.svg"
import connected from "../assets/images/connect.svg"
import mini from "../assets/images/miniplayer.svg"
import nowplay from "../assets/images/nowplaying.svg"
import pauses from "../assets/images/pause2.svg"

import audioSrc from "../assets/audios/kathale.mp3"
import React, { useState, useRef } from 'react';




import  "./style.css";

function Playbutton() {

    // const audioSources = [
    //     '../assets/audios/m1.mp3',
    //     '../assets/audios/m2.mp3',
    //     '../assets/audios/m3.mp3',
    //   ];

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const togglePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    let { pathname } = useLocation();
    let list = ["/searchnew","/homenew","/p1","/p2","/p4"];
    if (list.includes(pathname))




        return (
            <>


{/* <div>

      {audioSources.map((src, index) => (
        <div key={index}>
          <audio ref={audioRef} src={src} />
          <button onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      ))}
    </div> */}



                <div className=" w-screen absolute bottom-0  flex bg-black ">
                    <div className=" w-1/3 ">
                        <div className=" flex gap-3 p-3 box-content text-white ">
                            <div className="">
                            <img src={kaathal} alt="" className=" h-14 w-14 rounded-lg " />
                            </div>
                            <div className=" flex-col font-sans pt-2 ">
                                <p className="text-sm">Kaathalae Kaathalae-From"96"</p>
                                <p className=" text-xs opacity-70">Govind Vasantha,Chinmayi</p>
                            </div >
                            <div className="p-1 opacity-70 hover:opacity-100">
                            <img src={like} alt="" className="pt-4" />
                            </div>
                        </div>
                    </div>
                    <div className=" w-1/3 h-full bg-black p-3  ">

                        <div className=" flex place-content-center  ">
                            <div className=" flex gap-4">
                                <div>
                                    <img src={shuffle} alt="" className="pt-1 opacity-65 hover:opacity-100" />
                                </div>
                                <div>
                                    <img src={skippr} alt="" className=" w-8 h-8 opacity-65 hover:opacity-100" />
                                </div>

                                <div className=" w-[34px] h-[34px] flex place-content-center bg-white rounded-full">



                                {/* {audioSources.map((src, index) => (
        <div key={index}>
          <audio ref={audioRef} src={src[0]} />
          <button onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      ))} */}



                                     <audio ref={audioRef} src={audioSrc} />
                                     {/* <audio ref={audioRef} src={srcList[0]} /> */}
      <button onClick={togglePlayPause} className=" rounded-full">
        {isPlaying ? (<img src={pauses}/>) : (<img src={play}/>)}
         {/* <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} /> */}
      </button>  
                                    {/* <div className=" bg-white w-8 h-8 rounded-full hover:size-[34px] duration-150" onClick={togglePlayPause} >{isPlaying ? 'Pause' : 'Play'}
                                        <img src={play} alt="" className=" h-6 w-6 p-1 hover:size-[26px] duration-150 " />
                                    </div> */}
                                </div>
                                <div>
                                    <img src={skipn} alt=" " className=" w-8 h-8 opacity-65 hover:opacity-100" />
                                </div>
                                <div>
                                    <img src={loop} alt="" className=" pt-1 opacity-65 hover:opacity-100" />
                                </div>
                            </div>


                        </div>

                        <div className=" flex  place-content-center ">
                            {/* <div className=" flex mt-2  "> */}
                              <div className=" flex gap-1 text-white text-xs font-sans">
                                    {/* <label for="small-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small range</label> */}
                                    <p className=" pt-[2px]">0:00</p>
                                    <div className="relative bg-green-500 w-96 h-1 rounded mt-2">
                                        
                                        <input type="range" class="slider" />
                                    {/* <input id="small-range" type="range" value="50" class=" w-96 h-1 mb-6 rounded-lg appearance-none cursor-pointer range-sm bg-stone-600" /> */}
                                    </div>
                                    <p className=" pt-[2px]">4:27</p>
                                </div>

                            {/* </div> */}
                        </div>
                    </div>
                    <div className=" w-1/3 h-full">
                    <div className=" flex place-content-end p-8  ">
                            <div className=" flex gap-2">
                                <div>
                                    <img src={nowplay} alt=" " className=" w-5 h-5 opacity-65 hover:opacity-100" />
                                </div>
                                <div>
                                    <img src={mic} alt="" className=" w-5 h-5 opacity-65 hover:opacity-100" />
                                </div>
                                <div>
                                    <img src={queue} alt=" " className="  w-5 h-5 opacity-65 hover:opacity-100" />
                                </div>
                                <div>
                                    <img src={connected} alt="" className=" w-5 h-5 opacity-65 hover:opacity-100" />
                                </div>
                                <div className="flex">
                                    <div>
                                    <img src={speker} alt="" className=" w-5 h-5  opacity-65 hover:opacity-100" />
                                    </div>
                                    <div className=" flex  place-content-center ">
                            {/* <div className=" flex mt-2  "> */}
                              <div className=" flex gap-1 text-white text-xs font-sans">
                                    <div className="relative bg-green-500 w-20 h-1 rounded mt-2">
                                        
                                        <input type="range" class="slider" />
                                    {/* <input id="small-range" type="range" value="50" class=" w-96 h-1 mb-6 rounded-lg appearance-none cursor-pointer range-sm bg-stone-600" /> */}
                                    </div>
                                </div>

                            {/* </div> */}
                        </div>
                                </div>
                                <div>
                                    <img src={mini} alt="" className=" w-5 h-5 opacity-65 hover:opacity-100" />
                                </div>

                {/* <audio ref={audioRef} src={audioSrc} />
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}

                            </div>


                        </div>
                    </div>
                </div>
            </>
        )
    return null;
}
export default Playbutton;