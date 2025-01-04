"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Plus from "../../assets/Plus.svg";
import Minus from "../../assets/Minus.svg";

interface FAQItemsProps {
  question: string;
  answer?: string;
}

const FAQItems: React.FC<FAQItemsProps> = ({ question, answer }) => {
  const [isActiveQuestion, setIsActiveQuestion] = useState(false);

  return (
    <div className="p-4 mx-0 md:mx-24 flex flex-col gap-2 justify-between items-start rounded-lg shadow-md">
      <div className="w-full flex justify-between items-center gap-4 md:gap-32">
        <div className="font-medium "
        dangerouslySetInnerHTML={{__html:question}}/>

        <div className='w-8'>
          <button
            className="flex justify-center items-center  transition-all duration-300 bg-cover"
            onClick={() => setIsActiveQuestion(!isActiveQuestion)}
          >
            {isActiveQuestion ? (
              <Image src={Minus} alt="arrow" className='w-full' />
            ) : (
              <Image src={Plus} alt="arrow" className='w-full' />
            )}
          </button>
        </div>

      </div>

      <div
        className={`transition-all duration-300 ${isActiveQuestion
            ? 'font-light max-h-40 text-[#B3B3B3] opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      dangerouslySetInnerHTML={{__html:answer||""}}/>
    </div>
  );
};

export default FAQItems;
