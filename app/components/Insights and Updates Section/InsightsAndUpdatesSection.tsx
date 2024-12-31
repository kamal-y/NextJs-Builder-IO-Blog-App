"use client"
import React from 'react'
import BlogsTopHeadlines from '../All Blog Section/BlogsTopHeadlines';
import AllFeaturedCards from '../Featured Cards Section/AllFeaturedCards';

const InsightsAndUpdatesSection = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-4 px-6 bg-[rgb(241,241,243)] py-16'>

      <div className='w-3/5'>
        <BlogsTopHeadlines
          heading="BLOG"
          title="Insights and updates"
          description="Stay Informed with our latest articles" />
      </div>
      {/* card will rendered throug reference data binding  */}
      {/* <AllFeaturedCards  /> */}
    </div>
  );
}

export default InsightsAndUpdatesSection