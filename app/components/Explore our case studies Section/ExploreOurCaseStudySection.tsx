"use client"
import React from 'react'
import BlogsTopHeadlines from '../All Blog Section/BlogsTopHeadlines';
import AllFeaturedCards from '../Featured Cards Section/AllFeaturedCards';

interface articleType{
    blog:any
}
interface ExploreOurCaseStudySectionProps {
    listArticleRed?: articleType[];
  }

const ExploreOurCaseStudySection:React.FC<ExploreOurCaseStudySectionProps> = ({listArticleRed}) => {

    console.log(listArticleRed);
    return (
        <div className='flex flex-col items-center justify-center w-full gap-4 px-6 py-16'>

            <div className='w-3/5'>
                <BlogsTopHeadlines
                    heading="BLOG"
                    title="Explore our case studies"
                    description="Discover how our AI transforms healthcare pratices" />
            </div>

            {/* we will use reference for artcles section model  */}
            <AllFeaturedCards articleRef = {listArticleRed}  />
        </div>
    );
}

export default ExploreOurCaseStudySection