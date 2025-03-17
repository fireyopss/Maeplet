import React, { useEffect } from 'react'

import { Link, usePage } from '@inertiajs/react'
import CredentialItem from './components/credentialitem'


const DashboardCredentials = () => {

        const {credentials} = usePage().props

        useEffect(()=>{
            console.log(credentials)
        },[credentials])

    return (
        <div>
           
           <div className="h-24 bg-black flex items-center px-6 rounded-lg shadow-md">
                <div className="flex-1 text-white">
                    <p className="text-lg font-semibold">Credentials</p>
                    <p className="text-sm text-gray-400">
                        Set your Cloud credentials
                    </p>
                </div>
                <div className="w-96 flex justify-end">
                   <Link href="/dashboard/credentials/create"> <button className="rounded-md bg-green-500 text-white px-6 py-3 text-sm font-medium transition hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 shadow-md">
                        Create Credential
                    </button></Link>
                </div>
            </div>


            <div>
                {credentials?.map((credential:any) => (
                   <CredentialItem key={credential.id} credential={credential} />
                ))}
            </div>



        </div>
    )
}

export default DashboardCredentials
