"use client"
import React from 'react'
import Button from '../Elements Section/Button'

interface ExploreButtonProps{
  title: string
}

const ExploreButton: React.FC<ExploreButtonProps> = ({title}) => {
  return (
    <div className='px-4  flex justify-center items-center border hover:cursor-pointer  border-[#00C7BE] rounded-md'>
      <Button text={title} variant='rounded-full' />
    </div>
  )
}

export default ExploreButton