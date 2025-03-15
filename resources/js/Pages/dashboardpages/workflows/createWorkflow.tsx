import React, { useEffect, useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
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
  ChevronUp
} from "lucide-react";

const CreateWorkflow = () => {
    const { projects, success } = usePage().props;
    const [showTips, setShowTips] = useState(false);
    const [createNewProject, setCreateNewProject] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');
    const [newProjectError, setNewProjectError] = useState('');

    useEffect(() => {
       if (success?.message) {
         // Could add toast notification here
         console.log(success);
       }
    }, [success]);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        project_id: '',
        new_project_name: '' // Will be used when creating a new project
    });

    const toggleCreateProject = () => {
        setCreateNewProject(!createNewProject);
        // Reset project selection when toggling
        if (!createNewProject) {
            setData('project_id', '');
        } else {
            setNewProjectName('');
            setData('new_project_name', '');
        }
    };

    const handleNewProjectChange = (e) => {
        const value = e.target.value;
        setNewProjectName(value);
        setData('new_project_name', value);

        // Simple validation
        if (value.trim() === '') {
            setNewProjectError('Project name cannot be empty');
        } else if (value.length < 3) {
            setNewProjectError('Project name must be at least 3 characters');
        } else {
            setNewProjectError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate new project if that option is selected
        if (createNewProject && newProjectName.trim() === '') {
            setNewProjectError('Please enter a project name');
            return;
        }

        post(route('workflows.store'));
    };

    const toggleTips = () => {
        setShowTips(!showTips);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Workflow" />

            <div className="max-w-3xl mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-lg mt-24">
                <div className="flex items-center justify-center mb-8">
                    <div className="bg-blue-600 p-3 rounded-full mr-3">
                        <PenTool size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">Create Workflow</h2>
                </div>

                {/* Pro Tips Toggle Button */}
                <div className="mb-6">
                    <button
                        onClick={toggleTips}
                        className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        <Info size={16} className="mr-1" />
                        {showTips ? "Hide workflow tips" : "Show workflow tips"}
                    </button>
                </div>

                {/* Pro Tips Section */}
                {showTips && (
                    <div className="bg-gray-800 border-l-4 border-blue-500 p-4 mb-6 rounded">
                        <h3 className="font-semibold text-blue-400 flex items-center mb-2">
                            <CheckCircle size={16} className="mr-2" /> Pro Tips for Effective Workflows
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start">
                                <ArrowRight size={14} className="mr-2 mt-1 text-blue-400" />
                                <span>Use descriptive names that clearly indicate the workflow's purpose</span>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight size={14} className="mr-2 mt-1 text-blue-400" />
                                <span>Include key stakeholders and timeline information in your description</span>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight size={14} className="mr-2 mt-1 text-blue-400" />
                                <span>Consider adding workflow stages like "Planning", "Development", and "Review"</span>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight size={14} className="mr-2 mt-1 text-blue-400" />
                                <span>Don't see your project? You can create a new one on-the-fly</span>
                            </li>
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="flex items-center text-sm font-medium mb-2">
                            <BookOpen size={16} className="mr-2 text-blue-400" />
                            Workflow Name
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., Sprint Planning, Design Review, Deployment Process"
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
                            Description
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                            placeholder="Describe the workflow purpose, stakeholders involved, and expected outcomes..."
                        ></textarea>
                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle size={14} className="mr-1" /> {errors.description}
                            </p>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="flex items-center text-sm font-medium">
                                <Briefcase size={16} className="mr-2 text-blue-400" />
                                Project
                            </label>
                            <button
                                type="button"
                                onClick={toggleCreateProject}
                                className="text-sm text-blue-400 hover:text-blue-300 flex items-center transition-colors"
                            >
                                {createNewProject ? (
                                    <>
                                        <ChevronUp size={14} className="mr-1" />
                                        Select existing project
                                    </>
                                ) : (
                                    <>
                                        <Plus size={14} className="mr-1" />
                                        Create new project
                                    </>
                                )}
                            </button>
                        </div>

                        {createNewProject ? (
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        value={newProjectName}
                                        onChange={handleNewProjectChange}
                                        className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter new project name"
                                    />
                                </div>
                                {newProjectError && (
                                    <p className="text-red-500 text-sm flex items-center">
                                        <AlertCircle size={14} className="mr-1" /> {newProjectError}
                                    </p>
                                )}
                                <p className="text-gray-400 text-xs italic">
                                    A new project will be created when you save this workflow
                                </p>
                            </div>
                        ) : (
                            <div>
                                <select
                                    value={data.project_id}
                                    onChange={(e) => setData('project_id', e.target.value)}
                                    className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select an existing project</option>
                                    {projects.map((project) => (
                                        <option key={project.id} value={project.id}>{project.name}</option>
                                    ))}
                                </select>
                                {errors.project_id && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                        <AlertCircle size={14} className="mr-1" /> {errors.project_id}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="pt-4 border-t border-gray-700 flex justify-end">
                        <button
                            type="button"
                            onClick={() => reset()}
                            className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors mr-3"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all disabled:opacity-50 flex items-center"
                        >
                            {processing ? 'Saving...' : 'Save Workflow'}
                            {!processing && <ArrowRight size={16} className="ml-1" />}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateWorkflow;
