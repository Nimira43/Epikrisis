import { LuCodeXml } from 'react-icons/lu'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href='/'
      className='flex items-center gap-2 group'
    >
      <div className='size-8 rounded-full bg-primary flex items-center justify-center'>
        <LuCodeXml className='size-4 text-white'/>
      </div>
      <span className='logo-font text-primary text-3xl '>Epikrisis</span>
    </Link>
  )
}

export default Logo