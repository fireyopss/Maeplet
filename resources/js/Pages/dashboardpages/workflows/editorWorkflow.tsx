import React, { useEffect } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, Link } from "@inertiajs/react";
import EditorButtons from "./editorbuttons";
import { NodeEditor } from "flume";

import Config from './config'

const EditorWorkflow = () => {
    const { workflow } = usePage().props;

    useEffect(() => {
        console.log(workflow);
    }, [workflow]);

    return (
        <div className="bg-gray-900  flex items-center justify-center">
            <div className="container w-full px-8 mt-12 text-white">
                {/* Header */}
                <div className=" py-4 bg-green-900 flex items-center px-6 rounded-lg shadow-lg border border-green-700">
                    <div className="flex-1">
                        <p className="text-2xl font-semibold">Workflow Editor- {workflow.name}</p>
                        <p className="text-sm text-gray-400 mt-2">
                            Name: {workflow.name} <br></br>Description: {workflow.description}
                            <br></br>
                            Project: {workflow.project.name}

                        </p>
                    </div>
                    
                        <EditorButtons />

                </div>

                {/* Main Content */}
                <div className="flex h-screen mt-6 space-x-6">
                    {/* Left Sidebar */}
                    <div className="bg-gray-900 w-80 p-6 rounded-lg shadow-lg border border-gray-800">
                        <h2 className="text-lg font-semibold text-green-500 mb-4">Tools & Actions</h2>
                        <ul className="space-y-2">
                            <li className="bg-gray-800 p-3 rounded-md hover:bg-green-700 cursor-pointer">Action 1</li>
                            <li className="bg-gray-800 p-3 rounded-md hover:bg-green-700 cursor-pointer">Action 2</li>
                            <li className="bg-gray-800 p-3 rounded-md hover:bg-green-700 cursor-pointer">Action 3</li>
                        </ul>
                    </div>
                    
                    {/* Main Editor Area */}
                    <div className="flex-grow bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">

                        <NodeEditor
                            portTypes={Config.portTypes}
                            nodeTypes={Config.nodeTypes}
                           
                        />

                    </div>
                    
                    {/* Right Sidebar */}
                    {/* <div className="bg-gray-900 w-80 p-6 rounded-lg shadow-lg border border-gray-800">
                        <h2 className="text-lg font-semibold text-green-500 mb-4">Workflow Details</h2>
                        <p className="text-gray-400">View and edit properties of the selected workflow item.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default EditorWorkflow;