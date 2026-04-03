import { RiTwitterXFill, RiGithubFill, RiDiscordFill, RiTwitchFill, RiYoutubeFill } from 'react-icons/ri'
import { LuCodeXml } from 'react-icons/lu'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full bg-gray-50'>
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between md:gap-0'>

        <div className='flex items-center gap-2'>
          <LuCodeXml className='text-xl' />
          <span className='text-lg logo-font mt-0.5'>
            Epikrisis
          </span>
        </div>

        <div className='flex items-center gap-4'>
          <Link 
            href='#' 
            className='hover:text-primary transitioning'
          >
            <RiTwitterXFill className='text-xl' />
          </Link>
          <Link 
            href='#'  
            className='hover:text-primary transitioning'
          >
            <RiGithubFill className='text-xl' />
          </Link>
          <Link 
            href='#' 
            className='hover:text-primary transitioning'
          >
            <RiDiscordFill className='text-xl' />
          </Link>
          <Link 
            href='#'  
            className='hover:text-primary transitioning'
          >
            <RiTwitchFill className='text-xl' />
          </Link>
          <Link 
            href='#'  
            className='hover:text-primary transitioning'
          >
            <RiYoutubeFill className='text-xl' />
          </Link>
        </div>

        <div className='text-xs'>
          {/* © {new Date().getFullYear()} Epikrisis — All rights reserved. */}
          © 2026 Epikrisis — All rights reserved.
        </div>
      </div>
    </footer>
  )
}

