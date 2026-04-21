'use client'

import { FormField } from '../forms/form-field'

export default function ProjectSubmitForm() {
  return (
    <form className='space-y-6'>
      <FormField
        label='Project Name'
        name='name'
        id='name'
        required
        onChange={() => { }}
        error=''
      />
      <FormField
        label='Slug'
        name='slug'
        id='slug'
        required
        onChange={() => { }}
        error=''
      />
      <FormField
        label='Tagline'
        name='tagline'
        id='tagline'
        required
        onChange={() => { }}
        error=''
      />
      <FormField
        label='Website URL'
        name='websiteUrl'
        id='websiteUrl'
        required
        onChange={() => { }}
        error=''
      />
      <FormField
        label='Tags'
        name='tags'
        id='tags'
        required
        onChange={() => { }}
        error=''
      />
    </form>
  )
}