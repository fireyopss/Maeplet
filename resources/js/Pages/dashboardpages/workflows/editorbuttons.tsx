import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { FaPlay, FaSave, FaSignOutAlt } from "react-icons/fa";

const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
};

const EditorButtons = () => {
    return (
        <div className=" flex space-x-4 justify-end">
            <Link href="/dashboard/workflow">
                <motion.button 
                    className="flex items-center gap-2 rounded-lg bg-red-600 text-white px-6 py-3 text-sm font-medium transition hover:bg-red-500 shadow-lg"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FaSignOutAlt className="text-lg" />
                    Exit Editor
                </motion.button>
            </Link>

            <Link href="/dashboard/projects/create">
                <motion.button 
                    className="flex items-center gap-2 rounded-lg bg-blue-600 text-white px-6 py-3 text-sm font-medium transition hover:bg-blue-500 shadow-lg"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FaPlay className="text-lg" />
                    Run Workflow
                </motion.button>
            </Link>

            <Link href="/dashboard/projects/create">
                <motion.button 
                    className="flex items-center gap-2 rounded-lg bg-green-600 text-white px-6 py-3 text-sm font-medium transition hover:bg-green-500 shadow-lg"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FaSave className="text-lg" />
                    Save Workflow
                </motion.button>
            </Link>
        </div>
    );
};

export default EditorButtons;
