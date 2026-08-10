"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || pathname?.startsWith(`${path}/`);

    return (
        <>
            <div className="bg-slate-900 text-slate-300 text-[11px] py-2 px-6 hidden md:block">
                <div className="container mx-auto max-w-7xl flex justify-between items-center">
                    <div className="flex space-x-6 font-medium">
                        <span className="flex items-center"><i className="fa-solid fa-phone text-slate-500 mr-2"></i> +91 00000 00000</span>
                        <span className="flex items-center"><i className="fa-solid fa-envelope text-slate-500 mr-2"></i> info@cloudcomnet.com</span>
                        <span className="flex items-center"><i className="fa-solid fa-location-dot text-slate-500 mr-2"></i> Bhubaneswar, Odisha, India</span>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin-in"></i></Link>
                        <Link href="https://twitter.com" target="_blank" className="hover:text-white transition-colors"><i className="fa-brands fa-twitter"></i></Link>
                        <Link href="https://youtube.com" target="_blank" className="hover:text-white transition-colors"><i className="fa-brands fa-youtube"></i></Link>
                    </div>
                </div>
            </div>

            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto px-6 max-w-7xl h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <img 
                            src="/media/nav_logo.png" 
                            alt="CloudCom Networks Logo" 
                            className="h-17 w-auto object-contain" 
                        />
                    </Link>

                    <div className="hidden lg:flex h-full items-center space-x-8">
                        <Link href="/" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${pathname === '/' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Home</Link>
                        
                        <div className="relative group h-full flex items-center cursor-pointer">
                            <Link href="/company" className={`nav-link text-sm font-semibold transition-colors flex items-center ${isActive('/company') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Company</Link>
                        </div>

                        <div className="relative group h-full flex items-center cursor-pointer">
                            <Link href="/solutions" className={`nav-link text-sm font-semibold transition-colors flex items-center ${isActive('/solutions') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Solutions</Link>
                        </div>
                        
                        <Link href="/industries" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/industries') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Industries</Link>
                        
                        <div className="relative group h-full flex items-center cursor-pointer">
                            <Link href="/resources" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/resources') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Resources</Link>
                        </div>
                        
                        <Link href="/partners" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/partners') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Partners</Link>
                        <Link href="/careers" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/careers') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Careers</Link>
                        <Link href="/contact" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/contact') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Contact</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/contact?interest=General%20Inquiry%20(Navbar)" className="hidden md:inline-flex bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors items-center shadow-sm">Get in Touch <i className="fa-solid fa-arrow-right ml-2 text-xs"></i></Link>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-slate-600 text-2xl focus:outline-none"><i className="fa-solid fa-bars"></i></button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-b border-slate-200 absolute w-full z-40 shadow-xl pb-4">
                        <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col h-[80vh] overflow-y-auto">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${pathname === '/' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Home</Link>
                            <Link href="/company" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/company') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Company</Link>
                            <Link href="/solutions" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/solutions') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Solutions</Link>
                            <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/industries') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Industries</Link>
                            <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/resources') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Resources</Link>
                            <Link href="/partners" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/partners') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Partners</Link>
                            <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/careers') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Careers</Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/contact') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Contact</Link>
                            <Link href="/contact?interest=General%20Inquiry%20(Mobile%20Nav)" onClick={() => setIsMobileMenuOpen(false)} className="block mt-4 text-center bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm transition-colors">Get in Touch</Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
