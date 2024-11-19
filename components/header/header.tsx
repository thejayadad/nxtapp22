import { auth } from '@/auth'
import React from 'react'
import SignOut from './sign-out'
import SignIn from './sign-in'
import Link from 'next/link'

const Header = async () => {
  const session = await auth()

  return (
    <header className='w=full border-b'>
        <div className='flex max-w-screen-md items-center justify-between w-full mx-auto p-4'>
          <div className='text-2xl text-gray-600 font-extrabold'>Company</div>
          <div className='flex space-y-4 items-center'>
            {
              session ? (
                  <>
                    <div className='flex items-center space-x-3'>
                      <Link href={'/dashboard/new'}>
                        New Event
                      </Link>
                      <SignOut />
                    </div>
                  </>
              ) : (
                <>
                  <div>
                    <SignIn />
                  </div>
                </>
              )
            }
          </div>
        </div>
    </header>
  )
}

export default Header