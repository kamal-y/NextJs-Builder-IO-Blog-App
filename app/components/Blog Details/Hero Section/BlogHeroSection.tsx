"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface HeroSectionProps {
  title: string;
  authorImage?: string;
  authorName?: string;
  date?: string;
  readingTime?: number;
  thumbNail?: string;
}

const BlogHeroSection: React.FC<HeroSectionProps> = ({ title, authorImage, authorName, date, readingTime, thumbNail }) => {
  return (
    <div className='flex flex-col items-center justify-center px-10 md:px-0 md:w-2/3 mx-auto gap-4 py-4'>
      <div className='flex flex-col w-full items-center justify-center gap-4'>
        <Link href={`/blogs`} className='hover:cursor-pointer text-md  font-medium text-start w-full text-lightBlue font-poppins'>
          <div className='hover:cursor-pointer text-md font-medium text-start w-full text-lightBlue font-poppins'>
            &lt; ALL POST
          </div>
        </Link>

        <div className='text-5xl font-medium flex justify-start text-black w-full font-poppins pr-28'>
          <div className='bg-gradient-to-r from-black via-[#7e7d7d] to-[#b8b7b7] inline-block text-transparent bg-clip-text'>
            {title}
          </div>
        </div>

        {/* Author Section */}
        <div className="flex md:flex-row flex-col justify-start items-center gap-3 px-10 md:px-0 md:w-2/3">
          <Link href={`#`} passHref className="flex gap-2 items-center">
            <Image
              className="rounded-full"
              src={authorImage || '/default-profile.png'}
              alt="profile"
              width={40}
              height={40}
            />
            {/* Author Name */}
            <div className="">{authorName}</div>
          </Link>

          <div>
            {new Date(date || '').toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </div>

          {/* Reading Time */}
          <div className="text-[#595959]">{readingTime} mins</div>
        </div>
      </div>

      {/* Thumbnail Section */}
      <div className='rounded-xl w-full overflow-hidden relative h-64 md:h-72'>
        <Image
          className="object-cover"
          src={thumbNail || '/default-thumbnail.jpg'}
          alt="thumbnail"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default BlogHeroSection;
