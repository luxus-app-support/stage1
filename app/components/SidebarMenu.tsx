"use client"
import { Disclosure } from '@headlessui/react'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Link from 'next/link';

const SidebarMenu = ({}) => {
  return (
    <div className='flex '>
        <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 inline-flex items-center peer justify-center rounded-md p-2  text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind white group hover:bg-gray-900 "> 
            <MenuIcon className='block md:hidden h-6 w-6' aria-aria-hidden ='true'/>
        </Disclosure.Button> 
        <div className='p-6 w-1/2 h-screen bg-white z-20 fixed top 0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
            <div className='flex flex-col justify-start items-center'>
                <Link href={'/'}>
                <h1 className='text base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full'>Luxus Admin</h1>  
                </Link>
             
            </div>

            <div className='my-4 border-b border-gray-100 pb-4'>
                <Link href={'components/dashboard'}  className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadod-lg m-auto'>
                    {/* need icones */}
                    <SpaceDashboardOutlinedIcon  className='text-2xl text-gray-600 group hover:text-white'/>
                    <h3 className='text-base text-gray-800 group-hover:text-white   font-semibold'>
                        Dashboard
                    </h3>
                </Link>

                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadod-lg m-auto'>
                    {/* need icones */}
                    <PermIdentityOutlinedIcon  className='text-2xl text-gray-600 group hover:text-white'/>
                    <h3 className='text-base text-gray-800 group-hover:text-white   font-semibold'>
                        Profile
                    </h3>
                </div>


                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadod-lg m-auto'>
                    {/* need icones */}
                    <CommentOutlinedIcon  className='text-2xl text-gray-600 group hover:text-white'/>
                    <h3 className='text-base text-gray-800 group-hover:text-white   font-semibold'>
                        Comments
                    </h3>
                </div>


                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadod-lg m-auto'>
                    {/* need icones */}
                    <AnalyticsOutlinedIcon  className='text-2xl text-gray-600 group hover:text-white'/>
                    <h3 className='text-base text-gray-800 group-hover:text-white   font-semibold'>
                        Analytics
                    </h3>
                </div>


                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadod-lg m-auto'>
                    {/* need icones */}
                    <EmailOutlinedIcon  className='text-2xl text-gray-600 group hover:text-white'/>
                    <h3 className='text-base text-gray-800 group-hover:text-white   font-semibold'>
                        Dashboard
                    </h3>
                </div>

                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadod-lg m-auto'>
                    {/* need icones */}
                    <IntegrationInstructionsOutlinedIcon  className='text-2xl text-gray-600 group hover:text-white'/>
                    <h3 className='text-base text-gray-800 group-hover:text-white   font-semibold'>
                    Intergration
                    </h3>
                </div>
                
            </div>

               {/* Setting and more section */}
        
          <div className='my-4 border-b border-gray-100 pb-4'>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadod-lg m-auto'>
                    {/* need icones */}
                    <SettingsOutlinedIcon  className='text-2xl text-gray-600 group hover:text-white'/>
                    <h3 className='text-base text-gray-800 group-hover:text-white   font-semibold'>
                        Settings
                    </h3>
                </div>

                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadod-lg m-auto'>
                    {/* need icones */}
                    <MoreHorizOutlinedIcon  className='text-2xl text-gray-600 group hover:text-white'/>
                    <h3 className='text-base text-gray-800 group-hover:text-white   font-semibold'>
                        More
                    </h3>
                </div>
            </div>

            <div className='my-4 border-b border-gray-100 pb-4'>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadod-lg m-auto'>
                    {/* need icones */}
                    <ExitToAppOutlinedIcon  className='text-2xl text-gray-600 group hover:text-white'/>
                    <h3 className='text-base text-gray-800 group-hover:text-white   font-semibold'>
                        Signout
                    </h3>
                </div>
            </div>
        </div>
        </Disclosure>
       
    </div>
  )     
}

export default SidebarMenu