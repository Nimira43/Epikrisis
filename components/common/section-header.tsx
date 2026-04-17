import type { LucideIcon } from 'lucide-react'

export default function SectionHeader({
  title,
  icon: Icon,
  description,
  centre = false
}: {
  title: string
  icon: LucideIcon
  description: string
  centre?: boolean
}) {
  return (
    <div className={`mb-12 ${centre ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-2 mb-3 ${centre ? 'justify-center' : ''}`}>
        <Icon className='size-6 text-primary' />
        <h2 className='text-3xl font-semibold'>{title}</h2>
      </div>

      <p className='text-muted-foreground text-lg'>
        {description}
      </p>
    </div>
  )
}
