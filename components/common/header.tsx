import Link from 'next/link'
import Logo from './logo'
import { RiHomeHeartLine, RiCompassDiscoverLine, RiUser6Line } from 'react-icons/ri'
import { Button } from '../ui/button'

export default function Header() {
  const isSignedIn = false
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
          </nav>

          <div className='flex items-center gap-3'>
            {isSignedIn ? (
              <>
                <Button 
                  asChild
                  variant='ghost'
                >
                  <Link href='/submit'>Upload Project</Link>
                </Button>
                <Button variant='ghost'>
                  <RiUser6Line />
                </Button>
              </>
            ) : (
              <>
                <Button variant='ghost'>
                  Login
                </Button>
                <Button variant='ghost'>
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}