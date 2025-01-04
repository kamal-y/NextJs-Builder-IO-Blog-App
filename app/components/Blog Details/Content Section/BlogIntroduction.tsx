"use client"
import React from 'react'

interface Paragraph {
    data?: string;
}

interface BlogIntroductionProps {
    Introduction?: string;
    paragraphLists?: Paragraph[];
}

const BlogIntroduction: React.FC<BlogIntroductionProps> = ({ Introduction = "Introduction", paragraphLists }) => {
    return (
        <div className='pl-14 w-full flex flex-col gap-4 pb-16 sm:pr-0 pr-14'>
            <div className='text-3xl font-semibold tracking-tighter flex justify-start text-wrap break-words text-black w-full font-poppins'
                dangerouslySetInnerHTML={{ __html: Introduction }}/>

            <div className='flex text-wrap break-words flex-col gap-16 mb-3 font-normal text-[#595959]'>
                { paragraphLists && paragraphLists.map((paragraph, index) => (
                    <div key={index}
                    dangerouslySetInnerHTML={{__html : paragraph.data || ''}}/>
                ))}
            </div>

        </div>
    )
}

export default BlogIntroduction