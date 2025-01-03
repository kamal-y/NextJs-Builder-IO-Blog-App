"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LOGO1 from "../../assets/Group.svg";
import LOGO2 from "../../assets/Group (1).svg";
import Link from "next/link";
import LightIcon from "../../assets/Light theme.svg";
import Button from "../Elements Section/Button";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navLinks, setNavLinks] = useState<any[]>([]);


    useEffect(() => {
        const getNavLinksData = async () => {
            try {
                const data = await builder.getAll("nav-links-model");
                setNavLinks(data)
            } catch (error) {
                console.error("Error fetching nav links:", error);
            }
        }
        getNavLinksData()
    }, [])


    return (
        <nav className="flex flex-row items-center justify-between p-4 w-full bg-white shadow-md">
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center h-14">
                    <Image src={LOGO1} alt="weframe-image" />
                    <Image src={LOGO2} alt="weframe-image" />
                </div>
            </div>

            <div className="hidden md:flex gap-4">
                {navLinks &&
                    navLinks.map((link: any) => (
                        <Link href={link.data?.url || ""} key={link.id}>
                            <div className="text-[#595959] hover:text-[#00C7BE] transition">
                                {link.data?.name}
                            </div>
                        </Link>
                    ))}
            </div>

            {isMenuOpen && (
                <div className="flex flex-col items-start mt-4 gap-2 md:hidden">
                    {navLinks &&
                        navLinks.map((link: any) => (
                            <Link href={link.data?.url} key={link.id}>
                                <div className="text-[#595959] hover:text-[#00C7BE] transition">
                                    {link.data?.name}
                                </div>
                            </Link>
                        ))}
                </div>
            )}

            {/* Auth Buttons */}
            <div className="flex flex-row gap-4 items-center mt-4 md:mt-0">
                <div className="flex gap-2 font-semibold h-10">
                    <div className='px-4  flex justify-center items-center border  border-[#00C7BE] rounded-md'>
                        <Link href="/login">
                            <Button text="Login" />
                        </Link>
                    </div>
                    <div className='px-4 flex justify-center items-center bg-[#00C7BE] rounded-md'>
                        <Link href="/signup">
                            <Button text="Register Now" />
                        </Link>
                    </div>
                </div>
                <div className="w-9 hidden sm:flex items-center justify-center ">
                    <Image src={LightIcon} alt="light theme icon" />
                </div>
            </div>

            <div className="flex md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-gray-600 hover:text-[#00C7BE] focus:outline-none"
                >
                    ☰
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
