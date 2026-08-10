import React from 'react';
import Link from 'next/link';

export default function HelpCenterPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Help Center</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Help Center</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Fast, friendly help when you need it. Our Help Center is your one-stop destination for quick answers.</p>
                    <div className="relative max-w-xl mx-auto flex mt-8">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-slate-400 z-10"></i>
                        <input type="text" placeholder="Search for solutions by keyword or topic..." className="w-full bg-white pl-10 pr-4 py-3 rounded-l-md text-sm border-0 focus:ring-2 focus:ring-primary shadow-lg outline-none text-[#0b1121] placeholder:text-slate-400 relative z-0" />
                        <button className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-r-md font-bold text-sm transition-colors z-10">Search</button>
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-slateBg min-h-screen">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/support/knowledge-base" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow text-center group block">
                            <i className="fa-solid fa-book-open text-3xl text-primary mb-4 group-hover:scale-110 transition-transform"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Browse Articles</h3>
                            <p className="text-[11px] text-slate-500">Browse popular articles and video tutorials.</p>
                        </Link>
                        <Link href="/contact?interest=Support%20Ticket:%20Help%20Center" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow text-center group block">
                            <i className="fa-solid fa-ticket text-3xl text-primary mb-4 group-hover:scale-110 transition-transform"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Submit a Ticket</h3>
                            <p className="text-[11px] text-slate-500">Submit a support ticket directly to our team.</p>
                        </Link>
                        <Link href="/support/service-status" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow text-center group block">
                            <i className="fa-solid fa-heart-pulse text-3xl text-primary mb-4 group-hover:scale-110 transition-transform"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Check System Status</h3>
                            <p className="text-[11px] text-slate-500">Check system status and scheduled maintenance.</p>
                        </Link>
                        <Link href="/contact?interest=Support%20Call%20Request" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow text-center group block">
                            <i className="fa-solid fa-phone text-3xl text-primary mb-4 group-hover:scale-110 transition-transform"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Schedule a Call</h3>
                            <p className="text-[11px] text-slate-500">Schedule a quick call with our support team.</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
