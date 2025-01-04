"use client"
import React from 'react'

interface Paragraph {
  text?: string;
}

interface BlogIntroductionProps {
  ListItems?: Paragraph[];
}


const BlogPostLists: React.FC<BlogIntroductionProps> = ({ ListItems }) => {
  console.log("list items-->", ListItems );
  return (
    <div className='pl-14 w-full  rounded-lg sm:pr-0 pr-14'>

      <div className='flex flex-col gap-4 bg-[#F1F1F3] p-4 rounded-lg'>
        <div className='flex flex-col gap-4 '>
          {ListItems && ListItems.map((paragraph, index) => (
            <div key={index} className="flex items-start space-x-2">
              {/* Dot */}
              <span className="w-2 h-2 bg-black rounded-full mt-1 "></span>
              <div className='text-wrap break-words'
              dangerouslySetInnerHTML={{__html : paragraph.text || ""}}/>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default BlogPostLists