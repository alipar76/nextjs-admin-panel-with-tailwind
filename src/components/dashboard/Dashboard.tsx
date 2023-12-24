"use client";
import React from "react";

import { LuDollarSign } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import { BsBasket3 } from "react-icons/bs";
import { SlBasketLoaded } from "react-icons/sl";

import ViewsStatistics from "./components/ViewsStatistics";
import SalesStatistics from "./components/SalesStatistics";

const Dashboard = () => {
    return (
        <div className="h-full bg-slate-50 p-4">
            <h6>Dashboard</h6>
            <div className="flex md:space-x-4 sm:space-x-1 mt-4">
                <div className="flex items-center md:w-1/4 sm:1/2 p-3 bg-white rounded-lg h-24 transition-all duration-300 hover:shadow hover:-translate-y-1">
                    <div>
                        <div className="rounded-full p-3 bg-cyan-100 text-cyan-600">
                            <LuDollarSign />
                        </div>
                    </div>
                    <div className="ml-3">
                        <div className="text-xs text-gray-400">
                            Total income
                        </div>
                        <div className="text-base text-gray-600">356$</div>
                    </div>
                </div>
                <div className="flex items-center md:w-1/4 sm:1/2 p-3 bg-white rounded-lg h-24 transition-all duration-300 hover:shadow hover:-translate-y-1">
                    <div>
                        <div className="rounded-full p-3 bg-green-100 text-green-600">
                            <FaUser />
                        </div>
                    </div>
                    <div className="ml-3">
                        <div className="text-xs text-gray-400">Users</div>
                        <div className="text-base text-gray-600">1251</div>
                    </div>
                </div>
                <div className="flex items-center md:w-1/4 sm:1/2 p-3 bg-white rounded-lg h-24 transition-all duration-300 hover:shadow hover:-translate-y-1">
                    <div>
                        <div className="rounded-full p-3 bg-red-100 text-red-600">
                            <BsBasket3 />
                        </div>
                    </div>
                    <div className="ml-3">
                        <div className="text-xs text-gray-400">Orders</div>
                        <div className="text-base text-gray-600">452</div>
                    </div>
                </div>
                <div className="flex items-center md:w-1/4 sm:1/2 p-3 bg-white rounded-lg h-24 transition-all duration-300 hover:shadow hover:-translate-y-1">
                    <div>
                        <div className="rounded-full p-3 bg-yellow-100 text-yellow-600">
                            <SlBasketLoaded />
                        </div>
                    </div>
                    <div className="ml-3">
                        <div className="text-xs text-gray-400">Products</div>
                        <div className="text-base text-gray-600">756</div>
                    </div>
                </div>
            </div>
            <div className="flex md:space-x-4 mt-4">
                <div className="md:w-1/2 sm:w-full bg-white rounded-lg h-64 transition-all duration-300 hover:shadow">
                    <SalesStatistics />
                </div>
                <div className="md:w-1/2 sm:w-full bg-white rounded-lg h-64 transition-all duration-300 hover:shadow">
                    <ViewsStatistics />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
