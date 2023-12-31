import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './(Components)/Navbar'
import Hero from './(Components)/Hero'
import Categories from './(Components)/Categories'
import Recent from './(Components)/Recent'
import Banner from './(Components)/Banner'
import Offer from './(Components)/Offer'
import Special from './(Components)/Specialoffer'
import Bar from './(Components)/Bar'
import Brand from './(Components)/Brand'
import New from './(Components)/New'
import Byprice from './(Components)/Byprice'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /> */}

      <body className={inter.className}>
       
         <Navbar/>
    
       
        {children}
        </body>
    </html>
  )
}
