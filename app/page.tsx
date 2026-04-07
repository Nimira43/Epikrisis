
import FeaturedProjects from '@/components/landing-page/featured-projects'
import HeroSection from '@/components/landing-page/hero-section'
import RecentlyLaunchedProjects from '@/components/landing-page/recently-launched-projects'
import { LoaderIcon } from 'lucide-react'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <Suspense
        fallback={
          <div className='wrapper flex items-center gap-2'>
            Loading{' '}
            <LoaderIcon className='size-4 animate-spin'
            />
          </div>
        }
      >
        <RecentlyLaunchedProjects />
      </Suspense>
      
    </div>
    
  )
}