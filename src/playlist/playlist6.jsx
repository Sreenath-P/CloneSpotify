import { Fragment } from 'react'
import { useEffect, useRef, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import React from 'react';
import { FaArrowCircleDown } from "react-icons/fa"
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import f4 from "/src/assets/cv.jpg"
import personSvg from "/src/assets/person.svg"
import heart from "/src/assets/heart.svg"
import dots from "/src/assets/dots.svg"
import play from "/src/assets/images/play.svg"
import pause from "/src/assets/images/pause3.svg"
import audioSrc36 from "../assets/audios/Unakku Thaan.mp3"
import audioSrc37 from "../assets/audios/Nenjukkul-peidhidum.mp3"
import audioSrc38 from "../assets/audios/Kun-Faya-Kun.mp3"
import audioSrc39 from "../assets/audios/Heat-Waves.mp3"
import audioSrc40 from "../assets/audios/Parayathe-Ariyathe.mp3"
import audioSrc41 from "../assets/audios/Manavalan-Thug.mp3"
import audioSrc42 from "../assets/audios/Kaayi.mp3"
// import Footer from './Footer';


const navigation = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Playlist6() {

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


    const audioRef36 = useRef(null);
    const [isPlaying36, setIsPlaying36] = useState(false);


    const togglePlayPause36 = () => {
        if (isPlaying36) {
            audioRef36.current.pause();
        } else {
            audioRef36.current.play();
        }
        setIsPlaying36(!isPlaying36);
    };

    const audioRef37 = useRef(null);
    const [isPlaying37, setIsPlaying37] = useState(false);


    const togglePlayPause37 = () => {
        if (isPlaying37) {
            audioRef37.current.pause();
        } else {
            audioRef37.current.play();
        }
        setIsPlaying37(!isPlaying37);
    };






    const audioRef38 = useRef(null);
    const [isPlaying38, setIsPlaying38] = useState(false);


    const togglePlayPause38 = () => {
        if (isPlaying38) {
            audioRef38.current.pause();
        } else {
            audioRef38.current.play();
        }
        setIsPlaying38(!isPlaying38);
    };



    const audioRef39 = useRef(null);
    const [isPlaying39, setIsPlaying39] = useState(false);


    const togglePlayPause39 = () => {
        if (isPlaying39) {
            audioRef39.current.pause();
        } else {
            audioRef39.current.play();
        }
        setIsPlaying39(!isPlaying39);
    };



    const audioRef40 = useRef(null);
    const [isPlaying40, setIsPlaying40] = useState(false);


    const togglePlayPause40 = () => {
        if (isPlaying40) {
            audioRef40.current.pause();
        } else {
            audioRef40.current.play();
        }
        setIsPlaying40(!isPlaying40);
    };



    const audioRef41 = useRef(null);
    const [isPlaying41, setIsPlaying41] = useState(false);


    const togglePlayPause41 = () => {
        if (isPlaying41) {
            audioRef41.current.pause();
        } else {
            audioRef41.current.play();
        }
        setIsPlaying41(!isPlaying41);
    };



    const audioRef42 = useRef(null);
    const [isPlaying42, setIsPlaying42] = useState(false);


    const togglePlayPause42 = () => {
        if (isPlaying42) {
            audioRef42.current.pause();
        } else {
            audioRef42.current.play();
        }
        setIsPlaying42(!isPlaying42);
    };





    // useEffect(() => {
    //     document.body.style.backgroundColor = 'rgb(24 24 27)'; 
    //     })

    useEffect(() => {
        document.querySelector("#main2").style.display = "none";
    })

    return (
        <>
            <Disclosure as="nav" className="bg-gradient-to-b from-gray-700 via-gray-500 to-gray-400">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  h-full">
                            <div className="relative flex h-16 items-center justify-end">
                                <div className="flex items-center pr-2 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button className='bg-white rounded-full font-bold px-2 p-1'>Explore Premium</button>
                                    <button className='bg-zinc-900 text-white rounded-full font-semibold px-2 p-1 flex justify-center items-center gap-1'><FaArrowCircleDown /> Install App</button>
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6 bold" aria-hidden="true" />
                                    </button>
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative">
                                        <div>
                                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 p-1 opacity-25"
                                                    src={personSvg}
                                                    alt=""
                                                />
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
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-transparent' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-transparent' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-transparent' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                        <div className=' px-4 laptopts:flex laptopts:flex-row items-center text-white tablets:flex tablets:flex-row mobiles:flex mobiles:flex-col '>
                            <img src="/src/assets/rhd.jpeg" className='bg-transparent rounded-sm p-20 ' />
                            <div className=' laptopts:py-24 px-6 mobiles:pb-1'>
                                <p className='px-1 font-bold font-sans'>
                                    Playist</p>
                                <p className=' font-bold text-7xl font-sans'>Raw Hits</p>
                                <br></br>
                                <div className='flex gap-1'>
                                    <p className='align-center font-bold font-sans'>Weekly updated playlist with only the BEST CLUB MUSIC and Club House hit songs.
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-gray-700 via-gray-950 to-black'>

                            <div className='px-20 '>

                                <div className="flex flex-row">
                                    <img className='h-16 w-16' src="https://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button.png" alt="" />
                                    <img className='h-10 w-10 mt-3 pl-8 opacity-45 hover:opacity-100' src={heart} alt="" />
                                    <img className='h-10 w-10 mt-3 pl-8 opacity-45 hover:opacity-100' src={dots} alt="" />
                                </div>



                                <div className="flex">
                                    <p className='text-base text-stone-400 font-bold font-sans ml-3'>#</p>
                                    <p className='text-base text-stone-400 font-bold font-sans ml-3'>Title</p>
                                </div>
                                <hr className='opacity-10' />
                                <div class="grid grid-rows-7 grid-flow-col gap-4 p-3">
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef36} src={audioSrc36} />
                                        <button onClick={togglePlayPause36} className=" rounded-full">
                                            {isPlaying36 ? <img src={pause} /> : <img src={play} />}
                                        </button></div>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj99oWqJhuBA8uZY9CQoUIlBMQ1xdDaLZMVw&usqp=CAU' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className=' text-m  text-white '>Unaku Than</a>
                                            <a href='' className='text-white text-sm opacity-60'>Santhosh Narayan</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef37} src={audioSrc37} />
                                        <button onClick={togglePlayPause37} className=" rounded-full">
                                            {isPlaying37 ? <img src={pause} /> : <img src={play} />}
                                        </button></div>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBaWaHCKQQUmSHK_ZaZ2dwBpnP3ORUvC9twg&usqp=CAU' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-m  text-white '>Nenjukkul Peidhidum</a>
                                            <a href='' className='text-white text-sm opacity-60'>Harris Jayaraj</a>
                                        </div>
                                    </div>



                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef38} src={audioSrc38} />
                                        <button onClick={togglePlayPause38} className=" rounded-full">
                                            {isPlaying38 ? <img src={pause} /> : <img src={play} />}
                                        </button></div>
                                        <img src='https://www.pagalworld.online/GpE34Kg9Gq/112646/thumb-rockstar-2011-300.jpg' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-m  text-white '> Kun Faaya Kun</a>
                                            <a href='' className='text-white text-sm opacity-60'>A.R. Rahman</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef39} src={audioSrc39} />
                                        <button onClick={togglePlayPause39} className=" rounded-full">
                                            {isPlaying39 ? <img src={pause} /> : <img src={play} />}
                                        </button></div>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3d3G82BGjYlxHY60Oo5LjnyM1SmF44UysyQ&usqp=CAU' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-m  text-white '>Heat-waves</a>
                                            < a href='' className='text-white text-sm opacity-60'>Glass Animals</a>
                                        </div>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef40} src={audioSrc40} />
                                        <button onClick={togglePlayPause40} className=" rounded-full">
                                            {isPlaying40 ? <img src={pause} /> : <img src={play} />}
                                        </button></div>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgo90mSMX1-rsaSAmzPYoDfKiJZE_ROOawFQ&usqp=CAU' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-m  text-white '>Parayathe Ariyathe</a>
                                            <a href='' className='text-white text-sm opacity-60'>K J Yeshudas K S Chithra</a>
                                        </div>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef41} src={audioSrc41} />
                                        <button onClick={togglePlayPause41} className=" rounded-full">
                                            {isPlaying41 ? <img src={pause} /> : <img src={play} />}
                                        </button></div>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADrcniM9kc6R89PhnFAJj-aDXBwMCISE4ACavXlXMqycPFisrcNJcoifWgof78LAEAd8&usqp=CAU' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            {/* <audio ref={audioRef} src={audioSrc} /> 
                                            <button onClick={togglePlayPause} className=" rounded-full">
                                        {isPlaying ? '||' : '>'}
                                    </button> */}
                                            <a href="togglePlayPause()" className='text-m  text-white '>Manavalan Thug</a>
                                            <a href='' className='text-white text-sm opacity-60'>Dabzee</a>
                                        </div>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef42} src={audioSrc42} />
                                        <button onClick={togglePlayPause42} className=" rounded-full">
                                            {isPlaying42 ? <img src={pause} /> : <img src={play} />}
                                        </button></div>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONrq-AoLC20UElABLespXXTwHz7vtHNk8Yojx9zExNvJm7-5wUYPsxxP8j3sryUiadjg&usqp=CAU' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-m  text-white '>KAAYI</a>
                                            <a href='' className='text-white text-sm opacity-60'>Baby Jean</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'>
                                        <p className='text-m  text-white '>4:55</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                        <p className='text-m  text-white '>3:54</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                        <p className='text-m  text-white '>2:56</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                        <p className='text-m  text-white '>3:58</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                        <p className='text-m  text-white '>2:47</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                        <p className='text-m  text-white '>3:27</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                        <p className='text-m  text-white '>3:08</p>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3 mb-10'>
                                        <button><img src={heart} alt="" /></button>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3 mb-10'>
                                        <button><img src={heart} alt="" /></button>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3 mb-10'>
                                        <button><img src={heart} alt="" /></button>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3 mb-10'>
                                        <button><img src={heart} alt="" /></button>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3 mb-10'>
                                        <button><img src={heart} alt="" /></button>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3 mb-10'>
                                        <button><img src={heart} alt="" /></button>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3 mb-10'>
                                        <button><img src={heart} alt="" /></button>
                                    </div>
                                </div>

                                {/* <div class="grid grid-rows-7 grid-flow-col gap-4 p-3">
                                    <div className='flex font-semiboldflex gap-96 hover:bg-neutral-700 '><div className='flex gap-3'><p className='text-white text-xl'>1</p>
                                        <img src='http://2.bp.blogspot.com/-4zv12SCjjN4/TZcrGzIf3dI/AAAAAAAAAQU/z1rtIvKfjeQ/s1600/lagaan.jpg' className='h-9 w-9 rounded flex-grow' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-xl  text-white no-underline '>Radha Kaise Na jale</a>
                                            <a href='' className='text-white no-underline'>A R Rahman</a>
                                        </div></div>
                                        <div className='flex font-semiboldflex ml-96 '>
                                            <p className='text-xl  text-white '>4:55</p>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-96 hover:bg-neutral-700'><div className='flex gap-3'><p className='text-white text-xl'>2</p>
                                        <img src='http://2.bp.blogspot.com/-NahZ0xYk5uY/UyxCI_2IYnI/AAAAAAAAAIE/PLekKQ7HAzk/s1600/Aashiqui-2.jpg' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-xl  text-white no-underline '>Tum hi hoooooooo</a>
                                            <a href='' className='  text-white no-underline '>Shreya Goshal</a>
                                        </div></div>
                                        <div className='flex font-semiboldflex ml-96'>
                                        <p className='text-xl  text-white '>3:54</p>
                                    </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-96 hover:bg-neutral-700'><div className='flex gap-3'><p className='text-white text-xl'>3</p>
                                        <img src='https://st1.bollywoodlife.com/wp-content/uploads/2022/10/ponniyin-selvan.jpg?impolicy=Medium_Widthonly&w=1280&h=900' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-xl  text-white no-underline '>Aga nagaaaaa</a>
                                            <a href='' className=' text-white no-underline '>A R Rahman, Sakthisree Gopalan</a>
                                        </div></div>
                                        <div className='flex font-semiboldflex ml-80'>
                                        <p className='text-xl  text-white '>2:56</p>
                                    </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-96 hover:bg-neutral-700'><div className='flex gap-3'><p className='text-white text-xl'>4</p>
                                        <img src='https://s.yimg.com/fz/api/res/1.2/DfEsN5P1.EwX5pjcriWzLA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTk0/https://s.yimg.com/zb/imgv1/cfb54c35-ece9-306b-bd35-a96a5811d3f6/t_500x300' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-xl  text-white no-underline '>Mamadurai anna...</a>
                                            <a href='' className=' text-white no-underline '>Yuvan Sankar Raja</a>
                                        </div></div>
                                        <div className='flex font-semiboldflex ml-96'>
                                        <p className='text-xl  text-white '>3:58</p>
                                    </div>
                                    </div>


                                    <div className='flex font-semiboldflex gap-96 hover:bg-neutral-700'><div className='flex gap-3'><p className='text-white text-xl'>5</p>
                                        <img src='data:image/jpeg;base64,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' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-xl  text-white no-underline '>Sundariye vaaaaa...</a>
                                            <a href='' className=' text-white no-underline '>Franco</a>
                                        </div></div>
                                        <div className='flex font-semiboldflex ml-96'>
                                        <p className='text-xl  text-white '>4:58</p>
                                    </div>
                                    </div>


                                    <div className='flex font-semiboldflex gap-96 hover:bg-neutral-700'><div className='flex gap-3'><p className='text-white text-xl'>6</p>
                                        <img src='https://i.scdn.co/image/ab67616d0000b27380cdfb78965c63f318709811' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-xl  text-white no-underline '>Darshanaaa song..</a>
                                            <a href='' className=' text-white no-underline '>Hesham Abdul Vahab</a>
                                        </div> </div>
                                        <div className='flex font-semiboldflex ml-96'>
                                        <p className='text-xl  text-white '>3:40</p>
                                    </div>
                                    </div>


                                    <div className='flex font-semiboldflex gap-96 hover:bg-neutral-700'><div className='flex gap-3'><p className='text-white text-xl'>7</p>
                                        <img src='https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/58/45/c4/5845c4c7-34e7-bc20-7f84-4d805ad22738/196589389794.jpg/1200x1200bf-60.jpg' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-xl  text-white no-underline '>Ennai vittu song...</a>
                                            <a href='' className=' text-white no-underline '>Yuvan Shankar Raja</a>
                                        </div></div>
                                        <div className='flex font-semiboldflex ml-96'>
                                        <p className='text-xl  text-white '>5:18</p>
                                    </div>
                                    </div>

                                  

                                   
                                  
                                  
                                   
                               
                                 
                                </div> */}
                            </div>

                        </div>
                    </>
                )}
            </Disclosure>
            {/* <Footer/> */}
        </>
    )
}

export default Playlist6;




