import React from "react";
import { Link } from "@inertiajs/react";

const DashboardWorkflows = () => {
    return (
        <div>
            <div className="h-24 bg-black flex items-center px-6 rounded-lg shadow-md">
                <div className="flex-1 text-white">
                    <p className="text-lg font-semibold">Workflows</p>
                    <p className="text-sm text-gray-400">
                        Manage your workflows
                    </p>
                </div>
                <div className="w-96 flex justify-end">
                   <Link href="/dashboard/workflow/create"> <button className="rounded-md bg-green-500 text-white px-6 py-3 text-sm font-medium transition hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 shadow-md">
                        Create Workflow
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardWorkflows;
