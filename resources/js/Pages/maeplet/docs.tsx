import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const pricing = () => {
    const { user } = usePage().props.auth;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    useEffect(() => {
        document.title = 'Documentation | Maeplet';
    }, []);

    return (
        <AuthenticatedLayout>
            <Head title="Pricing" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                                Documentation
                            </h2>
                            <p className="mt-4">
                                You're logged in as {user.name}!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default pricing;
