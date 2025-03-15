import React, { useEffect } from 'react'
import { Link, usePage } from "@inertiajs/react";
import ProjectItem from './components/projectitem';


const DashboardProjects = () => {

    const {projects} = usePage().props

    useEffect(()=>{
        console.log(projects)
    },[projects])

    return (
        <div>
            
            <div className="h-24 bg-black flex items-center px-6 rounded-lg shadow-md">
                <div className="flex-1 text-white">
                    <p className="text-lg font-semibold">Projects</p>
                    <p className="text-sm text-gray-400">
                        Manage your Projects
                    </p>
                </div>
                <div className="w-96 flex justify-end">
                   <Link href="/dashboard/projects/create"> <button className="rounded-md bg-green-500 text-white px-6 py-3 text-sm font-medium transition hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 shadow-md">
                        Create Project
                    </button></Link>
                </div>
            </div>

            <div>
                {projects?.map((project:any) => (
                   <ProjectItem key={project.id} project={project} />
                ))}
            </div>

        </div>
    )
}

export default DashboardProjects
