import React from 'react';
import NavLink from '@/Components/NavLink';
import { LogIn } from 'react-feather';

const EnhancedLoginButton = () => {
  return (
    <NavLink
    href={route('login')}
    active={route().current('login')}
      className={({ isActive }) => 
        `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 
        ${isActive 
          ? 'bg-indigo-900 text-white font-medium' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'} 
        shadow-md hover:shadow-lg group`
      }
    >
      <LogIn 
        size={18} 
        className="group-hover:translate-x-1 transition-transform duration-200" 
      />
      <span>Log in</span>
    </NavLink>
  );
};

export default EnhancedLoginButton;