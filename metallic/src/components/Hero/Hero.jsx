/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import Image from "../Hero/image1.png";
import { FaCube } from 'react-icons/fa';
import { Demo } from '../Features/Feature2';
import Features from '../Features/Features';
import { YearLayout } from '../Features/YearLayout';

export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};

function Hero({navigate}) {

    return (
        <>
        <section className="bg-primary">
            <div className="container mx-auto px-4 md:px-8 relative py-8">
                {/* Content Wrapper */}
                <div>
                    {/* Border Wrapper */}
                    <div className="border border-gray-500 rounded-xl p-4 md:p-6 lg:p-8 inline-block">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                            {/* Brand Info */}
                            <div className="flex flex-col justify-center relative z-20 text-center md:text-left">
                                <div className="space-y-4 lg:max-w-[450px]">
                                    <motion.h1
                                        variants={FadeUp(0.6)}
                                        initial="initial"
                                        animate="animate"
                                        className="text-3xl lg:text-5xl font-header leading-snug text-shadow-custom text-white"
                                    >
                                        Innovative Metal Solution for Every Problem
                                    </motion.h1>
                                    <motion.p
                                        variants={FadeUp(0.8)}
                                        initial="initial"
                                        animate="animate"
                                        className="text-base text-gray-100 text-justify"
                                    >
                                        At our company, we specialize in crafting high-quality 
                                        metal works tailored to your unique requirements. 
                                        From stylish railings to custom wheelchair designs, 
                                        we bring your visions to life with precision and artistry.
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex flex-row items-center gap-4 mt-4 lg:mt-8"
                                    >
                                        <button className="py-2 px-6 font-body border border-gray-500 rounded-xl 
                                        hover:bg-gray-700 hover:text-white transition"
                                        onClick={() => navigate('/contact')}>
                                            Contact Us
                                             <FaCube className="inline-block text-sm ml-2 duration-100" />
                                        </button>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="flex justify-center items-center relative">
                                <motion.img
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                                    src={Image}
                                    alt="hero"
                                    className="w-[90%] max-w-[400px] md:max-w-[500px] lg:max-w-[550px] h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Features navigate={navigate}/>
        <Demo navigate={navigate}/>
        <YearLayout navigate={navigate}/>
        </>
    );
}

export default Hero;