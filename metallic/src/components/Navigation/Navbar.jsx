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
        link: "/services"
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Toggle the menu open and close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-green-900 sticky top-0 z-20">
            <div>
                <div className="flex items-center justify-between py-2 px-2">
                    {/* Logo Section */}
                    <div className="flex items-center mr-4">
                        <Logo />
                    </div>

                    {/* Navigation Menu */}
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: +50 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        className="hidden lg:flex items-center gap-8 ml-auto duration-200"
                    >
                        <div className="mr-8">
                            <ul className="flex items-center justify-center gap-4 font-body">
                                {NavMenu.map((menu) => (
                                    <li key={menu.id}>
                                        <a
                                            href={menu.link}
                                            className="inline-block text-white hover:text-gray-300 transition-colors"
                                        >
                                            {menu.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Buttons Section */}
                    <motion.div 
                     initial={{opacity: 0, y: -50}}
                     animate={{opacity: 1, y: 0}}
                     transition={{delay: 0.2}}
                     className="hidden lg:flex items-center gap-4 duration-200 ">
                        <button className="py-2 px-6 font-body border border-gray-500 rounded-xl hover:bg-gray-700 hover:text-white transition">
                            Learn
                            <FaCube className="inline-block text-sm ml-2" />
                        </button>
                        <button className="py-2.5 px-6 font-body border primary-btn border-gray-500 rounded-xl hover:bg-gray-600 hover:text-white transition">
                            Sign In
                        </button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden duration-150">
                        <button
                            className="text-white text-2xl"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <FiX /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    ref={menuRef}
                    initial={{ opacity: 0, y: -50, x: +50 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    className="lg:hidden bg-gradient-to-tl from-amber-400/20 to-emerald-600/5 p-4 absolute top-16 w-[500px] rounded-md shadow-lg transition-all duration-100"
                >
                    <ul className="flex flex-col items-center gap-4 text-white">
                        {NavMenu.map((menu) => (
                            <li key={menu.id}>
                                <a
                                    href={menu.link}
                                    className="inline-block text-white hover:text-gray-300 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;