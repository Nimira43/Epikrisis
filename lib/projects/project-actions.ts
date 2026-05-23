'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { projectSchema } from './project-validations'
import { db } from '@/db'
import { z } from 'zod'
import { projects } from '@/db/schema'

type FormState = {
  success: boolean
  errors?: Record<string, string[]>
  message: string
}

export const addProjectAction = async (
  prevState: FormState,
  formData: FormData
) => {
  
  try {
    const { userId, emailAddresses } = await auth()
    
    if (!userId) {
      return {
        success: false,
        message: 'You must be logged in to submit a project.'
      }
    }

    const user = await currentUser()
    const userEmail = user?.primaryEmailAddress?.emailAddress || 'anonymous'

    const rawFormData = Object.fromEntries(formData.entries())

    const validatedData = projectSchema.safeParse(rawFormData)

    if (!validatedData.success) {
      console.log(validatedData.error.flatten().fieldErrors)
      return {
        success: false,
        errors: validatedData.error.flatten().fieldErrors,
        message: 'Invalid data'
      }
    }

    const { name, slug, tagline, description, websiteUrl, tags } = validatedData.data

    const tagsArray = tags
      ? tags.filter((tag) => typeof tag === 'string')
      : [] 

    await db
      .insert(projects)
      .values({
        name,
        slug,
        tagline,
        description,
        websiteUrl,
        tags: tagsArray,
        status: 'pending',
        submittedBy: userEmail,
        userId: '' 
      })
    
    return {
      success: true,
      message: 'Project submitted successfully. It will be reviewed shortly.'
    }

  } catch (error) {
    console.error(error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: 'Validation failed. Please check the form.'
      }
    }

    return {
      success: false,
      errors: error,
      message: 'Failed to submit project.'
    }
  }
}