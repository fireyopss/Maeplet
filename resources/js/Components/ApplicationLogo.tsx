import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
            {/* Optional Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                {...props}
            >
                <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 18a8 8 0 100-16 8 8 0 000 16z" />
                <path d="M11 7h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            {/* Logo Text */}
            <span className="tracking-tight">
                Maeplet<span className="text-blue-600 dark:text-blue-400">.com</span>
            </span>
        </div>
    );
}
