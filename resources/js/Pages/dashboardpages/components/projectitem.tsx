import React from "react";
import { FaTrash, FaEdit, FaPlay, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, router } from "@inertiajs/react";

const ProjectItem = ({ project }) => {
    return (
        <motion.div 
            key={project.id} 
            className="bg-gray-900 text-white rounded-xl shadow-lg p-6 mt-4 border border-gray-700 flex items-center gap-4 hover:shadow-2xl transition-shadow duration-300"
            // whileHover={{ scale: 1.02 }}
            // whileTap={{ scale: 0.98 }}
        >
            <div className="flex flex-col items-center justify-center text-gray-400">
                <FaProjectDiagram className="text-4xl" />
            </div>
            
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-100">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <p className="text-gray-500 text-xs mt-1">Created: {new Date(project.created_at).toLocaleString()}</p>

                Workflows
                {project.workflows.map((workflow:any) => (
                    <div key={workflow.id} className="bg-gray-800 text-white rounded-lg p-2 mt-2">
                        <p className="text-sm font-semibold">{workflow.name}</p>
                        <p className="text-xs">{workflow.description}</p>
                    </div>
                ))}

                {project.workflows.length === 0 && (
                    <div>
                    <p className="text-gray-400 text-xs mt-1">No workflows found</p>

                   <Link href="/dashboard/workflow/create"> <button className="bg-blue-600 p-1  mt-2 rounded-md text-white hover:bg-blue-500 transition">
                        Create Workflow Now
                    </button></Link>
                    </div>

                )}

            </div>

            <div className="flex gap-3 items-center">
           
                <motion.button 
                    className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-500 transition"
                    whileHover={{ scale: 1.1 }} // Only scale on hover

                    onTap={()=>{
                        // router.get(`/dashboard/workflow/${project.id}`)
                    }}
                >
                    <FaEdit className="text-lg" />
                </motion.button>
                
                <motion.button 
                    className="bg-red-600 p-3 rounded-full text-white hover:bg-red-500 transition"
                    whileHover={{ scale: 1.1 }} // Only scale on hover
                    onTap={()=>{
                        router.delete(`/dashboard/projects/${project.id}`)
                    }}
                >
                    <FaTrash className="text-lg" />
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ProjectItem;
