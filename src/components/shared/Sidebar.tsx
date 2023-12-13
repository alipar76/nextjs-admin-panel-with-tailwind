import React from "react";
import Link from "next/link";

import { AiFillCrown, AiOutlineHome } from "react-icons/ai";
import { BsFillBasket2Fill, BsGear } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa6";
import { MdEditNote, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between bg-white border-r border-gray-100 duration-300 text-gray-500 h-100">
            <div className="flex flex-col">
                <div className="flex justify-center items-center cursor-pointer border-b border-gray-100 h-12">
                    <AiFillCrown size={25} className="text-cyan-600" />
                    <h3 className="pt-0.5 pl-1.5">Admin</h3>
                </div>
                <nav>
                    <ul>
                        <li className="relative group">
                            <Link
                                href="#"
                                className="flex items-center justify-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <AiOutlineHome size={18} />
                                <span className="flex-1 mt-0 mb-0 mr-2.5 ml-2.5">
                                    Dashboard
                                </span>
                            </Link>
                            <ul className="group-hover:visible group-hover:translate-y-0 invisible absolute top-0 left-full opacity-0 transition-all ease-in-out duration-100 bg-white shadow translate-y-3 z-10">
                                <li>
                                    <Link
                                        href="#"
                                        className="pt-2.5 pb-2.5 pr-10 pl-40 transition-all ease-in-out duration-300 text-xs"
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
                                <span className="flex-1 mt-0 mb-0 mr-2.5 ml-2.5">
                                    Products
                                </span>
                                <MdOutlineKeyboardArrowRight className="submenu-icon" />
                            </Link>
                            {/* <ul className="dropdown-menu">
                                <li>
                                    <Link href="#">
                                        <strong>Products</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <MdOutlineKeyboardArrowRight className="submenu-icon" />
                                        <span className="flex-1 mt-0 mb-0 mr-2.5 ml-2.5">
                                            List
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <MdOutlineKeyboardArrowRight className="submenu-icon" />
                                        <span className="flex-1 mt-0 mb-0 mr-2.5 ml-2.5">
                                            Add
                                        </span>
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                        <li className="item">
                            <Link
                                href="#"
                                className="flex items-center justify-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <BiCategoryAlt size={18} />
                                <span className="flex-1 mt-0 mb-0 mr-2.5 ml-2.5">
                                    Categories
                                </span>
                                <MdOutlineKeyboardArrowRight className="submenu-icon" />
                            </Link>
                            {/* <ul className="dropdown-menu">
                                <li>
                                    <Link href="#">
                                        <strong>Categories</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <MdOutlineKeyboardArrowRight className="submenu-icon" />
                                        <span className="flex-1 mt-0 mb-0 mr-2.5 ml-2.5">
                                            List
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <MdOutlineKeyboardArrowRight className="submenu-icon" />
                                        <span className="flex-1 mt-0 mb-0 mr-2.5 ml-2.5">
                                            Add
                                        </span>
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                        <li className="item">
                            <Link
                                href="#"
                                className="flex items-center justify-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <FaRegComments size={18} />
                                <span className="flex-1 mt-0 mb-0 mr-2.5 ml-2.5">
                                    Comments
                                </span>
                            </Link>
                            {/* <ul className="dropdown-menu">
                                <li>
                                    <Link href="#">
                                        <strong>Comments</strong>
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                        <li className="item">
                            <Link
                                href="#"
                                className="flex items-center justify-center p-2.5 transition-all ease-in-out duration-300 text-xs font-semibold hover:bg-cyan-50 hover:text-cyan-600"
                            >
                                <MdEditNote size={18} />
                                <span className="flex-1 mt-0 mb-0 mr-2.5 ml-2.5">
                                    Blogs
                                </span>
                            </Link>
                            {/* <ul className="dropdown-menu">
                                <li>
                                    <Link href="#">
                                        <strong>Blogs</strong>
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex flex-row justify-center items-center border-t border-gray-100 p-1">
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
