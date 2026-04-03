import Link from 'next/link'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'
import { cn } from '@/lib/utils'
import { InferSelectModel } from 'drizzle-orm'
import { projects } from '@/db/schema'

type Project = InferSelectModel<typeof projects>

export default function ProjectCard({
  project
}: {
  project: Project
  }) {
  const hasVoted = false

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className='group card-hover hover:bg-primary-foreground/40 border-solid border-gray-400 min-h-45'>
        <CardHeader className='flex-1'>
          <div className='flex items-start gap-4'>
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-2'>     
                <CardTitle className='text-lg group-hover:text-primary transition-colors'>
                  {project.name}
                </CardTitle>
                {project.voteCount > 300 && (
                  <Badge className='bg-primary text-primary-foreground'>
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription>
                {project.description}
              </CardDescription>
            </div>
            <div className='flex flex-col items-center gap-1 shrink-0'>
              <Button
                variant='outline'
                size='icon-sm'
                className={cn(
                  'h-8 w-8 text-primary',
                  hasVoted
                    ? 'hover:border-green-500'
                    : 'hover:primary cursor-not-allowed'
                )}
              >
                <IoChevronUpOutline className='size-5' />
              </Button>
              <span className='text-sm font-semibold transition-colors text-foreground'
              >
                {project.voteCount}
              </span>
              <Button
                variant='outline'
                size='icon-sm'
                className={cn(
                  'h-8 w-8 text-primary',
                  hasVoted
                    ? 'hover:border-green-500'
                    : 'hover:primary cursor-not-allowed')}
              >
                <IoChevronDownOutline className='size-5' />
              </Button>
            </div>
            
          </div>  
        </CardHeader>
        <CardFooter>
          <div className='flex flex-wrap items-center justify-center gap-2 w-full'>
            {project.tags?.map((tag) => (
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