import React, { useState } from "react";
import { builder } from "@builder.io/sdk";
import FeaturedCard from "./FeaturedCard";
import ExploreButton from "../Explore our case studies Section/ExploreButton";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface ExploreOurCaseStudySectionProps {
  articleRef?: any[];
}

const AllFeaturedCards: React.FC<ExploreOurCaseStudySectionProps> = ({ articleRef }) => {
  const [showAll, setShowAll] = useState(false);

  // Determine the number of cards to show based on the "showAll" state
  const displayedArticles = showAll ? articleRef : articleRef?.slice(0, 3);

  return (
    <div className="flex flex-col items-center gap-12 pt-20">
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start justify-items-center gap-6">
        {displayedArticles && displayedArticles.map((article, index) => (
          <FeaturedCard articleRef={article?.blog} key={index} />
        ))}
      </div>

      {/* Toggle Button */}
      <div className="w-fit">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-white text-#00C7BE  rounded-lg hover:shadow-md border border-[#00C7BE] transition-all"
        >
          {showAll ? "Close" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default AllFeaturedCards;
