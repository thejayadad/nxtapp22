'use client'
import React, { useState } from 'react'
import { useActionState } from 'react'
import { createEvent } from '@/lib/action/event/add-event'
import BookingsForm from './bookings-form'
import TitleInput from './title-input'

const EventForm = () => {
  return (
    <div>
        <form
        action={createEvent}
        className='flex flex-col space-y-4 max-w-screen-md p-4 pt-8 mx-auto'
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 border rounded-lg p-4'>
            <div className=' col-span-1'>
                <div className='flex flex-col space-y-4'>
                    <TitleInput />
                </div>
              </div>
              <div className=' col-span-1 flex'>
                <BookingsForm />
              </div>

            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default EventForm