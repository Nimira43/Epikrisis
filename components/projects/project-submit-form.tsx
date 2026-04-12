'use client'

import { Input } from '../ui/input'
import { Label } from '../ui/label'

export default function ProjectSubmitForm() {
  return (
    <form className='space-y-6'>
      <div className='space-y-2'>
        <Label htmlFor='name'>
          Project Name
        </Label>
        <Input
          id='name'
          className='name'
          required
          onChange={() => {}}
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='slug'>
          Slug
        </Label>
        <Input
          id='slug'
          className='slug'
          required
          onChange={() => {}}
        />
      </div>
    </form>
  )
}