"use client"
import React, { useState } from 'react'
import BlogsTopHeadlines from '../All Blog Section/BlogsTopHeadlines'


const FAQ:React.FC = () => {


    return (
        <div className='flex gap-8 justify-center items-center flex-col py-8 max-w-5xl mx-auto'>

            <div className='w-4/5'>
                <BlogsTopHeadlines heading="FAQ" title="Frequently asked questions" description="Explore to learn more about how Symbiofy can empower your business with AI-driven solutions." />

            </div>
        </div>
    )
}

export default FAQ