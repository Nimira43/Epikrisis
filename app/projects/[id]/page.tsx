'use cache'

import { getFeaturedProjects } from '@/lib/projects/projects.select'

export const generateStaticParams = async () => {
  const projects = await getFeaturedProjects()
  return projects.map((project) => ({
    id: project.id.toString()
  }))
}

export default async function Products({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <div>
      <h4>This is the Dynamic Project Page</h4>
      <h1>Project {id}</h1>
    </div>
  )
}