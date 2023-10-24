
import Image from 'next/image'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import { DashboardSWR } from './components/swr';
import Head from 'next/head';
import SidebarMenu from './components/SidebarMenu';
import HeaderPage from './components/Header';
import TopCards from './components/dashboard/TopCards';
import ProfilePage from './components/profile/page';


export default function Home() {
  return (
     
    <>
        <div> 
          <Head>
            <title>Luxus Admin</title>
            <meta name="description" content="luxus" />
          </Head>

     
     

          <main className='flex justify-between ' >
         
          <div className="order-first "> <SidebarMenu /></div>
            <div className="order-last "> 
            <HeaderPage />
            <TopCards/>
            
            </div>
      
            
      
          </main>
        </div>
    </>
    
  )
}

