/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { FaCube, FaBars } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const NavMenu = [
    {
        id: 1,
        name: "Home page",
        link: "/"
    },
    {
        id: 2,
        name: "Our Work",
        link: "/our-work"
    },
    {
        id: 3,
        name: "About Us",
        link: "/about"
    },
    {
        id: 4,
        name: "Services",
        link: "#services"
    },
    {
        id: 5,
        name: "Contact Us",
        link: "/contact"
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu open and close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`relative z-20 bg-green-900 ${isOpen ? 'pb-6' : ''}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-2">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    {/* Desktop Navigation Menu */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hidden lg:flex items-center gap-8"
                    >
                        <ul className="flex items-center gap-4 font-body">
                            {NavMenu.map((menu) => (
                                <li key={menu.id}>
                                    <a
                                        href={menu.link}
                                        className="text-white hover:text-gray-300 transition-colors"
                                    >
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-4">
                            <button className="py-2 px-6 font-body border border-gray-500 rounded-xl hover:bg-gray-700 hover:text-white transition">
                                Learn
                                <FaCube className="inline-block text-sm ml-2" />
                            </button>
                            <button className="py-2 px-6 font-body border primary-btn border-gray-500 rounded-xl hover:bg-gray-600 hover:text-white transition">
                                Sign In
                            </button>
                        </div>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            className="text-white text-2xl"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <FiX /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:hidden flex flex-col items-center gap-4 mt-4"
                    >
                        <ul className="flex flex-col items-center gap-4 text-white">
                            {NavMenu.map((menu) => (
                                <li key={menu.id}>
                                    <a
                                        href={menu.link}
                                        className="text-white hover:text-gray-300 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col items-center gap-4 mt-4">
                            <button className="py-2 px-6 font-body border border-gray-500 rounded-xl hover:bg-gray-700 hover:text-white transition">
                                Learn
                                <FaCube className="inline-block text-sm ml-2" />
                            </button>
                            <button className="py-2 px-6 font-body border border-gray-500 rounded-xl hover:bg-gray-700 hover:text-white transition">
                                Sign In
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;