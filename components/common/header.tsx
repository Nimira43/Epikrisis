import Link from 'next/link'
import Logo from './logo'
import { RiHomeHeartLine, RiCompassDiscoverLine } from 'react-icons/ri'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
      <div className='wrapper px-12'>
        <div className='flex h-16 items-center justify-between'>
          <Logo />
          <nav className='flex items-center gap-1'>
            <Link
              href='/'
              className='flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transitioning'
            >
              <RiHomeHeartLine className='size-4' />
              <span>Home</span>
            </Link>
            <Link
              href='/explore'
              className='flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transitioning'
            >
              <RiCompassDiscoverLine className='size-4' />
              <span>Explore</span>
            </Link>
            <div className='flex items-center gap-3'>
              <Button asChild>
                <Link href='/submit'>Upload Project</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}