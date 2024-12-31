import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import FeaturedCard from "./FeaturedCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface AllFeaturedCardsProps {
  sectionName?: string;
  tag?: string;
}

const AllFeaturedCards: React.FC<AllFeaturedCardsProps> = ({ tag }) => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  tag="Case Studies"

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch articles with optional category filtering
        const query = tag ? { "data.blogCategory": tag } : {};
        const allItems = await builder.getAll("articles", { query });
        setItems(allItems);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tag]);

  if (loading) {
    return <div>Loading...</div>; // Replace with a loader component if needed
  }

  return (
    <div className="flex flex-col gap-12 py-7 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-items-center gap-6">
        {/* Render blog cards */}
        {items.map((blog, index) => (
          <FeaturedCard blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllFeaturedCards;
