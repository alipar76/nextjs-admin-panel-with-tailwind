import React from "react";
import Link from "next/link";

import { BsGear } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
    return (
        <div className="flex justify-end items-center pt-0 pb-0 pr-4 pl-4 border-b border-gray-100 h-12">
            <div className="flex items-center relative group cursor-pointer pt-1 pb-1 px-2.5 duration-100 ease-in-out rounded-lg hover:bg-slate-100">
                <span className="pr-1 text-xs">ali</span>
                <span className="p-4 rounded-full bg-slate-200"></span>
                <span className="pl-1">
                    <MdOutlineKeyboardArrowDown />
                </span>
                <div className="invisible absolute group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 opacity-0 top-full left-0 w-full transition-all duration-100 ease-in-out text-xs translate-y-1 z-10">
                    <ul className="rounded-md mt-1 bg-white shadow-md z-1">
                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-3 duration-100 ease-in-out hover:bg-slate-100"
                            >
                                <BsGear size={14} />
                                <span className="ml-1 z-10">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-3 duration-100 ease-in-out hover:bg-slate-100"
                            >
                                <CiLogout size={14} />
                                <span className="ml-1 z-10">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
