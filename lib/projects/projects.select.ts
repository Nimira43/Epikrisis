import { db } from '@/db'
import { projects } from '@/db/schema'
import { desc, eq } from 'drizzle-orm'
import { connection } from 'next/server'

export async function getFeaturedProjects() {
  'use cache'
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

export async function getAllProjects() {
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
  await connection()
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const projectsData = await getAllProjects()
  const fourWeeksAgo = new Date()
  fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28)
  
  return projectsData.filter(
    (project) => 
      project.approvedAt && 
      new Date(project.approvedAt.toISOString()) >= fourWeeksAgo
  )
}