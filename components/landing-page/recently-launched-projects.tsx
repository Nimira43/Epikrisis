import { CodeXml, AppWindow } from 'lucide-react'
import SectionHeader from '../common/section-header'
import { recentlyLaunchedProjects } from '@/data/data'
import ProjectCard from '../projects/project-card'
import EmptyState from '../common/empty-state'

export default function RecentlyLaunchedProjects() {
  return (
    <section className='py-20'>
      <div className='wrapper space-y-12'>
        <SectionHeader
          title='Latest Projects'
          icon={CodeXml}
          description='The most recently launched projects on the platform'
        />
          {recentlyLaunchedProjects.length > 0
            ? (
              <div className='grid-wrapper'>
                {recentlyLaunchedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                message='No projects launched in the last week.'
                icon={AppWindow}
              />
            )
          }          
      </div>
    </section>
  )
}