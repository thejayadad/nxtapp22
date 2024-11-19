import React from 'react'

const TitleInput = () => {
  return (
    <div className='flex flex-col space-y-1'>
        <label>Title</label>
        <input className='bg-neutral-100 rounded p-2 outline-none border-none' name='title' id='title' placeholder='Title' />
    </div>
  )
}

export default TitleInput