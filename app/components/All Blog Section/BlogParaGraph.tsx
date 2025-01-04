"use client"
import React from 'react'

interface BlogParaGraphProps  {
    text? : "string"
}

const BlogParaGraph : React.FC<BlogParaGraphProps> = ({text}) => {
    return (
        <div className='pr-14 sm:pr-0 w-full pl-14 flex flex-col gap-16 py-10 font-normal text-[#595959] text-wrap break-words'
         dangerouslySetInnerHTML={{__html:text || ""}}/>
    )
}

export default BlogParaGraph