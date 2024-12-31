"use client";
import React from 'react';
import AllBlogCard from './AllBlogCard';
import { useSearchParams } from 'next/navigation';
import BlogsTopHeadlines from './BlogsTopHeadlines';


const BlogSection:React.FC = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const page = parseInt(params.get('page') || "1", 10);

  return (
    <div className='flex flex-col items-center justify-center w-full gap-4 px-6'>

      <BlogsTopHeadlines
       heading = "BLOG"
       title = "Explore our Knowledge Base"
       description = "Insights and resources for AI in healthcare"/>

      <AllBlogCard  />
    </div>
  );
};

export default BlogSection;
