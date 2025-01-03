"use client";
import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import BlogCard from "./BlogCard";
import leftAll from "../../assets/First.svg";
import left from "../../assets/Prev.svg";
import right from "../../assets/Next.svg";
import rightAll from "../../assets/Last.svg";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const AllBlogCard: React.FC = () => {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const currentPage = Number(pageParam) || 1;

  const [items, setItems] = useState<any[]>([]);
  const [itemCount, setItemCount] = useState(0);
  const [currentTab, setCurrentTab] = useState<string | null>(null); // Track active category

  const perPage = 9;

  const categories = [
    { label: "View All", value: null },
    { label: "Healthcare Trends", value: "AI Healthcare" },
    { label: "AI Insights", value: "AI Insights" },
    { label: "Case Studies", value: "Case Studies" },
    { label: "Best Practices", value: "Best Practices" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch articles with optional category filtering
        const allItems = await builder.getAll("articles", {
          query: currentTab ? { "data.blogCategory": currentTab } : undefined,
        });
        setItemCount(allItems.length);

        // Paginate fetched items
        const paginatedItems = allItems.slice(
          (currentPage - 1) * perPage,
          currentPage * perPage
        );
        setItems(paginatedItems);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [currentPage, currentTab]);

  const handleCategoryClick = (category: string | null) => {
    setCurrentTab(category); // Update the current tab
    // Reset to the first page when switching categories
    window.history.replaceState(null, "", "?page=1");
  };

  const totalPages = Math.ceil(itemCount / perPage);

  const getPrevPage = (currentPage: number) =>
    currentPage - 1 > 0 ? currentPage - 1 : 1;
  const getNextPage = (currentPage: number, totalPages: number) =>
    currentPage + 1 <= totalPages ? currentPage + 1 : totalPages;

  const prevPage = getPrevPage(currentPage);
  const nextPage = getNextPage(currentPage, totalPages);

  const pageNumbers: number[] = [];
  const offsetNumber = 3;

  for (let i = currentPage - offsetNumber; i <= currentPage + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="flex flex-col gap-12 py-7 pt-20 max-w-screen-2xl dark:border-gray-400">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 justify-between items-center sm:px-8 md:px-16">
        <div className="flex flex-wrap gap-1 items-center justify-center sm:justify-start w-full sm:w-auto">
          {categories.map((category) => (
            <div
              key={category.value}
              className={`cursor-pointer px-4 py-2 rounded-md text-center ${currentTab === category.value
                ? "text-[#00C7BE] font-semibold"
                : "text-black"
                }`}
              onClick={() => handleCategoryClick(category.value)}
            >
              {category.label}
            </div>
          ))}
        </div>

        {/* Search Box */}
        <div className="flex items-center border rounded-md px-2 border-[#00C7BE]">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-2 py-1 focus:outline-none text-sm"
          />
        </div>
      </div>

      {/* Blog Cards */}
      {itemCount === 0 ? (
        <h2 className="text-center w-full">No Cards Available</h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start justify-items-center gap-4">
          {items.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="pagination flex items-center justify-center gap-2">
        <>
          <Link href={`?page=1`}>
            <Image src={leftAll} alt="First" width={24} height={24} />
          </Link>
          <Link href={`?page=${prevPage}`}>
            <Image src={left} alt="Previous" width={24} height={24} />
          </Link>
          <div className="flex items-center justify-center gap-2">
            {pageNumbers.map((pageNum) => (
              <div className="flex items-center justify-center" key={pageNum}>
                <Link
                  href={`?page=${pageNum}`}
                  className={`px-2 ${pageNum === currentPage
                    ? "active bg-[#00C7BE] rounded-full text-white"
                    : ""
                    }`}
                >
                  {pageNum}
                </Link>
              </div>
            ))}
          </div>
          <Link href={`?page=${nextPage}`}>
            <Image src={right} alt="Next" width={24} height={24} />
          </Link>
          <Link href={`?page=${totalPages}`}>
            <Image src={rightAll} alt="Last" width={24} height={24} />
          </Link>
        </>
      </div>
    </div>
  );
};

export default AllBlogCard;
