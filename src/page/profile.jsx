import { Fragment } from 'react'
import { useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import React from 'react';
import { FaArrowCircleDown} from "react-icons/fa"
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import PersonSvg from '../assets/person.svg';
import { useState } from 'react';
import axios from 'axios';


const navigation = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Profile() {


    const [data, setData] = useState();
    useEffect(() => {
        axios.get("http://localhost:3000/api/getusername", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`

            }
        })
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
    }, []);
    const getFirstLetterCapitalized = (str) => {
        return str.charAt(0).toUpperCase()+ str.slice(1);
          };

    useEffect(() => {
        //  document.body.style.backgroundColor = 'rgb(24 24 27)'; 
        document.querySelector("#main2").style.display = "none";

         })

    return (
        <>
            <Disclosure as="nav" className="bg-gradient-to-b from-zinc-700 to-black">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  h-full">
                            <div className="relative flex h-16 items-center justify-end">
                                <div className="flex items-center pr-2 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button className='bg-white rounded-full font-bold px-2 p-1'>Explore Premium</button>
                                    <button className='bg-zinc-900 text-white rounded-full font-semibold px-2 p-1 flex justify-center items-center gap-1'><FaArrowCircleDown/> Install App</button>
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
                                                    className="h-8 w-8 opacity-25"
                                                    src={PersonSvg}
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
                        <div className=' px-4 flex items-center text-white'>
                            <img src={PersonSvg} className='h-32 w-32 bg-zinc-800 rounded-full p-20' />
                            <div className='py-24 px-6'>
                                <p className='px-1 font-bold'>Profile</p>

                                {data?.map((item, index) => (
                            <React.Fragment key={index}>
                      
                            <h1 className='align-center font-bold text-7xl w-10'>{getFirstLetterCapitalized(item.username)}</h1>
                                {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                            
                        </React.Fragment>
                        ))}
                                {/* <p className='align-center font-bold text-7xl w-10'>{item.username}</p> */}
                                <br></br>
                                <div className='flex gap-1'>
                                    <p className='align-center font-bold'> 10 Following</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-zinc-900'>
                            <div className='px-10 p-10'>
                                <p className='text-3xl text-white font-bold'>Top artists this month</p>
                                <p className='text-stone-500 font-semibold'>Only visible to you</p>
                                <div className='py-4 px-4 h-68 w-52 bg-zinc-800 rounded'>
                                    <img src="https://i.scdn.co/image/56be4a74de1766bf473f6271235de296e4878d41" className='rounded-full w-52'/>
                                    <br></br>
                                    <p className='text-white'>Udit Narayanan</p>
                                    <p className='text-stone-500'>Artist</p>
                                </div>
                            </div>
                            <div className='px-10'>
                                <p className='text-3xl text-white font-bold'>Top tracks of this month</p>
                                <p className='text-stone-500 font-semibold'>Only visible to you</p>
                                <div class="grid grid-rows-4 grid-flow-col gap-4 p-3">
                                    <div className='flex font-semiboldflex gap-3'><p className='text-white text-xl'>1</p>
                                        <img src='http://2.bp.blogspot.com/-4zv12SCjjN4/TZcrGzIf3dI/AAAAAAAAAQU/z1rtIvKfjeQ/s1600/lagaan.jpg' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <p className='text-xl  text-white '>Radha Kaise Na Jale</p>
                                            <p className='text-white'>A R Rahman</p>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><p className='text-white text-xl'>2</p>
                                        <img src='http://2.bp.blogspot.com/-NahZ0xYk5uY/UyxCI_2IYnI/AAAAAAAAAIE/PLekKQ7HAzk/s1600/Aashiqui-2.jpg' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <p className='text-xl  text-white '>Tum hi ho</p>
                                            <p className='text-white'>Shreya Goshal</p>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><p className='text-white text-xl'>3</p>
                                        <img src='https://st1.bollywoodlife.com/wp-content/uploads/2022/10/ponniyin-selvan.jpg?impolicy=Medium_Widthonly&w=1280&h=900' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <p className='text-xl  text-white '>Aga naga</p>
                                            <p className='text-white'>A R Rahman, Sakthisree Gopalan</p>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'><p className='text-white text-xl'>4</p>
                                        <img src='https://s.yimg.com/fz/api/res/1.2/DfEsN5P1.EwX5pjcriWzLA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTk0/https://s.yimg.com/zb/imgv1/cfb54c35-ece9-306b-bd35-a96a5811d3f6/t_500x300' className='h-9 w-9 rounded' />
                                        <div className='flex flex-col'>
                                            <p className='text-xl  text-white '>Mamadurai</p>
                                            <p className='text-white'>Yuvan Sankar Raja</p>
                                        </div>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'>
                                        <p className='text-xl  text-white '>Radha Kaise Na Jale</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-xl  text-white '>Tum hi ho</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-xl  text-white '>Aga naga</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-xl  text-white '>Maamadurai</p>
                                    </div>

                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-xl  text-white '>4:55</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-xl  text-white '>3:54</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-xl  text-white '>2:56</p>
                                    </div>
                                    <div className='flex font-semiboldflex gap-3'>
                                    <p className='text-xl  text-white '>3:58</p>
                                    </div>
                                </div>
                            </div>
                            <div className='px-10 p-10'>
                            <p className='text-2xl text-white font-bold'>Following</p>
                            <div className='desktop:grid-cols-7 laptops:grid-cols-6 tablets:grid-cols-4 grid mobiles:grid-cols-2 py-2 gap-7'>
                            <div className='py-4 px-2 h-68 w-52 bg-zinc-800 rounded'>
                                    <img src="https://i.scdn.co/image/56be4a74de1766bf473f6271235de296e4878d41" className='rounded-full w-52'/>
                                    <br></br>
                                    <p className='text-white'>Udit Narayanan</p>
                                    <p className='text-stone-500'>Artist</p>
                                </div>
                                <div className='py-4 px-2 h-68 w-52 bg-zinc-800 rounded'>
                                    <img src="https://i.pinimg.com/originals/0b/27/f8/0b27f85887421c25c220ce02314c7336.jpg" className='rounded-full w-52'/>
                                    <br></br>
                                    <p className='text-white'>Anirudh Ravichander</p>
                                    <p className='text-stone-500'>Artist</p>
                                </div>
            
                                <div className='py-4 px-2 h-68 w-52 bg-zinc-800 rounded'>
                                    <img src="https://i.scdn.co/image/ecf302fe43d0b4ff0d0e0f3a32a26c1c5d015925" className='rounded-full w-52'/>
                                    <br></br>
                                    <p className='text-white'>Karthik</p>
                                    <p className='text-stone-500'>Artist</p>
                                </div>
                                <div className='py-4 px-2 h-68 w-52 bg-zinc-800 rounded'>
                                    <img src="https://c.saavncdn.com/artists/Shakthisree_Gopalan_003_20200321102007_500x500.jpg" className='rounded-full w-52'/>
                                    <br></br>
                                    <p className='text-white'>Shakthisree Gopalan</p>
                                    <p className='text-stone-500'>Artist</p>
                                </div>

                                <div className='py-4 px-2 h-68 w-52 bg-zinc-800 rounded'>
                                    <img src="https://wirally.com/wp-content/uploads/2020/07/16789440_153510685161437_3001901528215715840_n.jpg" className='rounded-full w-52'/>
                                    <br></br>
                                    <p className='text-white'>K S Chitra</p>
                                    <p className='text-stone-500'>Artist</p>
                                </div>

                                <div className='py-4 px-2 h-68 w-52 bg-zinc-800 rounded'>
                                    <img src="https://i.scdn.co/image/56be4a74de1766bf473f6271235de296e4878d41" className='rounded-full w-52'/>
                                    <br></br>
                                    <p className='text-white'>Udit Narayanan</p>
                                    <p className='text-stone-500'>Artist</p>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
        </>
    )
}

export default Profile;

