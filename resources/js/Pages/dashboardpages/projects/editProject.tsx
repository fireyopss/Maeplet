import React, { useEffect, useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm, usePage, } from '@inertiajs/react';
import {
  BookOpen,
  ArrowRight,
  Calendar,
  CheckCircle,
  AlertCircle,
  Briefcase,
  PenTool,
  Info,
  Plus,
  ChevronDown,
  Component,
  ChevronUp
} from "lucide-react";

const EditProject = () => {
    const { project } = usePage().props;
    const [showTips, setShowTips] = useState(false);
    const [createNewProject, setCreateNewProject] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');
    const [newProjectError, setNewProjectError] = useState('');

  

 

    const { data, setData, put, processing, errors, reset } = useForm({
        name: project.name,
        description: project.description
    });

 
  
    const handleSubmit = (e) => {
        e.preventDefault();


        put(route('projects.update', project.id));
    };

    const toggleTips = () => {
        setShowTips(!showTips);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Project" />

            <div className="max-w-3xl mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-lg mt-24">
                <div className="flex items-center justify-center mb-8">
                    <div className="bg-blue-600 p-3 rounded-full mr-3">
                        <Component size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">Edit Project</h2>
                </div>

                {/* Pro Tips Toggle Button */}
                <div className="mb-6">
                    <button
                        onClick={toggleTips}
                        className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        <Info size={16} className="mr-1" />
                        {showTips ? "Hide Project tips" : "Show Project Tips"}
                    </button>
                </div>

                {/* Pro Tips Section */}
                {showTips && (
                    <div className="bg-gray-800 border-l-4 border-blue-500 p-4 mb-6 rounded">
                        <h3 className="font-semibold text-blue-400 flex items-center mb-2">
                            <CheckCircle size={16} className="mr-2" /> Pro Tips for Effective Projects
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start">
                                <ArrowRight size={14} className="mr-2 mt-1 text-blue-400" />
                                <span>Group a bunch of related workflows in the same Project</span>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight size={14} className="mr-2 mt-1 text-blue-400" />
                                <span>Add Team Members to projects</span>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight size={14} className="mr-2 mt-1 text-blue-400" />
                                <span>Keep project name descriptive</span>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight size={14} className="mr-2 mt-1 text-blue-400" />
                                <span>Data stored in a specific project can be shared across projects.</span>
                            </li>
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="flex items-center text-sm font-medium mb-2">
                            <BookOpen size={16} className="mr-2 text-blue-400" />
                            Project Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., News, Social Media, Liveuamap.com"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle size={14} className="mr-1" /> {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="flex items-center text-sm font-medium mb-2">
                            <Calendar size={16} className="mr-2 text-blue-400" />
                           Project  Description
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                            placeholder="Describe the Project purpose, group of workflows for scrapping news websites?"
                        ></textarea>
                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle size={14} className="mr-1" /> {errors.description}
                            </p>
                        )}
                    </div>

                    <div>
                     

                         
                    </div>

                    <div className="pt-4 border-t border-gray-700 flex justify-end">
                        <button
                            type="button"
                            onClick={() =>{
                                router.get('/dashboard/projects')
                            }}
                            className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors mr-3"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all disabled:opacity-50 flex items-center"
                        >
                            {processing ? 'Saving...' : 'Update Project'}
                            {!processing && <ArrowRight size={16} className="ml-1" />}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditProject;
