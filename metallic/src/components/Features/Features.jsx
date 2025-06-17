/* eslint-disable no-unused-vars */
import React from 'react';
import { HandMetal, Wrench, GripVertical, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

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

function Features({navigate}) {
  // Dummy product data (replace with your actual data source)
  const products = [
    {
      title: "Glass Stars for elegance and beauty",
      description: "Our wheelchairs are designed for comfort and accessibility.",
      image: <HandMetal className="w-16 h-16 text-gray-400" />,
    },
    {
      title: "Durable Rails for Safety and Style",
      description: "Our rails provide both security and aesthetic appeal.",
      image: <GripVertical className="w-16 h-16 text-gray-400" />,
    },
    {
      title: "Elegant Iron Gates for Your Property",
      description: "Enhance your entrance with our stunning iron gates.",
      image: <Wrench className="w-16 h-16 text-gray-400" />,
    },
    {
      title: "Custom Metal Fabrication for Unique Needs",
      description: "We offer tailored solutions for all your metal fabrication needs.",
      image: <Hammer className="w-16 h-16 text-gray-400" />,
    },
    {
      title: "High-Quality Metal Products for Every Application",
      description: "Explore our range of metal products designed for durability.",
      image: <Hammer className="w-16 h-16 text-gray-400" />,
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2 text-center lg:text-left">
            <motion.h2
              className="text-3xl font-thin font-header text-gray-900 sm:text-4xl "
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
            >
              Innovative Metal Solutions for Every Need
            </motion.h2>
            <p className="mt-3 text-lg text-gray-500 font-body">
              We specialize in crafting high-quality metal products tailored to your needs.
              From custom wheelchairs that enhance mobility to durable rails and elegant
              iron gates, our offerings combine functionality with style. Explore our diverse
              range of metal designs to find the perfect solution for your project.
            </p>
          </div>
          <div className="hidden lg:block">
            {/* Optional image or visual element */}
            <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Placeholder for image</span>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50  text-center rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
            >
              <div className="flex items-center justify-center p-6">
                {/* Using the image prop as a component */}
                {product.image}
              </div>
              <div className="p-6 text-center lg:text-left">
                <h3 className="text-lg font-medium text-gray-900 font-header">{product.title}</h3>
                <p className="mt-2 text-sm text-gray-500 font-body">{product.description}</p>
                <div className="mt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-2">
                  
                  <button
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm 
                    font-medium rounded-md text-gray-700 bg-white hover:bg-gradient-to-tr from-slate-400 to-slate-500 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() =>navigate('/contact')}
                  >
                    Learn 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
