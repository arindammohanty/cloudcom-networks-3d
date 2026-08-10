"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SupportPortalPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            alert(`Searching Knowledge Base for: "${searchQuery}"\n(This would normally redirect to /support/knowledge-base?q=${encodeURIComponent(searchQuery)})`);
            setSearchQuery('');
        }
    };

    return (
        <div className="animate-fade-in">
             <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Support Portal</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Support Portal</h1>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Welcome! How can we help you today? Raise a request, track progress, and get the support you need.</p>
                    
                    <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto flex">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-slate-400 z-10"></i>
                        <input 
                            type="text" 
                            placeholder="Search for help articles, services, or solutions..." 
                            className="w-full bg-white pl-10 pr-4 py-3 rounded-l-md text-sm border-0 focus:ring-2 focus:ring-primary shadow-lg outline-none text-[#0b1121] placeholder:text-slate-400 relative z-0" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-r-md font-bold text-sm transition-colors whitespace-nowrap z-10">
                            Search
                        </button>
                    </form>
                </div>
            </section>
            
            <section className="py-16 bg-slateBg min-h-screen">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">What would you like to do?</h2>
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <Link href="/contact" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow cursor-pointer block">
                            <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center text-xl mb-4"><i className="fa-solid fa-comment-dots"></i></div>
                            <h3 className="font-bold text-slate-900 text-sm mb-1">Raise a Ticket</h3>
                            <p className="text-[10px] text-slate-500 mb-3">Submit a support request.</p>
                            <span className="text-primary text-xs font-bold">Create Ticket &rarr;</span>
                        </Link>
                        <Link href="/support/my-tickets" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow cursor-pointer block">
                            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-xl mb-4"><i className="fa-solid fa-ticket"></i></div>
                            <h3 className="font-bold text-slate-900 text-sm mb-1">My Tickets</h3>
                            <p className="text-[10px] text-slate-500 mb-3">View and check status.</p>
                            <span className="text-primary text-xs font-bold">View Tickets &rarr;</span>
                        </Link>
                        <Link href="/support/knowledge-base" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow cursor-pointer block">
                            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-xl mb-4"><i className="fa-solid fa-book-open"></i></div>
                            <h3 className="font-bold text-slate-900 text-sm mb-1">Knowledge Base</h3>
                            <p className="text-[10px] text-slate-500 mb-3">Find answers to questions.</p>
                            <span className="text-primary text-xs font-bold">Browse Articles &rarr;</span>
                        </Link>
                        <Link href="/support/downloads" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow cursor-pointer block">
                            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-xl mb-4"><i className="fa-solid fa-download"></i></div>
                            <h3 className="font-bold text-slate-900 text-sm mb-1">Downloads</h3>
                            <p className="text-[10px] text-slate-500 mb-3">Get software and updates.</p>
                            <span className="text-primary text-xs font-bold">View Downloads &rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
