import React, { useEffect } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';

const CreateWorkflow = () => {
    const { projects,flash } = usePage().props;

    useEffect(() => {
       console.log(flash);
    }
    , [flash]);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        project_id: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("will try");
        post(route('workflows.store'));

    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Workflow" />



            <div className="mt-24 max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Workflow</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Workflow Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter workflow name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter workflow description"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Select Project</label>
                        <select
                            value={data.project_id}
                            onChange={(e) => setData('project_id', e.target.value)}
                            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a project</option>
                            {projects.map((project) => (
                                <option key={project.id} value={project.id}>{project.name}</option>
                            ))}
                        </select>
                        {errors.project_id && <p className="text-red-500 text-sm mt-1">{errors.project_id}</p>}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all disabled:opacity-50"
                        >
                            {processing ? 'Saving...' : 'Save Workflow'}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateWorkflow;
