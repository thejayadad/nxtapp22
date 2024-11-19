'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronLeft, FiPlus } from 'react-icons/fi';
import NavLinks from './nav-links';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <aside
        className={`group/sidebar h-full overflow-y-auto relative flex ${
          isOpen ? 'w-60' : 'w-16'
        } flex-col z-[9999] border-r transition-all duration-300`}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
          <div className={`${isOpen ? 'block' : 'hidden'} text-lg font-bold`}>
            Logo
          </div>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-200 transition"
            aria-label="Toggle Sidebar"
          >
            <FiChevronLeft
              className={`h-5 w-5 transform ${
                isOpen ? 'rotate-0' : 'rotate-180'
              } transition-transform`}
            />
          </button>
        </div>

        {/* Create Link */}
        <div
          className={`flex items-center space-x-30 px-4 py-3 ${
            isOpen ? 'space-x-1' : 'pt-2'
        }`}
        >
          <Link
            href="/dashboard/new"
            className={`flex items-center justify-center ${
              isOpen ? 'space-x-1' : 'p-1 ml-1'
            } rounded-full border w-full p-2 text-primary border-primary hover:bg-primary/40 transition`}
          >
            <FiPlus className={`h-5 w-5 ${isOpen ? '' : 'block'}`} />
            {isOpen && <span className="text-sm font-medium">Create</span>}
          </Link>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 space-y-4">
           <NavLinks isOpen={isOpen} />
        </div>
      </aside>
    </>
  );
};

export default Navigation;


