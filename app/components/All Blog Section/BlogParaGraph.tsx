"use client"
import React from 'react'

interface BlogParaGraphProps  {
    text? : "string"
}

const BlogParaGraph : React.FC<BlogParaGraphProps> = ({text}) => {
    return (
        <div className=' pl-14 flex flex-col gap-16 py-16 font-normal text-[#595959]'>
            {text}
        </div>
    )
}

export default BlogParaGraph