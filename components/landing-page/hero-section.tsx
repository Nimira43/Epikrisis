import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import LogoScroller from './logo-scroller'
import { MdOutlineShare } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'

const LiveBadge = () => {
  return (
    <Badge
      variant='outline'
      className='px-4 py-2 mb-8 text-sm backdrop-blur-sm'
    >
      <span className='relative flex h-2 w-2'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75' />
        <span className='relative inline-flex rounded-full h-2 w-2 bg-primary' />
      </span>
      <span className='text-muted-foreground ml-2'>Become a part of the Epikrisis Community!</span>
    </Badge>
  )
}

export default function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-gray-100'>
      <div className='wrapper'>
        <div className='flex flex-col items-center justify-center lg:py-24 py-12 space-y-6 text-center'>
          <LiveBadge />
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6'>Empowering Developers to Share and Showcase Their Creations</h1>
          <p>Submit your coding concepts, refine them with community insight, and watch your project progress from proposal to approved entry in Epikrisis&apos; growing inventory.</p>
          <div className='flex flex-col sm:flex-row gap-4 mt-10 mb-16'>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='text-base px-8 shadow-lg'
            >
              <Link href='/submit'>
                <MdOutlineShare className='text-black' />
                Share
              </Link>
            </Button>
            <Button
              asChild
              size='lg'
              className='text-base px-8 shadow-lg'
            >
              <Link href='/explore'>
                Explore
                <FiArrowRight />
              </Link>
            </Button>
          </div>
          <LogoScroller />
        </div>   
      </div>
    </section>
  )
}