"use client"
import React from 'react'

interface BlogsTopHeadlinesProps {
    heading?: string;
    title?: string;
    description?: string;
}

const BlogsTopHeadlines: React.FC<BlogsTopHeadlinesProps> = ({ heading, title, description }) => {
    return (
        <div className='flex flex-col items-center justify-center w-full gap-4'>
          
                <div className='hover:cursor-pointer text-sm font-bold font-poppins text-center text-lightBlue uppercase'>
                    {heading}
                </div>
            <div className='text-5xl font-medium flex justify-start text-black w-full font-poppins'>
                {title}
            </div>
            <div className='text-[#595959] flex justify-start w-full'>
                {description}
            </div>
        </div>
    )
}

export default BlogsTopHeadlines