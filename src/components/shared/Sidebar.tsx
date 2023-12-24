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
    const toggleSidebar = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
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
                        <li className="relative group">
                            <Link
                                href="#"
                                className="flex items-center justify-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <AiOutlineHome size={18} />
                                {isOpen && (
                                    <span className="flex-1 py-0 px-2.5">
                                        Dashboard
                                    </span>
                                )}
                            </Link>
                            <ul className="group-hover:visible group-hover:translate-y-0 invisible absolute top-0 left-full transition-all ease-in-out duration-100 bg-white shadow translate-y-2 z-10">
                                <li>
                                    <Link
                                        href="#"
                                        className="py-6 px-8 transition-all ease-in-out duration-100 text-xs"
                                    >
                                        <strong>Dashboard</strong>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <Link
                                href="#"
                                className="flex items-center justify-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <BsFillBasket2Fill size={18} />
                                {isOpen && (
                                    <>
                                        <span className="flex-1 py-0 px-2.5">
                                            Products
                                        </span>
                                        <MdOutlineKeyboardArrowRight />
                                    </>
                                )}
                            </Link>
                            <ul className="group-hover:visible group-hover:translate-y-0 invisible absolute top-0 left-full transition-all ease-in-out duration-100 bg-white shadow translate-y-2 z-10">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-xs py-6 px-8"
                                    >
                                        <strong>Products</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex items-center text-xs py-2 px-2"
                                    >
                                        <MdOutlineKeyboardArrowRight />
                                        <span className="flex-1 py-0 px-2.5">
                                            List
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex items-center text-xs py-2 px-2"
                                    >
                                        <MdOutlineKeyboardArrowRight />
                                        <span className="flex-1 py-0 px-2.5">
                                            Add
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <Link
                                href="#"
                                className="flex items-center justify-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <BiCategoryAlt size={18} />
                                {isOpen && (
                                    <>
                                        <span className="flex-1 py-0 px-2.5">
                                            Categories
                                        </span>
                                        <MdOutlineKeyboardArrowRight />
                                    </>
                                )}
                            </Link>
                            <ul className="group-hover:visible group-hover:translate-y-0 invisible absolute top-0 left-full transition-all ease-in-out duration-100 bg-white shadow translate-y-2 z-10">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-xs py-6 px-8"
                                    >
                                        <strong>Categories</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex items-center text-xs py-2 px-2"
                                    >
                                        <MdOutlineKeyboardArrowRight />
                                        <span className="flex-1 py-0 px-2.5">
                                            List
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex items-center text-xs py-2 px-2"
                                    >
                                        <MdOutlineKeyboardArrowRight />
                                        <span className="flex-1 py-0 px-2.5">
                                            Add
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <Link
                                href="#"
                                className="flex items-center justify-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <FaRegComments size={18} />
                                {isOpen && (
                                    <span className="flex-1 py-0 px-2.5">
                                        Comments
                                    </span>
                                )}
                            </Link>
                            <ul className="group-hover:visible group-hover:translate-y-0 invisible absolute top-0 left-full transition-all ease-in-out duration-100 bg-white shadow translate-y-2 z-10">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-xs py-6 px-8"
                                    >
                                        <strong>Comments</strong>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <Link
                                href="#"
                                className="flex items-center justify-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <MdEditNote size={18} />
                                {isOpen && (
                                    <span className="flex-1 py-0 px-2.5">
                                        Blogs
                                    </span>
                                )}
                            </Link>
                            <ul className="group-hover:visible group-hover:translate-y-0 invisible absolute top-0 left-full transition-all ease-in-out duration-100 bg-white shadow translate-y-2 z-10">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-xs py-6 px-8"
                                    >
                                        <strong>Blogs</strong>
                                    </Link>
                                </li>
                            </ul>
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
