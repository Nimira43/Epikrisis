import { AppWindow } from 'lucide-react'
import SectionHeader from '../common/section-header'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function FeaturedProjects() {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='wrapper'>
        <div className='flex items-center justify-between mb-8'>
          <SectionHeader
            title='Featured Projects'
            icon={AppWindow}
            description='The best projects from the Community this week...'
          />
          <Button
            asChild
            className='hidden sm:flex mb-10'
          >
            <Link href='/explore'>
              View All
              <FaArrowRight className='size-4' />
            </Link>
          </Button>
        </div>
        <div className='grid-wrapper'>
          <p>Featured Project 1</p>
          <p>Featured Project 2</p>
          <p>Featured Project 3</p>
          <p>Featured Project 4</p>
        </div>
      </div>
    </section>
  )
}