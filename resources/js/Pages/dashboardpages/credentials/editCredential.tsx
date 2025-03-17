import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from "@inertiajs/react";
import { Component, Lock } from "lucide-react";
import { AlertCircle } from "react-feather";


const CreateCredentials = () => {

    const { data, setData, post,processing,errors,reset } = useForm({
        name: '',
        cloud_provider: 'aws', //aws, linode, digitalocean
        access_key_id: '',
        secret_key:'',
        region: 'n/a'

    })


    const handleSubmit = (e) => {
        e.preventDefault();

        if(data.cloud_provider!="aws"){
            data.access_key_id = "n/a"
        }

        post(route('credentials.store'));
    }


    return (
        <AuthenticatedLayout>
          
            <Head title="Update Credentials" />

            <div className="max-w-3xl mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-lg mt-24">
                <div className="flex items-center justify-center mb-8">
                    <div className="bg-blue-600 p-3 rounded-full mr-3">
                        <Lock size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">Update Credentials</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                        <input value={data.name} 
                            onChange={(e) => setData('name', e.target.value)}
                        type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                        text-gray-300" />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle size={14} className="mr-1" /> {errors.name}
                            </p>
                        )}
                        
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cloud_provider" className="block text-sm font-medium text-gray-400">Cloud Provider</label>
                        <select value={data.cloud_provider}
                            onChange={(e) => setData('cloud_provider', e.target.value)}
                            id="cloud_provider" name="cloud_provider" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                        text-gray-300">
                            <option value="aws">AWS</option>
                            <option value="linode">Linode</option>
                            <option value="digitalocean">Digital Ocean</option>
                        </select>

                        {errors.cloud_provider && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle size={14} className="mr-1" /> {errors.cloud_provider}
                            </p>
                        )}
                    </div>

                   {data.cloud_provider=="aws" &&( <div className="mb-4">
                        <label htmlFor="access_key_id" className="block text-sm font-medium text-gray-400">Access Key ID</label>
                        <input value={data.access_key_id} 
                            onChange={(e) => setData('access_key_id', e.target.value)}
                        type="text" name="access_key_id" id="access_key_id" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                        text-gray-300" />

                            {errors.access_key_id && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle size={14} className="mr-1" /> {errors.access_key_id}
                            </p>
                        )}
                        
                    </div>)}


                    <div className="mb-4">
                        <label htmlFor="secret_key" className="block text-sm font-medium text-gray-400">Secret Access Key</label>
                        <input value={data.secret_key} 
                            onChange={(e) => setData('secret_key', e.target.value)}
                        type="text" name="secret_key" id="secret_key" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                        text-gray-300" />

{errors.secret_key && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle size={14} className="mr-1" /> {errors.secret_key}
                            </p>
                        )}
                        
                    </div>


                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create Credential
                    </button>


                </form>
            </div>


        </AuthenticatedLayout>
    );
}

export default CreateCredentials;