
import FeaturedProjects from '@/components/landing-page/featured-projects'
import HeroSection from '@/components/landing-page/hero-section'
import RecentlyLaunchedProjects from '@/components/landing-page/recently-launched-projects'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <RecentlyLaunchedProjects />
    </div>
    
  )
}