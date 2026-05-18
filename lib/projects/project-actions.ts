'use server'

import { auth } from '@clerk/nextjs/server'
import { projectSchema } from './project-validations'

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
    const { userId } = await auth()
    
    if (!userId) {
      return {
        success: false,
        message: 'You must be logged in to submit a project.'
      }
    }

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

    const data = validatedData.data

  } catch (error) {
    console.error(error)

    return {
      success: false,
      errors: error,
      message: 'Failed to submit project.'
    }
  }
}