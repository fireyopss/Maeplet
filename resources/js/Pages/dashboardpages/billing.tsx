import { Link } from "@inertiajs/react";
import React from "react";

const DashboardBilling = () => {
    return <div>
        
        <div className="h-24 bg-black flex items-center px-6 rounded-lg shadow-md">
                <div className="flex-1 text-white">
                    <p className="text-lg font-semibold">Billing</p>
                    <p className="text-sm text-gray-400">
                        Set your invoices and billing details
                    </p>
                </div>
                <div className="w-96 flex justify-end">
                   <Link href="/dashboard/credentials/create"> <button className="rounded-md bg-green-500 text-white px-6 py-3 text-sm font-medium transition hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 shadow-md">
                        Open Billing Page
                    </button></Link>
                </div>
            </div>
        

    </div>;
    }

export default DashboardBilling;
