import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface NavLinkItemProps {
  label: string;
  href: string;
  icon: IconType; // Type for React Icons
  isOpen: boolean;
  isActive: boolean; // New prop for active state
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({
  label,
  href,
  icon: Icon,
  isOpen,
  isActive,
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-xl space-x-4 group ${
        isActive ? "bg-blue-100 text-blue-500" : "text-gray-700"
      } hover:bg-blue-100 hover:text-blue-500 transition`}
    >
      <div
        className={`p-2 rounded-md ${
          isActive ? "bg-blue-100" : "group-hover:text-blue-100"
        } transition`}
      >
        <Icon className={`h-5 w-5 ${isActive ? "text-blue-500" : "text-gray-700"}`} />
      </div>
      {isOpen && (
        <span className="text-sm font-medium transition-opacity">{label}</span>
      )}
    </Link>
  );
};

export default NavLinkItem;
