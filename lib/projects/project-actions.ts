'use server'

import { auth } from '@clerk/nextjs/server'

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


  } catch (error) {
    console.error(error)

    return {
      success: false,
      errors: error,
      messages: 'Failed to submit project.'
    }
  }
}