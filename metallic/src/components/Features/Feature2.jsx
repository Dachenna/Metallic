import React from 'react';
import WheelChair from '../Features/Images/WheelChair.jpg';
import Rails from '../Features/Images/Rails.jpg';
import Gate from '../Features/Images/Gates.jpg';

export const Demo = ({navigate}) => {
    // Card data stored in a single constant
    const cards = [
        {
            title: "Custom Wheelchair Designs",
            description: "Experience comfort and style with our bespoke wheelchair designs.",
            subDescription: "for Enhanced Mobility",
            image: WheelChair, // Directly reference the imported image
        },
        {
            title: "Sturdy Rails for Safety",
            description: "Our rails combine safety with elegant design for any space.",
            subDescription: "and Aesthetics",
            image: Rails, // Directly reference the imported image
        },
        {
            title: "Elegant Iron Gates for your Property",
            description: "Enhance your property's security with our stylish iron gates.",
            subDescription: "Security and Style",
            image: Gate, // Directly reference the imported image
        },
    ];

    return (
        <div className="bg-gray-50 py-12" id='services'>
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <section className="text-center lg:text-left mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-800 sm:text-4xl font-header mb-4">
                        Exceptional Metalwork Services
                    </h1>
                    <p className="text-gray-600 text-lg font-body mb-8">
                        Tailored for You
                    </p>
                    <p className="text-gray-700 text-base font-body max-w-2xl mx-auto lg:mx-0">
                        Our metalwork services encompass a wide range of custom designs, from functional
                        wheelchairs to decorative iron gates. We pride ourselves on quality craftsmanship
                        and innovative solutions that meet your specific needs.
                    </p>
                </section>

                {/* Cards Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="flex items-center justify-center p-4 sm:p-6">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-48 object-cover rounded-t-lg sm:h-40 lg:h-48"
                                    loading="eager"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 font-header">
                                    {card.title}
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-4 font-body">
                                    {card.subDescription}
                                </p>
                                <p className="text-gray-700 text-sm font-body">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Buttons Section */}
                <section className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <button
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
                         text-indigo-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                         onClick={() => navigate('/about')}
                    >
                        Learn More
                    </button>
            
                </section>
            </main>
        </div>
    );
};