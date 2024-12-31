"user client";
import React from 'react'

interface ButtonProps {
    text?: string;
    variant?: string;
}
const Button: React.FC<ButtonProps> = ({ text, variant = "" }) => {
    return (
        <div className={`${variant} grow ${text === "Login" || text ==="View all" ? "bg-white" : "bg-[#00C7BE]"} bg-pop flex justify-center items-center transform transition-transform duration-30`}>
            <button
            className={`
                ${variant}
                whitespace-nowrap
                bg-inherit
                ${text === "Login" || text==="View all" ? "text-[#00C7BE]" : "text-white"}
                grow
                items-center
                w-full
                text-sm
            `}
            >
            {text}
            </button>
        </div>
    );
}


export default Button
