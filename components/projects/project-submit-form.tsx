'use client'

import { FormField } from '../forms/form-field'
import { Button } from '../ui/button'

export default function ProjectSubmitForm() {
  return (
    <form className='space-y-6'>
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
        Submit Project
      </Button>
    </form>
  )
}