"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const webinarsData = [
    { id: 1, title: 'Zero Trust Security: Building a Secure Future', desc: 'Explore Zero Trust principles and modern security strategies.', date: 'May 28, 2026', time: '11:00 AM IST', status: 'Live', icon: 'fa-shield-halved' },
    { id: 2, title: 'Demystifying Hybrid Cloud Migrations', desc: 'Learn the common pitfalls and best practices when moving legacy workloads.', date: 'June 05, 2026', time: '2:00 PM IST', status: 'Upcoming', icon: 'fa-cloud' },
    { id: 3, title: 'AI in IT Operations (AIOps)', desc: 'How machine learning is predicting and resolving network outages automatically.', date: 'April 15, 2026', time: '10:00 AM IST', status: 'On-Demand', icon: 'fa-brain' },
];

export default function WebinarsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredWebinars = webinarsData.filter(webinar => 
        webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        webinar.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Resources <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Webinars</div>
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Webinars</h1>
                            <p className="text-lg text-slate-300 mb-6">Expert insights. Real conversations. Smarter decisions.</p>
                            <p className="text-sm text-slate-400 mb-8 max-w-md">Join industry experts and CloudCom Networks leaders as they discuss trends, strategies, and solutions that drive business success.</p>
                            <div className="relative max-w-md">
                                <i className="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-slate-400 z-10"></i>
                                <input 
                                    type="text" 
                                    placeholder="Search webinars..." 
                                    className="w-full bg-white pl-10 pr-4 py-3 rounded-md text-sm border-0 focus:ring-2 focus:ring-primary shadow-lg outline-none text-[#0b1121] placeholder:text-slate-400 relative z-0"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="h-4 bg-slateBg"></div>

            <section className="py-16 bg-slateBg min-h-screen">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-3">
                            <h2 className="text-xl font-bold text-slate-900 mb-6">
                                {searchQuery ? 'Search Results' : 'Upcoming & On-Demand Webinars'}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-16">
                                {filteredWebinars.length > 0 ? (
                                    filteredWebinars.map((webinar) => (
                                        <div key={webinar.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-card transition-shadow">
                                            <div className="h-32 bg-slate-900 relative">
                                                <span className={`absolute top-2 left-2 text-white text-[8px] font-bold uppercase px-2 py-1 rounded ${webinar.status === 'Live' ? 'bg-red-500' : webinar.status === 'Upcoming' ? 'bg-primary' : 'bg-slate-500'}`}>{webinar.status}</span>
                                                <i className={`fa-solid ${webinar.icon} text-4xl text-white opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></i>
                                            </div>
                                            <div className="p-5 flex-grow flex flex-col">
                                                <p className="text-[10px] text-slate-500 mb-2 font-medium"><i className="fa-regular fa-calendar mr-1"></i> {webinar.date} &bull; {webinar.time}</p>
                                                <h3 className="text-sm font-bold text-slate-900 mb-2">{webinar.title}</h3>
                                                <p className="text-[10px] text-slate-600 mb-4 flex-grow">{webinar.desc}</p>
                                                
                                                {webinar.status === 'On-Demand' ? (
                                                    <button onClick={() => alert('Launching video player module...')} className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-1.5 rounded text-[11px] font-bold transition-colors">
                                                        Watch Recording &rarr;
                                                    </button>
                                                ) : (
                                                    <Link 
                                                        href={`/contact?interest=${encodeURIComponent('Webinar Registration: ' + webinar.title)}`} 
                                                        className="w-full block text-center border border-primary text-primary hover:bg-primary hover:text-white py-1.5 rounded text-[11px] font-bold transition-colors"
                                                    >
                                                        Register Now &rarr;
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-2 text-center py-10 bg-white rounded-xl border border-slate-200">
                                        <p className="text-slate-500 text-sm">No webinars found matching "{searchQuery}".</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
                                <h3 className="text-sm font-bold text-slate-900 mb-4">Why Attend?</h3>
                                <ul className="space-y-3 text-[11px] text-slate-600">
                                    <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-0.5 mr-2"></i> Actionable insights</li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-0.5 mr-2"></i> Live Q&A with experts</li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-0.5 mr-2"></i> Access to recordings</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
