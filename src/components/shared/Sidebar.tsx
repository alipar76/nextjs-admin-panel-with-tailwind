"use client";
import React, { useState } from "react";
import Link from "next/link";

import { AiFillCrown, AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { BsFillBasket2Fill, BsGear } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa6";
import { MdEditNote, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState<{
        [key: number]: boolean;
    }>({});

    const toggleSidebar = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    const toggleDropdown = (index: number) => {
        setIsDropdownOpen((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div
            className={`flex flex-col justify-between bg-white border-r border-gray-100 duration-300 text-gray-500 h-full ${
                isOpen ? "w-56" : "w-14"
            }`}
        >
            <div className="flex flex-col">
                <div className="relative flex justify-center items-center cursor-pointer border-b border-gray-100 h-12">
                    <AiFillCrown size={25} className="text-cyan-600" />
                    {isOpen && <h3 className="pt-0.5 pl-1.5">Admin</h3>}
                    <div
                        className="absolute right-[-13px] p-1 cursor-pointer duration-300 ease-in-out rounded-full bg-white border border-gray-100 hover:bg-slate-100"
                        onClick={toggleSidebar}
                    >
                        {isOpen ? (
                            <AiOutlineClose size={15} />
                        ) : (
                            <FiMenu size={15} />
                        )}
                    </div>
                </div>
                <nav>
                    <ul>
                        <li className="relative">
                            <Link
                                href="#"
                                className="flex items-center justify-center w-full p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <AiOutlineHome size={18} />
                                {isOpen && (
                                    <>
                                        <span className="flex-1 py-0 px-2.5">
                                            Dashboard
                                        </span>
                                    </>
                                )}
                            </Link>
                        </li>
                        <li className="relative">
                            <button
                                onClick={() => toggleDropdown(1)}
                                className="flex items-center justify-center w-full p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <BsFillBasket2Fill size={18} />
                                {isOpen && (
                                    <>
                                        <span className="flex-1 py-0 px-2.5">
                                            Products
                                        </span>
                                        <MdOutlineKeyboardArrowRight
                                            size={16}
                                            className={`transform transition-transform duration-300 ${
                                                isDropdownOpen
                                                    ? "rotate-90"
                                                    : ""
                                            }`}
                                        />
                                    </>
                                )}
                            </button>
                            {isDropdownOpen[1] && (
                                <ul
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isDropdownOpen[1]
                                            ? "max-h-40"
                                            : "max-h-0"
                                    }`}
                                >
                                    <li>
                                        <Link
                                            href="#"
                                            className="flex items-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                                        >
                                            <span className="ml-6">
                                                Submenu Item 1
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="flex items-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                                        >
                                            <span className="ml-6">
                                                Submenu Item 2
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="relative">
                            <button
                                onClick={() => toggleDropdown(2)}
                                className="flex items-center justify-center w-full p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <BiCategoryAlt size={18} />
                                {isOpen && (
                                    <>
                                        <span className="flex-1 py-0 px-2.5">
                                            Categories
                                        </span>
                                        <MdOutlineKeyboardArrowRight
                                            size={16}
                                            className={`transform transition-transform duration-300 ${
                                                isDropdownOpen
                                                    ? "rotate-90"
                                                    : ""
                                            }`}
                                        />
                                    </>
                                )}
                            </button>
                            {isDropdownOpen[2] && (
                                <ul
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isDropdownOpen[2]
                                            ? "max-h-40"
                                            : "max-h-0"
                                    }`}
                                >
                                    <li>
                                        <Link
                                            href="#"
                                            className="flex items-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                                        >
                                            <span className="ml-6">
                                                Submenu Item 1
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="flex items-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                                        >
                                            <span className="ml-6">
                                                Submenu Item 2
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="relative">
                            <button
                                onClick={() => toggleDropdown(3)}
                                className="flex items-center justify-center w-full p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <FaRegComments size={18} />
                                {isOpen && (
                                    <>
                                        <span className="flex-1 py-0 px-2.5">
                                            Comments
                                        </span>
                                        <MdOutlineKeyboardArrowRight
                                            size={16}
                                            className={`transform transition-transform duration-300 ${
                                                isDropdownOpen
                                                    ? "rotate-90"
                                                    : ""
                                            }`}
                                        />
                                    </>
                                )}
                            </button>
                            {isDropdownOpen[3] && (
                                <ul
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isDropdownOpen[3]
                                            ? "max-h-40"
                                            : "max-h-0"
                                    }`}
                                >
                                    <li>
                                        <Link
                                            href="#"
                                            className="flex items-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                                        >
                                            <span className="ml-6">
                                                Submenu Item 1
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="flex items-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                                        >
                                            <span className="ml-6">
                                                Submenu Item 2
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="relative">
                            <button
                                onClick={() => toggleDropdown(4)}
                                className="flex items-center justify-center w-full p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <MdEditNote size={18} />
                                {isOpen && (
                                    <>
                                        <span className="flex-1 py-0 px-2.5">
                                            Blogs
                                        </span>
                                        <MdOutlineKeyboardArrowRight
                                            size={16}
                                            className={`transform transition-transform duration-300 ${
                                                isDropdownOpen
                                                    ? "rotate-90"
                                                    : ""
                                            }`}
                                        />
                                    </>
                                )}
                            </button>
                            {isDropdownOpen[4] && (
                                <ul
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isDropdownOpen[4]
                                            ? "max-h-40"
                                            : "max-h-0"
                                    }`}
                                >
                                    <li>
                                        <Link
                                            href="#"
                                            className="flex items-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                                        >
                                            <span className="ml-6">
                                                Submenu Item 1
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="flex items-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                                        >
                                            <span className="ml-6">
                                                Submenu Item 2
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                className={`flex justify-center items-center border-t border-gray-100 p-1 ${
                    isOpen ? "flex-row" : "flex-col"
                }`}
            >
                <Link href="#" className="p-2.5">
                    <BsGear size={18} />
                </Link>
                <Link href="#" className="p-2.5">
                    <CiLogout size={18} />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
