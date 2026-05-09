'use client'

import { Loader2Icon } from 'lucide-react'
import { addProjectAction } from '../../lib/projects/project-actions'
import { FormField } from '../forms/form-field'
import { Button } from '../ui/button'
import { useActionState } from 'react'

const initialState = {
  success: false,
  error: {},
  message: ''
}

export default function ProjectSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProjectAction,
    initialState
  )

  return (
    <form
      className='space-y-6'
      action={formAction}
    >
      <FormField
        label='Project Name'
        name='name'
        id='name'
        placeholder='My Project'
        required
        onChange={() => { }}
        error=''
      />
      <FormField
        label='Slug'
        name='slug'
        id='slug'
        placeholder='my-project'
        required
        onChange={() => { }}
        error=''
      />
      <FormField
        label='Tagline'
        name='tagline'
        id='tagline'
        placeholder='A catchy tagline for your project'
        required
        onChange={() => { }}
        error=''
      />
      <FormField
        label='Description'
        name='description'
        id='description'
        placeholder='A brief description about your project'
        required
        onChange={() => { }}
        error=''
        textarea
      />
      <FormField
        label='Website URL'
        name='websiteUrl'
        id='websiteUrl'
        placeholder='https://my-project.com'
        required
        onChange={() => { }}
        error=''
      />
      <FormField
        label='Tags'
        name='tags'
        id='tags'
        placeholder='Frontend, Backend, Game Dev'
        required
        onChange={() => { }}
        error=''
      />
      <Button
        type='submit'
        size='lg'
        className='w-full'
      >
        {isPending ? (
          <Loader2Icon className='size-4 animate-spin' />
        ) : (
          <span>Submit Project</span>  
        )}
      </Button>
    </form>
  )
}