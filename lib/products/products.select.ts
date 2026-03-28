import { db } from '@/db'
import { projects } from '@/db/schema'
import { desc, eq } from 'drizzle-orm'

export async function getFeaturedProjects() {
  const projectsData = await db
    .select()
    .from(projects)
    .where(
      eq(projects.status, 'approved')
    )
    .orderBy(
      desc(projects.voteCount)
    )
  return projectsData
}

export async function getRecentlyLaunchedProjects() {
  const projectsData = await getFeaturedProjects()
  const fourWeeksAgo = new Date()
  fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28)
  
  return projectsData.filter(
    (project) => 
      project.approvedAt && 
      new Date(project.approvedAt.toISOString()) >= fourWeeksAgo
  )
}