'use client';

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

type SubMenuItem = {
  name: string;
  path: string;
};

type MenuItem = {
  name: string;
  icon: string; // Changed to string for image source
  path: string;
  subMenus?: SubMenuItem[];
};

const DesktopSideNav = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>("Operations");
  const pathname = usePathname();

  // Menu items array with icons as image paths
  const menuItems: MenuItem[] = [
    {
      name: "Control Tower",
      icon: "control-tower.png",
      path: "/control-tower",
    },
    {
      name: "Operations",
      icon: "operations.png",
      path: "/operations",
      subMenus: [
        { name: "Cash Request", path: "/cash-request" },
        { name: "Mutilated Notes", path: "/mutilated-notes" },
        { name: "Cash Evacuation", path: "/cash-evacuation" },
        { name: "Overages / Shortages", path: "/overages-shortages" },
      ],
    },
    {
      name: "Insurance Manager",
      icon: "insurance-manager.png",
      path: "/insurance-manager",
    },
    {
      name: "Report & Analysis",
      icon: "reportandanalysis.png",
      path: "/report-analysis",
    },
    {
      name: "Cash Forecast",
      icon: "cashforecast.png",
      path: "/cash-forecast",
    },
    {
      name: "E-Vault Register",
      icon: "vault.png",
      path: "/e-vault-register",
    },
    {
      name: "CIT Manager",
      icon: "cit.png",
      path: "/cit-manager",
    },
    {
      name: "Audit Trail",
      icon: "audit.png",
      path: "/audit-trail",
    },
    {
      name: "App Settings",
      icon: "settings.png",
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

  // Check if path is active
  const isPathActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + '/');
  };

  return (
    <aside className="hidden w-[270px] md:block overflow-scroll  bg-[#F5F5F5] fixed left-0 top-0 overflow-y-auto mt-[69px]">
      <div className="flex flex-col h-full items-center w-full gap-[19.5px] pt-[50px] ">
        <nav>
          {menuItems.map((menuItem, index) => (
            <div key={index} className="mb-[5px] w-full">
              {/* Main menu item */}
              {menuItem.subMenus ? (
                <button 
                  className={cn(
                    "flex w-full px-[40px] cursor-pointer rounded-r-full",
                    isPathActive(menuItem.path) ? "bg-white rounded-r-full py-[16px]" : "hover:bg-white rounded-r-full py-[16px]"
                  )}
                  onClick={() => toggleSubMenu(menuItem.name)}
                  aria-expanded={openSubMenu === menuItem.name}
                  aria-controls={`submenu-${menuItem.name}`}
                >
                  <div className="w-6 h-6 mr-[10px] flex">
                    <Image src={`/${menuItem.icon}`} alt={menuItem.name} width={24} height={24} />
                  </div>
                  <span className="text-[16px] font-[400] text-[#555555]">
                    {menuItem.name}
                  </span>
                </button>
              ) : (
                <Link 
                  href={menuItem.path}
                  className={cn(
                    "flex rounded-r-full px-[40px] cursor-pointer rounded-md",
                    isPathActive(menuItem.path) ? "bg-white rounded-r-full py-[16px]" : "hover:bg-white rounded-r-full py-[16px]"
                  )}
                >
                  <div className="w-6 h-6 mr-[10px] flex">
                    <Image src={`/${menuItem.icon}`} alt={menuItem.name} width={24} height={24} />
                  </div>
                  <span className="text-[16px] font-[400] text-[#555555]">
                    {menuItem.name}
                  </span>
                </Link>
              )}
              
              {/* Submenu items with smooth transition */}
              <div 
                id={`submenu-${menuItem.name}`}
                className={cn(
                  "pl-[50px] overflow-hidden transition-all duration-300 ease-in-out w-full",
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
                      "flex w-full pl-[28px] py-[16px] text-[#757575] text-[14px] rounded-r-full cursor-pointer",
                      pathname === subMenuItem.path ? "bg-white rounded-r-full py-[16px]" : "hover:bg-white rounded-r-full py-[16px]"
                    )}
                  >
                    {subMenuItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default DesktopSideNav;