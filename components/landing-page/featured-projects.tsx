import { AppWindow } from 'lucide-react'
import SectionHeader from '../common/section-header'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import ProjectCard from '../projects/project-card'
import { getFeaturedProjects } from '@/lib/products/products.select'

export default async function FeaturedProjects() {
  const featuredProjects = await getFeaturedProjects() 
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
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}