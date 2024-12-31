"use client"
import React from 'react'

interface TestimonialsProps {
    review?: string,
    clientName?: string
}

const Testimonials: React.FC<TestimonialsProps> = ({
     review = "Delightfully effective experience... Delivered a principal software engineer to offer within a month.It’s remarkably helpful to access a sophisticated curation of candidates across tough-to-fill roles from the first week!"
     , 
     clientName= "Sr. recruiter @Google Inc."
     }
    ) => {
    return (
        <div className='flex flex-col items-center justify-center gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto w-full max-w-4xl'>
            {/* Responsive text with word wrapping */}
            <div className='text-start text-base sm:text-lg lg:text-xl font-medium break-words w-full'>
                {review}
            </div>

            {/* Client name styled for smaller screens */}
            <div className='text-center text-sm sm:text-base break-words'>
                {clientName}
            </div>
        </div>
    )
}

export default Testimonials
