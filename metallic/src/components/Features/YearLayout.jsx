import React from 'react';
import BigProject from '../Features/Images/Big-Pro.jpg';
import Begin from '../Features/Images/grand-begin.jpg';
import Innova from '../Features/Images/Innova.jpg';
import Globale from '../Features/Images/globe.jpg';
import Future from '../Features/Images/future.png';

const YearLayout = () => {
    const milestones = [
        {
            year: "2010",
            title: "Grand Beginning",
            description: "In 2010, we started our journey in the metal fabrication industry. Our focus was on quality and craftsmanship, setting the foundation for our future.",
            image: Begin,
        },
        {
            year: "2013",
            title: "Mega Contract",
            description: "In 2013, we got a major contract to supply metal components for a large construction project. This was a turning point that established our reputation in the industry.",
            image: BigProject,
        },
        {
            year: "2015",
            title: "New Innovations",
            description: "By 2015, we expanded our product line to include custom railings and iron gates. This diversification showcased our craftsmanship and adaptability.",
            image: Innova,
        },
        {
            year: "2020",
            title: "Global Expansion",
            description: "In 2020, we took our business global, reaching new markets with our innovative designs. Our commitment to quality continued to drive our success.",
            image: Globale,
        },
        {
            year: "2023",
            title: "Future Vision",
            description: "As we move forward in 2023, we are focused on sustainability and innovative designs. Our goal is to lead the industry with environmentally friendly solutions.",
            image: Future,
        },
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {milestones.map((milestone, index) => (
                    <div
                        key={index}
                        className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
                    >
                        {/* Vertical Divider Line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gray-700 z-0 transform -translate-x-1/2" />

                        {/* Left Section: Year and Content */}
                        <div className={`relative z-10 py-4 px-2 flex flex-col items-center lg:items-end ${index % 2 === 1 ? "order-2 lg:pr-12" : "lg:pl-12"}`}>
                            <div className="max-w-md text-center lg:text-right">
                                <h2 className="text-2xl sm:text-3xl font-bold font-header text-gray-900 mb-2">{milestone.year}</h2>
                                <h3 className="text-xl sm:text-2xl font-semibold font-body text-gray-800 mb-2">{milestone.title}</h3>
                                <p className="text-gray-600 text-base mb-6">{milestone.description}</p>
                                {/* Example buttons */}
                                <div className="flex flex-wrap justify-center lg:justify-end gap-2">
                                    <button className="px-4 py-2 text-sm font-medium border rounded-md text-gray-700 bg-white hover:bg-gray-100 transition">Learn More</button>
                                    <button className="px-4 py-2 text-sm font-medium border rounded-md text-gray-700 bg-white hover:bg-gray-100 transition">View</button>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Image */}
                        <div className={`relative z-10 flex justify-center lg:justify-start py-4 px-2 ${index % 2 === 1 ? "order-1" : ""}`}>
                            <img
                                src={milestone.image}
                                alt={milestone.title}
                                className="w-full max-w-md rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YearLayout;