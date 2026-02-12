import Link from 'next/link'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'

interface Project {
  id: number
  name: string
  description: string
  tags: string[]
  votes: number
  isFeatured: boolean
}

export default function ProjectCard({
  project
}: {
  project: Project
}) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className='group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-45'>
        <CardHeader className='flex-1'>
          <div className='flex items-start gap-4'>
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-2'>     
                <CardTitle className='text-lg group-hover:text-primary transition-colors'>
                  {project.name}
                </CardTitle>
                {project.isFeatured && (
                  <Badge className='bg-primary text-primary-foreground'>
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription>
                {project.description}
              </CardDescription>
            </div>
            
          </div>  
        </CardHeader>
        <CardFooter>
          <div className='flex items-center gap-2'>
            {project.tags.map((tag) => (
              <Badge key={tag} variant='support'>
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}