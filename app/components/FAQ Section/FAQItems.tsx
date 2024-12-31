"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Plus from "../../assets/Plus.svg";
import Minus from "../../assets/Minus.svg";

interface FAQItemsProps {
    question: string;
    answer?: string;
}

const FAQItems: React.FC<FAQItemsProps> = ( {question, answer  }) => {


    const [isActiveQuestion, setIsActiveQuestion] = useState(false);


  return (
    <div className="p-4 mx-0 md:mx-24 flex flex-col gap-2 justify-between items-start rounded-lg shadow-md">

        <div className="w-full flex justify-between items-center gap-32 ">

          <div className="font-medium">
            <p>{question}</p>
          </div>

          <button className="flex justify-center items-center w-8 h-8 transition-all duration-300" onClick={() => setIsActiveQuestion(!isActiveQuestion)}>
            {
              isActiveQuestion ?
                (<Image src={Minus} alt="arrow" />)
                : (<Image src={Plus} alt="arrow" />)
            }
          </button>
        </div>

        <div className={`transition-all duration-300 ${isActiveQuestion ? 'font-light max-h-40 text-[#B3B3B3] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            {answer}
        </div>

      </div>
  )
}

export default FAQItems