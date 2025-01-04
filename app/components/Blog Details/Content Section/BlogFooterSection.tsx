"use client"
import React from 'react'
import Link from 'next/link'
import personal from "../../../assets/post-info_link.svg"
import Twiiter from "../../../assets/post-info_link (1).svg"
import LinkdIn from "../../../assets/post-info_link (2).svg"
import facebook from "../../../assets/post-info_link (3).svg"
import Image from 'next/image'


interface BlogFooterSectionProps{
    authorImage? : string,
    authorName? : string,
    date?:string,
    tag?:string,
    personalLink? :string,
    twitterLink? : string,
    linkdInLink? : string,
    facebookLink? : string
}

const BlogFooterSection:React.FC<BlogFooterSectionProps> = ({authorImage,authorName,date,tag,personalLink,twitterLink,linkdInLink,facebookLink}) => {
    return (
        <div>
            <div className='pr-14 sm:pr-0 pl-14 w-full flex sm:flex-row flex-col sm:gap-4  text-sm gap-8 pb-16 justify-between items-center'>
                <div className="flex flex-row justify-start items-center gap-3">
                    <Link href={`#`} passHref className="flex gap-2 items-center">
                        {/* Author Profile Image */}
                        <img
                            className="rounded-full"
                            src={authorImage}
                            alt="profile"
                            width={30}
                            height={30}
                        />
                        {/* Author Name */}
                        <div className="">{authorName}</div>
                    </Link>

                    <div>
                        {new Date(date || '').toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </div>

                    {/* Reading Time */}
                    <div className="text-[#00C7BE]">{tag}</div>
                </div>

                <div className='flex gap-2 justify-center items-center'>
                    {
                        personalLink &&
                        <div>
                            <Image
                            className="rounded-full"
                            src={personal}
                            alt="profile"
                            width={30}
                            height={30}
                        />
                        </div>
                    }
                    {
                        twitterLink &&
                        <div>
                            <Image
                            className="rounded-full"
                            src={Twiiter}
                            alt="profile"
                            width={30}
                            height={30}
                        />
                        </div>
                    }
                    {
                        linkdInLink &&
                        <div>
                            <Image
                            className="rounded-full"
                            src={LinkdIn}
                            alt="profile"
                            width={30}
                            height={30}
                        />
                        </div>
                    }
                    {
                        facebookLink &&
                        <div>
                            <Image
                            className="rounded-full"
                            src={facebook}
                            alt="profile"
                            width={30}
                            height={30}
                        />
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default BlogFooterSection