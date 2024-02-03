import { Fragment } from 'react'
import { useEffect,useRef,useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import React from 'react';
import { FaArrowCircleDown } from "react-icons/fa"
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import f3 from "/src/assets/tch.jpeg"
import personSvg from "/src/assets/person.svg"
import heart from "/src/assets/heart.svg"
import dots from "/src/assets/dots.svg"
import play from "/src/assets/images/play2.svg"
import pause from "/src/assets/images/pause3.svg"
import audioSrc15 from "../assets/audios/radha.mp3"
import audioSrc16 from "../assets/audios/tum.mp3"
import audioSrc17 from "../assets/audios/aga.mp3"
import audioSrc18 from "../assets/audios/mamadurai.mp3"
import audioSrc19 from "../assets/audios/sundariye.mp3"
import audioSrc20 from "../assets/audios/Darshana.mp3"
import audioSrc21 from "../assets/audios/ennai.mp3"
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

function Playlist1() {

    // useEffect(() => {
    //     document.body.style.backgroundColor = 'rgb(24 24 27)'; 
    //     })

    useEffect(() => {
        document.querySelector("#main2").style.display = "none";
    })
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


    const audioRef15 = useRef(null);
    const [isPlaying15, setIsPlaying15] = useState(false);

  
    const togglePlayPause15 = () => {
      if (isPlaying15) {
        audioRef15.current.pause();
      } else {
        audioRef15.current.play();
      }
      setIsPlaying15(!isPlaying15);
    };




    const audioRef16 = useRef(null);
    const [isPlaying16, setIsPlaying16] = useState(false);

  
    const togglePlayPause16 = () => {
      if (isPlaying16) {
        audioRef16.current.pause();
      } else {
        audioRef16.current.play();
      }
      setIsPlaying16(!isPlaying16);
    };





    const audioRef17 = useRef(null);
    const [isPlaying17, setIsPlaying17] = useState(false);

  
    const togglePlayPause17 = () => {
      if (isPlaying17) {
        audioRef17.current.pause();
      } else {
        audioRef17.current.play();
      }
      setIsPlaying17(!isPlaying17);
    };



    const audioRef18 = useRef(null);
    const [isPlaying18, setIsPlaying18] = useState(false);

  
    const togglePlayPause18 = () => {
      if (isPlaying18) {
        audioRef18.current.pause();
      } else {
        audioRef18.current.play();
      }
      setIsPlaying18(!isPlaying18);
    };



    const audioRef19 = useRef(null);
    const [isPlaying19, setIsPlaying19] = useState(false);

  
    const togglePlayPause19 = () => {
      if (isPlaying19) {
        audioRef19.current.pause();
      } else {
        audioRef19.current.play();
      }
      setIsPlaying19(!isPlaying19);
    };



    const audioRef20 = useRef(null);
    const [isPlaying20, setIsPlaying20] = useState(false);

  
    const togglePlayPause20 = () => {
      if (isPlaying20) {
        audioRef20.current.pause();
      } else {
        audioRef20.current.play();
      }
      setIsPlaying20(!isPlaying20);
    };



    const audioRef21 = useRef(null);
    const [isPlaying21, setIsPlaying21] = useState(false);

  
    const togglePlayPause21 = () => {
      if (isPlaying21) {
        audioRef21.current.pause();
      } else {
        audioRef21.current.play();
      }
      setIsPlaying21(!isPlaying21);
    };

    return (
        <>

            <Disclosure as="nav" className="bg-gradient-to-b from-gray-700 via-gray-500 to-gray-400 relative">
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
                            <img src={f3} className='bg-transparent rounded-sm p-20' />
                            <div className=' laptopts:py-24 px-6 mobiles:pb-1'>
                                <p className='px-1 font-bold font-sans'>
                                    Compilation</p>
                                <p className=' font-bold text-7xl font-sans'>50 TOP CLUB HITS</p>
                                <br></br>
                                <div className='flex gap-1'>
                                    <p className='align-center font-bold font-sans'>Various Artists.
                                        2017.
                                        50 songs, 4 hr 44 min</p>
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
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef15} src={audioSrc15} /> 
                                            <button onClick={togglePlayPause15} className=" rounded-full">
                                        {isPlaying15 ? <img src={pause} className='mt-3'/> : <img src={play} className='mt-3'/>}
                                    </button></div>
                                        <img src='http://2.bp.blogspot.com/-4zv12SCjjN4/TZcrGzIf3dI/AAAAAAAAAQU/z1rtIvKfjeQ/s1600/lagaan.jpg' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className=' text-white text-lg'>Radha Kaise Na Jale</a>
                                            <a  href='' className='text-white text-sm opacity-60'>A R Rahman</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef16} src={audioSrc16} /> 
                                            <button onClick={togglePlayPause16} className=" rounded-full">
                                        {isPlaying16 ? <img src={pause}className='mt-3'/> : <img src={play}className='mt-3'/>}
                                    </button></div>
                                        <img src='http://2.bp.blogspot.com/-NahZ0xYk5uY/UyxCI_2IYnI/AAAAAAAAAIE/PLekKQ7HAzk/s1600/Aashiqui-2.jpg' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Tum hi ho</a>
                                            <a href='' className='text-white text-sm opacity-60'>Shreya Goshal</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef17} src={audioSrc17} /> 
                                            <button onClick={togglePlayPause17} className=" rounded-full">
                                        {isPlaying17 ? <img src={pause}className='mt-3'/> : <img src={play}className='mt-3'/>}
                                    </button></div>
                                        <img src='https://st1.bollywoodlife.com/wp-content/uploads/2022/10/ponniyin-selvan.jpg?impolicy=Medium_Widthonly&w=1280&h=900' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Aga naga</a>
                                            <a href='' className='text-white text-sm opacity-60'>A R Rahman, Sakthisree Gopalan</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef18} src={audioSrc18} /> 
                                            <button onClick={togglePlayPause18} className=" rounded-full">
                                        {isPlaying18 ? <img src={pause}className='mt-3'/> : <img src={play}className='mt-3'/>}
                                    </button></div>
                                        <img src='https://s.yimg.com/fz/api/res/1.2/DfEsN5P1.EwX5pjcriWzLA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTk0/https://s.yimg.com/zb/imgv1/cfb54c35-ece9-306b-bd35-a96a5811d3f6/t_500x300' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Mamadurai</a>
                                            < a href=''className='text-white text-sm opacity-60'>Yuvan Sankar Raja</a>
                                        </div>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef19} src={audioSrc19} /> 
                                            <button onClick={togglePlayPause19} className=" rounded-full">
                                        {isPlaying19 ? <img src={pause}className='mt-3'/> : <img src={play}className='mt-3'/>}
                                    </button></div>
                                        <img src='https://a10.gaanacdn.com/gn_img/albums/kGxbn03y4r/Gxbnv2w0by/size_l.jpg' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Sundariye vaaa</a>
                                            <a href='' className='text-white text-sm opacity-60'>Franco</a>
                                        </div>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef20} src={audioSrc20} /> 
                                            <button onClick={togglePlayPause20} className=" rounded-full">
                                        {isPlaying20 ? <img src={pause}className='mt-3'/> : <img src={play}className='mt-3'/>}
                                    </button></div>
                                        <img src='https://i.scdn.co/image/ab67616d0000b27380cdfb78965c63f318709811' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Dharshana</a>
                                            <a href='' className='text-white text-sm opacity-60'>Hesham Abdul Vahab</a>
                                        </div>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef21} src={audioSrc21} /> 
                                            <button onClick={togglePlayPause21} className=" rounded-full">
                                        {isPlaying21 ? <img src={pause}className='mt-3'/> : <img src={play}className='mt-3'/>}
                                    </button></div>
                                        <img src='https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/58/45/c4/5845c4c7-34e7-bc20-7f84-4d805ad22738/196589389794.jpg/1200x1200bf-60.jpg' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Ennai vittu</a>
                                            <a href='' className='text-white text-sm opacity-60'>Yuvan Shankar Raja</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'>
                                        <p className='text-m  text-white '>4:55</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m  text-white '>3:54</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m text-white '>2:56</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m text-white '>3:58</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m  text-white '>4:28</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m  text-white '>3:18</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text- m text-white '>5:08</p>
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

                               
                            </div>

                        </div>
                    </>
                )}
            </Disclosure>
            {/* <Footer/> */}
        </>
    )
}

export default Playlist1