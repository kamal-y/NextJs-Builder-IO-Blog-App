"use client"
import React from 'react'
import bgPhoto from '../../assets/bgPhoto.jpg'

const ContactUs : React.FC = () => {
    return (
        <div
            className="relative w-full h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgPhoto.src})` }}
        >
            {/* Black overlay film */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Centered content */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                <div className="flex items-center justify-center w-full rounded-md bg-white">
                    <div className="bg-white p-4 sm:p-8 py-8 sm:py-16 rounded-lg w-full max-w-lg lg:max-w-2xl text-start">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                            Schedule Your Consultation Today
                        </h2>
                        <p className="text-sm sm:text-base text-[#595959] mb-6">
                            Weframe tech is the modern, award-winning platform that empowers some of the largest names in healthcare and advisory sectors.
                        </p>
                        <form className="flex flex-col md:flex-row items-center gap-4">
                            <div className="relative flex-grow w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-teal-500 text-white px-6 py-2 whitespace-nowrap rounded-md hover:bg-teal-600 transition w-full md:w-auto"
                            >
                                Book a meeting
                            </button>
                        </form>
                        <p className="text-xs sm:text-sm text-gray-400 mt-4">
                            By submitting you agree to our privacy policy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
