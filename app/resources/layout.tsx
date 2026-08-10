"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    // Define your sub-navigation tabs
    const navItems = [
        { path: '/resources', icon: 'fa-layer-group', label: 'All Resources', exact: true },
        { path: '/resources/blog', icon: 'fa-pen-nib', label: 'Blog' },
        { path: '/resources/whitepapers', icon: 'fa-file-lines', label: 'Whitepapers' },
        { path: '/resources/casestudies', icon: 'fa-briefcase', label: 'Case Studies' },
        { path: '/resources/guides', icon: 'fa-book-open', label: 'Guides' },
        { path: '/resources/webinars', icon: 'fa-video', label: 'Webinars' },
        { path: '/resources/news', icon: 'fa-bullhorn', label: 'News & Updates' }
    ];

    return (
        <>
            {/* Sticky Sub-Navigation */}
            <div className="bg-white border-b border-slate-200 sticky top-20 z-40">
                <div className="container mx-auto px-6 max-w-7xl overflow-x-auto">
                    <div className="flex justify-between items-center py-4 min-w-max">
                        {navItems.map((item) => {
                            // Check if the current URL matches the tab to highlight it
                            const isActive = item.exact ? pathname === item.path : pathname?.startsWith(item.path);
                            
                            return (
                                <Link 
                                    key={item.path} 
                                    href={item.path} 
                                    className={`flex flex-col items-center px-6 transition-colors pb-2 ${isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-primary border-transparent'}`}
                                >
                                    <i className={`fa-solid ${item.icon} text-xl mb-1`}></i>
                                    <span className="text-[10px] font-bold uppercase tracking-wide">{item.label}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            
            {/* Render the specific resource page content below the nav */}
            {children}
        </>
    );
}
