import React from 'react'
import EventForm from '../_components/form/event-form'
import { auth } from '@/auth'

const NewEventPage = async () => {
    const session = await auth()
    const userEmail = session?.user?.email
  return (
    <div>
        <div>
            <EventForm  />
        </div>
    </div>
  )
}

export default NewEventPage