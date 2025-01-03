"use client"
import React from 'react'
import BlogsTopHeadlines from '../All Blog Section/BlogsTopHeadlines';
import AllFeaturedCards from './AllFeaturedCards';

interface articleType {
    blog: any
}
interface ExploreOurCaseStudySectionProps {
    ArtclesList?: articleType[],
    toggleButtonViewAll?: boolean,
    heading?: string,
    title?: string,
    description?: string
}

const FeaturedCardSection: React.FC<ExploreOurCaseStudySectionProps> = ({
    heading = "HEADING",
    title = "TITLE",
    description = "DESCRIPTION COMES HERE",
    ArtclesList,
    toggleButtonViewAll = false }) => {

    return (
        <div className='flex flex-col items-center justify-center w-full gap-4 px-6 py-16'>

            <div className='w-3/5'>
                <BlogsTopHeadlines
                    heading={heading}
                    title={title}
                    description={description} />
            </div>

            {/* we will use reference for artcles section model  */}
            <AllFeaturedCards articleRef={ArtclesList} toggleButtonViewAll={toggleButtonViewAll} />
        </div>
    );
}

export default FeaturedCardSection