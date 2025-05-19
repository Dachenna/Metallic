import React from 'react';
import BigProject from '../Features/Images/Big-Pro.jpg';
import Begin from '../Features/Images/grand-begin.jpg';
import Innova from '../Features/Images/Innova.jpg';

const YearLayout = () => {
    const milestones = [
        {
            year: "2010",
            title: "Grand Beginning",
            description: "In 2010, we started our journey in the metal fabrication industry. Our focus was on quality and craftsmanship, setting the foundation for our future.",
            image: Begin, // Replace with your image URL
        },
        {
            year: "2013",
            title: "Mega Contract",
            description: "In 2013, we got a major contract to supply metal components for a large construction project. This was a turning point that established our reputation in the industry.",
            image: BigProject,// Replace with your image URL
        },
        {
            year: "2015",
            title: "New Innovations",
            description: "By 2015, we expanded our product line to include custom railings and iron gates. This diversification showcased our craftsmanship and adaptability.",
            image: Innova, // Replace with your image URL
        },
        {
            year: "2020",
            title: "Global Expansion",
            description: "In 2020, we took our business global, reaching new markets with our innovative designs. Our commitment to quality continued to drive our success.",
            image: "https://via.placeholder.com/400x300", // Replace with your image URL
        },
        {
            year: "2023",
            title: "Future Vision",
            description: "As we move forward in 2023, we are focused on sustainability and innovative designs. Our goal is to lead the industry with environmentally friendly solutions.",
            image: "https://via.placeholder.com/400x300", // Replace with your image URL
        },
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {milestones.map((milestone, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${
                            index % 2 === 1 ? "lg:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Left Section: Year and Content */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-5xl font-bold text-indigo-600 mb-4">{milestone.year}</h2>
                            <h3 className="text-3xl font-semibold text-gray-800 mb-4">{milestone.title}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">{milestone.description}</p>
                        </div>

                        {/* Right Section: Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={milestone.image}
                                alt={milestone.title}
                                className="w-full max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YearLayout;