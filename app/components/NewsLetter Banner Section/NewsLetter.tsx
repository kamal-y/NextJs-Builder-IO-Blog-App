"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../assets/Icon.svg";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const NewsLetter:React.FC = () => {
  const [announcementData, setAnnouncementData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await builder.get("announcement-bar", {
          fields: "data",
        });
        setAnnouncementData(data.data); 
      } catch (error) {
        console.error("Error fetching announcement data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="flex p-3 bg-navyBlue gap-2 justify-center items-center text-white">
      <div className="text-center text-xs sm:text-sm  text-white">
      {announcementData && (
        <Link
          href={announcementData.link || "#"}
          className="text-white"
        >
          {announcementData.announcementTitle}
        </Link>
      )}
      </div>
      
      <div className="w-3 h-3">
        <Image src={arrow} alt="arrow" className="w-full h-full" />
      </div>
    </div>
  );
};

export default NewsLetter;
