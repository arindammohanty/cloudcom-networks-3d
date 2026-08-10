"use client";

import React, { useState } from 'react';

const whitepapersData = [
    { id: 1, category: 'Cloud Computing', title: 'The Business Value of Cloud Migration', desc: 'How modern cloud strategies drive agility and ROI.', date: 'May 2026', pages: 12, icon: 'fa-cloud' },
    { id: 2, category: 'Security', title: 'Zero Trust Security: A Strategic Imperative', desc: 'Why Zero Trust is the foundation for secure digital transformation.', date: 'April 2026', pages: 18, icon: 'fa-lock' },
    { id: 3, category: 'Unified Comms', title: 'The Future of Enterprise Voice', desc: 'Replacing legacy PBX with scalable cloud communication solutions.', date: 'June 2026', pages: 14, icon: 'fa-comments' },
    { id: 4, category: 'AI & Auto', title: 'Automating the Modern Workflow', desc: 'Leveraging AI and machine learning to reduce manual IT overhead.', date: 'March 2026', pages: 22, icon: 'fa-gears' },
    { id: 5, category: 'Security', title: 'Ransomware Defense Strategies', desc: 'Architecting immutable backups and rapid recovery protocols.', date: 'February 2026', pages: 16, icon: 'fa-shield-halved' },
    { id: 6, category: 'Cloud Computing', title: 'Hybrid Cloud Architecture Patterns', desc: 'Connecting on-premise infrastructure with Azure and AWS.', date: 'January 2026', pages: 20, icon: 'fa-server' },
];

export default function WhitepapersPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortBy, setSortBy] = useState('Latest');

    const handleSecureDownload = (filename: string) => {
        const data = `Mock Payload for Whitepaper: ${filename}\nGenerated securely on the client-side without a backend.\n\nDate: ${new Date().toLocaleDateString()}`;
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `${filename.replace(/ /g, '_')}.txt`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    };

    const filteredPapers = whitepapersData
        .filter((paper) => {
            const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) || paper.desc.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === 'All' || paper.category === activeCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sortBy === 'Latest') return b.id - a.id; 
            if (sortBy === 'A-Z') return a.title.localeCompare(b.title);
            return 0;
        });

    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Resources <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> White Papers</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">White Papers</h1>
                    <p className="text-lg text-slate-300 mb-8">In-depth research and expert insights to help you make informed decisions.</p>
                    <div className="relative max-w-2xl">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-slate-400 z-10"></i>
                        <input 
                            type="text" 
                            placeholder="Search white papers by keyword, topic or technology..." 
                            className="w-full bg-white pl-10 pr-4 py-3 rounded-md text-sm border-0 focus:ring-2 focus:ring-primary shadow-lg outline-none text-[#0b1121] placeholder:text-slate-400 relative z-0"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </section>
            
            <div className="h-4 bg-slateBg"></div>

            <section className="py-16 bg-slateBg min-h-screen">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-xl font-bold text-slate-900">Explore by Topic</h2>
                        <button onClick={() => setActiveCategory('All')} className={`text-xs font-bold uppercase ${activeCategory === 'All' ? 'text-primary' : 'text-slate-500 hover:text-primary'}`}>View All &rarr;</button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-16">
                        {[
                            { id: 'Cloud Computing', icon: 'fa-cloud', count: 12 },
                            { id: 'Security', icon: 'fa-shield-halved', count: 14 },
                            { id: 'Unified Comms', icon: 'fa-comments', count: 10 },
                            { id: 'AI & Auto', icon: 'fa-gears', count: 9 },
                        ].map((cat) => (
                            <div 
                                key={cat.id}
                                onClick={() => setActiveCategory(activeCategory === cat.id ? 'All' : cat.id)}
                                className={`bg-white border rounded-lg p-4 flex flex-col items-center text-center shadow-sm cursor-pointer transition-colors ${activeCategory === cat.id ? 'border-primary ring-1 ring-primary/20' : 'border-slate-200 hover:border-primary/50'}`}
                            >
                                <i className={`fa-solid ${cat.icon} text-xl mb-2 ${activeCategory === cat.id ? 'text-primary' : 'text-slate-600'}`}></i>
                                <span className={`text-[10px] font-bold ${activeCategory === cat.id ? 'text-primary' : 'text-slate-900'}`}>{cat.id}</span>
                                <span className="text-[9px] text-slate-400">{cat.count} Papers</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-xl font-bold text-slate-900">
                            {activeCategory === 'All' ? 'All White Papers' : `${activeCategory} Papers`}
                        </h2>
                        <div className="flex items-center text-xs text-slate-500">Sort by: 
                            <select 
                                className="ml-2 border border-slate-200 rounded p-1 outline-none text-slate-700 bg-white cursor-pointer"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="Latest">Latest</option>
                                <option value="A-Z">A-Z</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="grid lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-3 grid md:grid-cols-2 gap-6 content-start">
                            {filteredPapers.length > 0 ? (
                                filteredPapers.map((paper) => (
                                    <div key={paper.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-card transition-shadow flex shadow-sm h-48">
                                        <div className="w-20 md:w-24 mr-6 bg-slate-900 rounded drop-shadow flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                                            <i className={`fa-solid ${paper.icon} text-3xl text-white opacity-20 absolute`}></i>
                                        </div>
                                        <div className="flex flex-col justify-center w-full">
                                            <span className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1">{paper.category}</span>
                                            <h3 className="font-bold text-slate-900 mb-2 text-sm leading-snug">{paper.title}</h3>
                                            <p className="text-[10px] text-slate-500 mb-4 line-clamp-2">{paper.desc}</p>
                                            <div className="mt-auto flex justify-between items-center text-[10px] text-slate-400">
                                                <span>{paper.date} &bull; {paper.pages} pages</span>
                                                <button onClick={() => handleSecureDownload(paper.title)} className="text-primary hover:scale-110 transition-transform">
                                                    <i className="fa-solid fa-download text-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-2 text-center py-12 bg-white rounded-xl border border-slate-200">
                                    <i className="fa-solid fa-folder-open text-4xl text-slate-300 mb-4"></i>
                                    <h3 className="text-lg font-bold text-slate-700">No results found</h3>
                                    <p className="text-sm text-slate-500">Try adjusting your search terms or category filters.</p>
                                    <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="mt-4 text-primary text-xs font-bold">Clear Filters</button>
                                </div>
                            )}
                        </div>
                        
                        <div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6 text-center">
                                <h3 className="text-sm font-bold text-slate-900 mb-4">Featured White Paper</h3>
                                <div className="bg-slate-900 text-white p-6 rounded-lg mb-4 text-left">
                                    <h4 className="font-bold text-lg mb-2">Navigating the Path to Digital Transformation</h4>
                                    <i className="fa-solid fa-cloud-arrow-up text-4xl opacity-50 mt-4 block text-center"></i>
                                </div>
                                <p className="text-[11px] text-slate-600 mb-4 text-left">A comprehensive guide to building a future-ready organization.</p>
                                <button onClick={() => handleSecureDownload('Navigating_Digital_Transformation')} className="w-full bg-primary hover:bg-primaryHover transition-colors text-white py-2 rounded text-xs font-bold">Download Now &darr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
