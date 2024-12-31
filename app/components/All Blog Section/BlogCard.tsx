"user client"
import React from 'react'
import Link from 'next/link'
import Button from '../Elements Section/Button'

const BlogCard: React.FC<any> = ({blog}) => {

  const {slug,authorImage, authorName, description,postedDate,readingTime,thumbNail,title} = blog.data;

  return (
    <div className="flex flex-col gap-3 max-w-xs rounded-lg overflow-hidden p-2 ">
      {/* Blog Thumbnail */}
      <Link href={`/blogs/${slug}`} passHref>
        <div className="relative w-full h-full">
            <img
              className="rounded-lg object-cover w-full h-full"
              src={thumbNail}
              alt="Blog Thumbnail"
            />
        </div>
      </Link>

      <div className="">
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
};

export default BlogCard;