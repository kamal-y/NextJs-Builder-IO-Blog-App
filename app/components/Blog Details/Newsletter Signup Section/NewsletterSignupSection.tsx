"use client"
import React from 'react';

interface NewsletterSubscriptionProps{
  title : string,
  description : string
}

const NewsletterSubscription:React.FC<NewsletterSubscriptionProps> = ({title,description}) => {
  return (
    <div className="flex flex-col text-start items-center justify-center md:pr-16 p-3 bg-white sm:py-12 max-w-md rounded-md">
      <h2 className="text-2xl text-start font-bold font-poppins sm:text-3xl text-gray-800"
        dangerouslySetInnerHTML={ {__html:title} } />

      <p className="text-start mt-4  text-[#595959]]" dangerouslySetInnerHTML={ {__html:description} } />

      <div className="mt-6   flex w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-[#E4E4E7]  border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        />
        <button
          type="button"
          className="px-6 py-2 text-white bg-[#00C7BE] rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Join now
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
