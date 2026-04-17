import SectionHeader from '@/components/common/section-header'
import ProjectSubmitForm from '@/components/projects/project-submit-form'
import { FileCodeCorner } from 'lucide-react'

export default function SubmitPage() {
  return (
    <section className='py-20'>
      <div className='wrapper'>
        <SectionHeader 
          title='Submit your Project'
          icon={FileCodeCorner}
          description='Share your project with the community. Your submission will be reviewed before it goes live.'
          centre
        />
        <div className='max-w-2xl mx-auto'>
          <ProjectSubmitForm />
        </div>
      </div>
    </section>
  )
}

