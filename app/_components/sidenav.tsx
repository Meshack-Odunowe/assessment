'use client';

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type SubMenuItem = {
  name: string;
  path: string;
};

type MenuItem = {
  name: string;
  icon?: string;
  path: string;
  subMenus?: SubMenuItem[];
  isActive?: boolean;
};

const SideNav = () => {
  // State to track active menu item
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeMenu, setActiveMenu] = useState<string>("Control Tower");
  const [openSubMenu, setOpenSubMenu] = useState<string | null>("Operations");
  const pathname = usePathname();

  // Menu items array with structure matching the image
  const menuItems: MenuItem[] = [
    {
      name: "Control Tower",
      icon: "/icons/control-tower.svg",
      path: "/control-tower",
    },
    {
      name: "Operations",
      icon: "/icons/operations.svg",
      path: "/operations",
      subMenus: [
        { name: "Cash Request", path: "/operations/cash-request" },
        { name: "Mutilated Notes", path: "/operations/mutilated-notes" },
        { name: "Cash Evacuation", path: "/operations/cash-evacuation" },
        { name: "Overages / Shortages", path: "/operations/overages-shortages" },
      ],
    },
    {
      name: "Insurance Manager",
      icon: "/icons/insurance.svg",
      path: "/insurance-manager",
    },
    {
      name: "Report & Analysis",
      icon: "/icons/report.svg",
      path: "/report-analysis",
    },
    {
      name: "Cash Forecast",
      icon: "/icons/forecast.svg",
      path: "/cash-forecast",
    },
    {
      name: "E-Vault Register",
      icon: "/icons/vault.svg",
      path: "/e-vault-register",
    },
    {
      name: "CIT Manager",
      icon: "/icons/cit.svg",
      path: "/cit-manager",
    },
    {
      name: "Audit Trail",
      icon: "/icons/audit.svg",
      path: "/audit-trail",
    },
    {
      name: "App Settings",
      icon: "/icons/settings.svg",
      path: "/app-settings",
    },
  ];

  // Toggle submenu
  const toggleSubMenu = (menuName: string) => {
    if (openSubMenu === menuName) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(menuName);
    }
  };

  // Handle menu item click
  const handleMenuClick = (menuItem: MenuItem) => {
    setActiveMenu(menuItem.name);
    if (menuItem.subMenus) {
      toggleSubMenu(menuItem.name);
    }
  };

  // Check if path is active
  const isPathActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + '/');
  };

  return (
    <Sheet>
      <div className="size-[48px]  md:hidden rounded-[15px] mt-[11px] ml-[30px] bg-[#F5F5F5]">
        <SheetTrigger className="p-[12px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_10425_4155)">
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#0F3677" />
            </g>
            <defs>
              <clipPath id="clip0_10425_4155">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </SheetTrigger>
      </div>
      
      <SheetContent side="left" className="w-[240px] p-0 bg-[#F5F5F5]">
        <div className="flex flex-col h-full py-4">
          {/* Logo at the top */}
          <div className="px-4 mb-6 flex justify-center">
            <Image 
              src="/logo.png" 
              alt="Company Logo" 
              width={160} 
              height={50} 
              className="object-contain"
            />
          </div>
          
          {menuItems.map((menuItem, index) => (
            <div key={index} className="mb-1">
              {/* Main menu item */}
              {menuItem.subMenus ? (
                <div 
                  className={cn(
                    "flex items-center px-4 py-2 cursor-pointer rounded-md mx-2",
                    isPathActive(menuItem.path) ? "bg-white/70" : "hover:bg-white/40"
                  )}
                  onClick={() => handleMenuClick(menuItem)}
                >
                  {menuItem.icon && (
                    <div className="w-6 h-6 mr-3 flex items-center justify-center">
                      {/* Use inline SVG for icons */}
                      {menuItem.name === "Control Tower" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 17L12 22L22 17" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 12L12 17L22 12" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "Operations" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="7" height="7" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="14" y="3" width="7" height="7" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="3" y="14" width="7" height="7" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="14" y="14" width="7" height="7" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "Insurance Manager" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 14V14.01" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 10V6" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 18V22" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                      {menuItem.name === "Report & Analysis" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 20H20" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 4H20" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="4" y="8" width="16" height="8" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 12H15" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "Cash Forecast" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="#555555" strokeWidth="2"/>
                          <path d="M12 6V12L16 14" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "E-Vault Register" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="16" rx="2" stroke="#555555" strokeWidth="2"/>
                          <path d="M8 10H16" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M8 14H13" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M3 8H21" stroke="#555555" strokeWidth="2"/>
                        </svg>
                      )}
                      {menuItem.name === "CIT Manager" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M23 21V19C22.9986 17.1771 21.7849 15.5857 20 15.13" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 3.13C17.7846 3.58317 18.9979 5.17337 19 7C18.9979 8.82663 17.7846 10.4168 16 10.87" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "Audit Trail" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2V8H20" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 13H8" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 17H8" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 9H9H8" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "App Settings" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  )}
                  <span className="text-sm font-medium text-[#555555]">{menuItem.name}</span>
                </div>
              ) : (
                <Link 
                  href={menuItem.path}
                  className={cn(
                    "flex items-center px-4 py-2 cursor-pointer rounded-md mx-2",
                    isPathActive(menuItem.path) ? "bg-white/70" : "hover:bg-white/40"
                  )}
                >
                  {menuItem.icon && (
                    <div className="w-6 h-6 mr-3 flex items-center justify-center">
                      {/* Repeat the same SVGs as above for each menu item */}
                      {menuItem.name === "Control Tower" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 17L12 22L22 17" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 12L12 17L22 12" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "Insurance Manager" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 14V14.01" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 10V6" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 18V22" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                      {menuItem.name === "Report & Analysis" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 20H20" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 4H20" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="4" y="8" width="16" height="8" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 12H15" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "Cash Forecast" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="#555555" strokeWidth="2"/>
                          <path d="M12 6V12L16 14" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "E-Vault Register" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="16" rx="2" stroke="#555555" strokeWidth="2"/>
                          <path d="M8 10H16" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M8 14H13" stroke="#555555" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M3 8H21" stroke="#555555" strokeWidth="2"/>
                        </svg>
                      )}
                      {menuItem.name === "CIT Manager" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M23 21V19C22.9986 17.1771 21.7849 15.5857 20 15.13" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 3.13C17.7846 3.58317 18.9979 5.17337 19 7C18.9979 8.82663 17.7846 10.4168 16 10.87" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "Audit Trail" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2V8H20" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 13H8" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 17H8" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 9H9H8" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {menuItem.name === "App Settings" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  )}
                  <span className="text-sm font-medium text-[#555555]">{menuItem.name}</span>
                </Link>
              )}
              
              {/* Submenu items with smooth transition */}
              <div 
                className={cn(
                  "ml-9 overflow-hidden transition-all duration-300 ease-in-out",
                  openSubMenu === menuItem.name 
                    ? "max-h-60 opacity-100 mt-1" 
                    : "max-h-0 opacity-0"
                )}
              >
                {menuItem.subMenus?.map((subMenuItem, subIndex) => (
                  <Link 
                    key={subIndex}
                    href={subMenuItem.path}
                    className={cn(
                      "block py-2 px-3 text-sm text-[#555555] hover:bg-white/40 rounded-md cursor-pointer",
                      pathname === subMenuItem.path ? "bg-white/70" : ""
                    )}
                  >
                    {subMenuItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;