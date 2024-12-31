"use client"
import React from 'react'
import Button from '../Elements Section/Button'

const ExploreButton: React.FC = () => {
  return (
    <div className='px-4  flex justify-center items-center border hover:cursor-pointer  border-[#00C7BE] rounded-md'>
      <Button text='View all' variant='rounded-full' />
    </div>
  )
}

export default ExploreButton