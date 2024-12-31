"use client"
import React from 'react'
import Link from 'next/link';
import Button from '../Elements Section/Button';

interface RelatedPostCardProps {
  articleRef?: any;
}


const RelatedPostCard: React.FC<RelatedPostCardProps> = ({ articleRef }) => {

  const data = articleRef?.value?.data  || {
    description: 'No description available.',
    readTime: '0',
    thumbNail: '/placeholder-image.jpg',
    title: 'Untitled',
    slug: '#',
  };

  const { description, readingTime, authorImage, title,authorName, slug } = data

  return (
    <div className="p-4 flex flex-col gap-3 max-w-xs w-ful">

      <div className=" p-3 rounded-lg overflow-hidden  bg-[#F1F1F3]">
        {/* Blog Title */}
        <Link href={`/blogs/${slug}`} passHref>
          <div className="mb-2 text-base font-semibold tracking-tight text-black">
            {title}
          </div>
        </Link>

        {/* Blog Description */}
        <p className="mb-3 font-normal text-[#595959] ">
          {description}
        </p>

        {/* Author Section */}
        <div className="flex justify-start items-center gap-3">
          <Link href={`/blogs/${slug}`} passHref className="flex gap-2 items-center">
            {/* Author Profile Image */}
            <img
              className="rounded-full"
              src={authorImage}
              alt="Author Profile Picture"
              width={40}
              height={40}
            />
            {/* Author Name */}
            <div className="text-[#595959]">{authorName}</div>
          </Link>

          {/* Insights Button */}
          <div className="w-1/5 ">
            <Button text="Insights" variant='rounded-full' />
          </div>

          {/* Reading Time */}
          <div className="text-[#595959]">{readingTime} min</div>
        </div>
      </div>
    </div>
  );
}

export default RelatedPostCard