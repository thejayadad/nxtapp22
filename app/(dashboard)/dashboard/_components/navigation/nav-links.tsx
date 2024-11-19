import { FiDatabase, FiUserPlus, FiClock } from "react-icons/fi";
import NavLinkItem from "./nav-link-item";
import { usePathname } from "next/navigation";

// Define routes dynamically
const routes = [
  {
    label: "Events",
    href: "/dashboard",
    icon: FiDatabase, // Pass the icon component directly
  },
  {
    label: "Meetings",
    href: "/dashboard/meetings",
    icon: FiUserPlus,
  },
  {
    label: "Availability",
    href: "/dashboard/availability",
    icon: FiClock,
  },
];

interface NavLinksProps {
  isOpen: boolean; // Define the isOpen prop type
}

const NavLinks: React.FC<NavLinksProps> = ({ isOpen }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="flex flex-col space-y-4">
      {routes.map((route) => (
        <NavLinkItem
          key={route.href} // Use href as a unique key
          label={route.label}
          href={route.href}
          icon={route.icon}
          isOpen={isOpen} // Pass isOpen to control sidebar state
          isActive={pathname === route.href} // Check if the current route is active
        />
      ))}
    </nav>
  );
};

export default NavLinks;
