import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Resources <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Blog</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
                    <p className="text-lg text-slate-300">Insights, updates, and expert perspectives on cloud, security, networks, and digital transformation.</p>
                </div>
            </section>
            
            <div className="h-4 bg-slateBg"></div>

            <section className="py-16 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-xl font-bold text-slate-900">Featured Posts</h2>
                        <Link href="#" className="text-primary text-xs font-bold uppercase">View All Featured &rarr;</Link>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row h-full">
                                <div className="md:w-1/2 h-64 md:h-auto bg-slate-900 relative">
                                    <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold uppercase px-2 py-1 rounded shadow-sm z-10">Cloud</span>
                                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover opacity-70 mix-blend-screen" alt="Blog Feature" />
                                </div>
                                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">The Future of Cloud: Trends Shaping 2026 and Beyond</h3>
                                    <p className="text-slate-600 mb-6 text-xs leading-relaxed">Explore the top cloud computing trends driving innovation, efficiency, and business transformation.</p>
                                    <div className="flex items-center text-[10px] text-slate-500 font-medium">
                                        <div className="w-8 h-8 bg-slate-200 rounded-full mr-3 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-xs">RS</div>
                                        <span>Rohit Sharma &bull; May 20, 2026 &bull; 6 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
                                <h3 className="text-sm font-bold text-slate-900 mb-4">Categories</h3>
                                <ul className="space-y-3 text-xs font-medium">
                                    <li className="flex justify-between items-center text-slate-600 hover:text-primary cursor-pointer pb-2 border-b border-slate-50"><span><i className="fa-solid fa-cloud text-slate-400 w-5"></i> Cloud Computing</span> <span className="bg-slate-100 text-slate-500 py-0.5 px-2 rounded-full text-[9px]">24</span></li>
                                    <li className="flex justify-between items-center text-slate-600 hover:text-primary cursor-pointer pb-2 border-b border-slate-50"><span><i className="fa-solid fa-shield-halved text-slate-400 w-5"></i> Security</span> <span className="bg-slate-100 text-slate-500 py-0.5 px-2 rounded-full text-[9px]">20</span></li>
                                    <li className="flex justify-between items-center text-slate-600 hover:text-primary cursor-pointer pb-2 border-b border-slate-50"><span><i className="fa-solid fa-phone-volume text-slate-400 w-5"></i> Unified Communications</span> <span className="bg-slate-100 text-slate-500 py-0.5 px-2 rounded-full text-[9px]">18</span></li>
                                    <li className="flex justify-between items-center text-slate-600 hover:text-primary cursor-pointer pb-2 border-b border-slate-50"><span><i className="fa-solid fa-brain text-slate-400 w-5"></i> AI & Automation</span> <span className="bg-slate-100 text-slate-500 py-0.5 px-2 rounded-full text-[9px]">15</span></li>
                                    <li className="flex justify-between items-center text-slate-600 hover:text-primary cursor-pointer pb-2 border-b border-slate-50"><span><i className="fa-solid fa-network-wired text-slate-400 w-5"></i> Network Services</span> <span className="bg-slate-100 text-slate-500 py-0.5 px-2 rounded-full text-[9px]">16</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
