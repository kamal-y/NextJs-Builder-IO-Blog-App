import React, { useState } from "react";
import { builder } from "@builder.io/sdk";
import FeaturedCard from "./FeaturedCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface Article {
  blog: any; // Replace `any` with the appropriate type if you have one
}

interface ExploreOurCaseStudySectionProps {
  articleRef?: Article[];
  toggleButtonViewAll: boolean;
}

const AllFeaturedCards: React.FC<ExploreOurCaseStudySectionProps> = ({
  articleRef = [], 
  toggleButtonViewAll,
}) => {
  const [showAll, setShowAll] = useState(false);

  const displayedArticles = showAll || !toggleButtonViewAll 
    ? articleRef 
    : articleRef.slice(0, 3);

  return (
    <div className="flex flex-col items-center gap-12 pt-20">
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start justify-items-center gap-6">
        {displayedArticles.map((article, index) => (
          <FeaturedCard articleRef={article.blog} key={index} />
        ))}
      </div>

      {/* Toggle Button */}
      {toggleButtonViewAll && (
        <div className="w-fit">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 bg-white text-#00C7BE rounded-lg hover:shadow-md border border-[#00C7BE] transition-all"
          >
            {showAll ? "Close" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AllFeaturedCards;
