import { Fragment } from 'react'
import { useEffect,useRef,useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import React from 'react';
import { FaArrowCircleDown } from "react-icons/fa"
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import f3 from "/src/assets/happy.jpg"
import personSvg from "/src/assets/person.svg"
import heart from "/src/assets/heart.svg"
import dots from "/src/assets/dots.svg"
import play from "/src/assets/images/play2.svg"
import pause from "/src/assets/images/pause3.svg"
import audioSrc22 from "../assets/audios/mascara.mp3"
import audioSrc23 from "../assets/audios/pistah.mp3"
import audioSrc24 from "../assets/audios/saami.mp3"
import audioSrc25 from "../assets/audios/kaavaalaa.mp3"
import audioSrc26 from "../assets/audios/sona.mp3"
import audioSrc27 from "../assets/audios/ollulleru.mp3"
import audioSrc28 from "../assets/audios/chettikulangara.mp3"
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

function Playlist2() {

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


    const audioRef22 = useRef(null);
    const [isPlaying22, setIsPlaying22] = useState(false);

  
    const togglePlayPause22 = () => {
      if (isPlaying22) {
        audioRef22.current.pause();
      } else {
        audioRef22.current.play();
      }
      setIsPlaying22(!isPlaying22);
    };




    const audioRef23 = useRef(null);
    const [isPlaying23, setIsPlaying23] = useState(false);

  
    const togglePlayPause23 = () => {
      if (isPlaying23) {
        audioRef23.current.pause();
      } else {
        audioRef23.current.play();
      }
      setIsPlaying23(!isPlaying23);
    };





    const audioRef24 = useRef(null);
    const [isPlaying24, setIsPlaying24] = useState(false);

  
    const togglePlayPause24 = () => {
      if (isPlaying24) {
        audioRef24.current.pause();
      } else {
        audioRef24.current.play();
      }
      setIsPlaying24(!isPlaying24);
    };



    const audioRef25 = useRef(null);
    const [isPlaying25, setIsPlaying25] = useState(false);

  
    const togglePlayPause25 = () => {
      if (isPlaying25) {
        audioRef25.current.pause();
      } else {
        audioRef25.current.play();
      }
      setIsPlaying25(!isPlaying25);
    };



    const audioRef26 = useRef(null);
    const [isPlaying26, setIsPlaying26] = useState(false);

  
    const togglePlayPause26 = () => {
      if (isPlaying26) {
        audioRef26.current.pause();
      } else {
        audioRef26.current.play();
      }
      setIsPlaying26(!isPlaying26);
    };



    const audioRef27 = useRef(null);
    const [isPlaying27, setIsPlaying27] = useState(false);

  
    const togglePlayPause27 = () => {
      if (isPlaying27) {
        audioRef27.current.pause();
      } else {
        audioRef27.current.play();
      }
      setIsPlaying27(!isPlaying27);
    };



    const audioRef28 = useRef(null);
    const [isPlaying28, setIsPlaying28] = useState(false);

  
    const togglePlayPause28 = () => {
      if (isPlaying28) {
        audioRef28.current.pause();
      } else {
        audioRef28.current.play();
      }
      setIsPlaying28(!isPlaying28);
    };


    return (
        <>
            <Disclosure as="nav" className="bg-gradient-to-r from-cyan-900 via-sky-800 to-cyan-800">
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
                                    Playlist</p>
                                <p className=' font-bold text-7xl font-sans'>Happy Dance</p>
                                <br></br>
                                <div className='flex gap-1'>
                                    <p className='align-center font-bold font-sans'>Anirudh Ravichander,Kailas,Santhosh Naryanan.

50 songs, about 3 hr 45 min</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-cyan-950 via-gray-950 to-black'>

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
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef22} src={audioSrc22} /> 
                                            <button onClick={togglePlayPause22} className=" rounded-full">
                                        {isPlaying22 ? <img src={pause} className='mt-3'/> : <img src={play} className='mt-3'/>}
                                    </button></div>
                                        <img src='https://i.scdn.co/image/ab67616d0000b273334c9f4fafa1138122eca4c2' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Mascara</a>
                                            <a  href='' className='text-white text-sm opacity-60'>Supriya joshi,Vijay</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef23} src={audioSrc23} /> 
                                            <button onClick={togglePlayPause23} className=" rounded-full">
                                        {isPlaying23 ? <img src={pause} className='mt-3'/> : <img src={play} className='mt-3'/>}
                                    </button></div>
                                        <img src='https://i.scdn.co/image/ab67616d0000b27328c5ecaa48c4d0d9a32cb9a1' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Pistah</a>
                                            <a href='' className='text-white text-sm opacity-60' >Rajesh Murugeshan</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef24} src={audioSrc24} /> 
                                            <button onClick={togglePlayPause24} className=" rounded-full">
                                        {isPlaying24 ? <img src={pause} className='mt-3'/> : <img src={play} className='mt-3'/>}
                                    </button></div>
                                        <img src='https://i.scdn.co/image/ab67616d0000b273d4ddea22f9f3cbf8520191c5' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Saami Saami</a>
                                            <a href='' className='text-white text-sm opacity-60'>Mounika Yadhav</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef25} src={audioSrc25} /> 
                                            <button onClick={togglePlayPause25} className=" rounded-full">
                                        {isPlaying25 ? <img src={pause} className='mt-3'/> : <img src={play} className='mt-3'/>}
                                    </button></div>
                                        <img src='https://i.scdn.co/image/ab67616d0000b273ac515af787eb2080c7a0b129' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Kaavaalaa</a>
                                            < a href=''className='text-white text-sm opacity-60'>Anirudh Ravichander</a>
                                        </div>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef26} src={audioSrc26} /> 
                                            <button onClick={togglePlayPause26} className=" rounded-full">
                                        {isPlaying26 ? <img src={pause} className='mt-3'/> : <img src={play} className='mt-3'/>}
                                    </button></div>
                                        <img src='https://i.scdn.co/image/ab67616d0000b2735cca30779daafdf2ef435edb' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Sona Sona</a>
                                            <a href='' className='text-white text-sm opacity-60'>Kalabhavan Mani</a>
                                        </div>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef27} src={audioSrc27} /> 
                                            <button onClick={togglePlayPause27} className=" rounded-full">
                                        {isPlaying27 ? <img src={pause} className='mt-3'/> : <img src={play} className='mt-3'/>}
                                    </button></div>
                                        <img src='https://i.scdn.co/image/ab67616d0000b2737ade11faace586a6cfa5fef3' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Ollulleru</a>
                                            <a href='' className='text-white text-sm opacity-60'>Justin varghese</a>
                                        </div>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'><div className='text-white text-m'><audio ref={audioRef28} src={audioSrc28} /> 
                                            <button onClick={togglePlayPause28} className=" rounded-full">
                                        {isPlaying28 ? <img src={pause} className='mt-3'/> : <img src={play} className='mt-3'/>}
                                    </button></div>
                                        <img src='https://i.scdn.co/image/ab67616d0000b273be3eb26fb463a7f6d0cbd811' className='h-9 w-9 rounded mt-2' />
                                        <div className='flex flex-col'>
                                            <a href='' className='text-lg  text-white '>Chettikulangara</a>
                                            <a href='' className='text-white text-sm opacity-60'>M.G.Sreekumar</a>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'>
                                        <p className='text-m  text-white '>4:56</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m  text-white '>2:54</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m  text-white '>3:50</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m  text-white '>4:58</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m  text-white '>3:28</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m  text-white '>4:18</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-m  text-white '>5:28</p>
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

export default Playlist2