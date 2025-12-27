import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const LiveBadge = () => {
  return <Badge>Become a part of the Epikrisis Community</Badge>
}

export default function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-gray-300'>
      <div className='wrapper'>
        <div className='flex flex-col items-center justify-center lg:py-24 py-12 space-y-6 text-center'>
          <LiveBadge />
          <h1>Empowering Developers to Share and Showcase Their Creations</h1>
          <p>Submit your coding concepts, refine them with community insight, and watch your project progress from proposal to approved entry in Buddy’s growing inventory.</p>
          <Button>Share</Button>
          <Button variant='outline'>Explore</Button>
        </div>   
      </div>
    </section>
  )
}