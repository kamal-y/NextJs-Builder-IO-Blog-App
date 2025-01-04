"use client";
import React from 'react'

interface Paragraph {
    text?: string;
}

interface BlogIntroductionProps {
    Heading?: string;
    paragraphLists?: Paragraph[];
}

const BlogSubSectionContents : React.FC<BlogIntroductionProps> = ({ Heading = "Write Heading", paragraphLists }) => {
    return (
        <div className='pl-14 w-full flex flex-col gap-4 pb-10 sm:pr-0 pr-14'>
            <div className='text-xl font-semibold tracking-tighter flex justify-start text-black w-full font-poppins text-wrap break-words'
            dangerouslySetInnerHTML={{__html: Heading}}/>
                

            <div className='flex flex-col gap-16 mb-3 font-normal text-[#595959] text-wrap break-words'>
                { paragraphLists && paragraphLists.map((paragraph, index) => (
                    <div key={index}
                    dangerouslySetInnerHTML={{__html:paragraph.text || ""}}/>
                ))}
            </div>

        </div>
    )
}

export default BlogSubSectionContents