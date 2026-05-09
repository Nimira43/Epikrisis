'use server'

type FormState = {
  success: boolean
  errors?: Record<string, string[]>
  message: string
}

export const addProjectAction = async (
  prevState: FormState,
  formData: FormData
) => {
  console.log(formData)

  return {
    success: true,
    errors: {},
    messages: 'Project added successfully.'
  }
}