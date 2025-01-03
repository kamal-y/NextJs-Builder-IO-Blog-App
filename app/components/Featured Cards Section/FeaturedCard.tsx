import React from 'react';
import Link from 'next/link';
import Button from '../Elements Section/Button';

interface BlogData {
  description: string;
  readTime: string;
  thumbNail: string;
  title: string;
  slug: string; 
}

interface FeaturedCardProps {
  blog?: { data: BlogData };
  articleRef?: any;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ blog, articleRef }) => {

  const data = articleRef?.value?.data || blog?.data || {
    description: 'No description available.',
    readTime: '0',
    thumbNail: '/placeholder-image.jpg',
    title: 'Untitled',
    slug: '#', 
  };

  const { description, readTime, thumbNail, title, slug } = data;

  return (
    <div className="flex flex-col gap-3 max-w-xs rounded-lg  overflow-hidden bg-white shadow-lg w-full">
      {/* Blog Thumbnail */}
      <Link href={`blogs/${slug}`}>
        <div className="relative w-full h-48">
          <img
            className="rounded-lg object-cover w-full h-full"
            src={thumbNail}
            alt={`${title} Thumbnail`}
          />
        </div>
      </Link>

      <div className="py-8 px-4">
        <div className="flex items-center gap-3">
          <div className="w-1/5">
            <Button text="News" />
          </div>

          {/* Reading Time */}
          <div className="text-gray-600">{readTime} mins</div>
        </div>

        {/* Content Section */}
        <div>
          {/* Blog Title */}
          <Link href={`blogs/${slug}`}>
            <div className="mb-2 text-base font-semibold text-black hover:underline">
              {title}
            </div>
          </Link>

          {/* Blog Description */}
          <p className="mb-3 font-normal text-gray-600">{description}</p>

          {/* Author Section */}
          <div className="flex items-center gap-3">
            <Link href={`blogs/${slug}`} className="text-teal-600 text-sm underline">
              Read more
            </Link>
            <div className="w-2 h-2">
              {/* Add arrow icon here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
