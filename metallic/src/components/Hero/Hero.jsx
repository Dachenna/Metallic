/* eslint-disable no-unused-vars */
import { animate } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import Image from "../Hero/image1.png"

export const FadeUp = (delay) =>{
    return{
        initial: {
            opacity: 0,
            y: 50,
        },
        animate:{
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

function Hero() {
  return (
    <section className=" bg-primary">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
            {/**Brand Info */}
            <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
                <div className="text-left md:text-center space-y-10 lg:max-w-[450px]">
                    <motion.h1
                     variants={FadeUp(0.6)}
                     initial="initial"
                     animate="animate"
                     className="text-3xl lg:text-5xl font-header 
                     !leading-snug ">Innovative Metal Solution for Every Problems</motion.h1>
                </div>
                <div className="flex items-center justify-center md:justify-start mt-10 md:mt-14">
                    <p>
                      At our company, we specialize in crafting high-quality metal works tailored to your unique requirements.
                      From stylish railings to custom wheelchair designs, 
                      we bring your visions to life with precision and artistry.
                    </p>
                </div>
                <div className="flex">
                
                </div>
            </div>
        </div>
    </section>
  )
} 

export default Hero
