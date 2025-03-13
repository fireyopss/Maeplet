import React from "react";


const DashboardSideBar = () => {
    return (
        <div className="flex flex-col w-64 h-screen bg-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-center h-14 border-b border-gray-700">
                <h1 className="text-2xl font-bold text-white">Sidebar</h1>
            </div>
            <div className="overflow-y-auto">
                <ul className="flex flex-col py-4">
                    <li>
                        <a href="#" className="flex items-center text-white py-2 pl-6 nav-item">
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center text-white py-2 pl-6 nav-item">
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center text-white py-2 pl-6 nav-item">
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DashboardSideBar;
