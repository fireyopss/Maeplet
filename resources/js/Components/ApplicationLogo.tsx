import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
            {/* Optional Icon */}

            {/* Logo Text */}
            <span className="tracking-tight">
                Maeplet<span className="text-blue-600 dark:text-blue-400">.com</span>
            </span>
        </div>
    );
}
