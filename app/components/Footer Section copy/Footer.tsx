"use client"
import React from "react";
import Link from 'next/link';
import { builder } from "@builder.io/sdk";

// Initialize Builder.io with the API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

const Footer: React.FC = () => {

  // const data = await builder.getAll("footers-data-model");
  // console.log("Footer data from Builder.io:", data);

  return (
    <div className="flex flex-col justify-between items-center p-6 w-full">
      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:items-start max-w-5xl w-full sm:pb-32">
        {/* About Section */}
        <div className="text-sm flex gap-2 flex-col justify-between items-start text-[#B3B3B3]">
          <p className="pb-2 text-black font-semibold">About</p>
          <p>Company Overview</p>
          <p>Careers</p>
          <p>Press and Media</p>
          <p>Testimonials</p>
        </div>
  
        {/* Resources Section */}
        <div className="text-sm flex gap-2 flex-col justify-between items-start text-[#B3B3B3]">
          <p className="pb-2 text-black font-semibold">Resources</p>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Webinars & Events</p>
          <p>Case Studies</p>
        </div>
  
        {/* Support & Contact Section */}
        <div className="text-sm flex gap-2 flex-col justify-between items-start text-[#B3B3B3]">
          <p className="pb-2 text-black font-semibold">Support & Contact</p>
          <p>Contact Us</p>
          <p>Technical Support</p>
          <p>Feedback</p>
          <p>Community Forum</p>
        </div>
      </div>
  
      {/* Divider */}
      <div className="w-full border-t border-black py-8"></div>
  
      {/* Footer Bottom */}
      <div className="flex flex-row justify-between items-center gap-3 sm:items-start text-[#666666] text-sm">
        <div className="hover:cursor-pointer">©2024 @weframetech · All rights reserved.</div>
        <Link href="/terms-of-use">
          <p className="hover:cursor-pointer">Terms of Use</p>
        </Link>
        <Link href="/privacy-policy">
          <p className="hover:cursor-pointer">Privacy Policy</p>
        </Link>
        <Link href="/security">
          <p className="hover:cursor-pointer">Security</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
