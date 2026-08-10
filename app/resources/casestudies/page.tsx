import React from 'react';
import Link from 'next/link';

export default function CaseStudiesPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Resources <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Case Studies</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Real stories. Measurable results. See how organizations like yours achieve more with CloudCom Networks.</p>
                </div>
            </section>
            
            <div className="h-4 bg-slateBg"></div>

            <section className="py-16 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-3">
                            <h2 className="text-xl font-bold text-slate-900 mb-6">Featured Case Study</h2>
                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row mb-12">
                                <div className="md:w-1/2 h-48 md:h-auto bg-slate-900 relative">
                                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover opacity-80 mix-blend-screen" alt="Featured Case Study" />
                                    <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold uppercase px-2 py-1 rounded shadow-sm">Featured</span>
                                </div>
                                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                    <span className="text-[9px] font-bold text-primary uppercase tracking-wider mb-2">Financial Services</span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Modernizing Infrastructure for a Leading Financial Institution</h3>
                                    <p className="text-[11px] text-slate-600 mb-6 leading-relaxed">CloudCom Networks helped a leading financial services firm modernize their infrastructure, enhance security, and ensure compliance—driving significant improvements.</p>
                                    <div className="flex gap-6 border-t border-slate-100 pt-4 mt-auto">
                                        <div><div className="font-bold text-primary text-lg">99.99%</div><div className="text-[9px] text-slate-500">System Uptime</div></div>
                                        <div><div className="font-bold text-primary text-lg">45%</div><div className="text-[9px] text-slate-500">Reduction in Costs</div></div>
                                    </div>
                                    {/* Linked to financial-modernization slug */}
                                    <Link href="/resources/casestudies/financial-modernization" className="text-primary font-bold text-xs uppercase mt-6 hover:underline">Read Full Case Study &rarr;</Link>
                                </div>
                            </div>
                            
                            <h2 className="text-xl font-bold text-slate-900 mb-6">All Case Studies</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-card transition-shadow flex flex-col justify-between">
                                    <div>
                                        <div className="h-32 bg-slate-900 relative">
                                            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-80 mix-blend-screen" alt="Healthcare Case Study" />
                                        </div>
                                        <div className="p-5">
                                            <span className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1 block">Healthcare</span>
                                            <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">Secure & Scalable Cloud Migration</h3>
                                            <p className="text-[10px] text-slate-500 mb-4 line-clamp-2">Enabled secure patient data management across 50+ clinics.</p>
                                        </div>
                                    </div>
                                    {/* Linked to healthcare-cloud-migration slug */}
                                    <div className="p-5 pt-0 mt-auto">
                                        <Link href="/resources/casestudies/healthcare-cloud-migration" className="text-primary font-bold text-[10px] uppercase hover:underline">Read More &rarr;</Link>
                                    </div>
                                </div>
                                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-card transition-shadow flex flex-col justify-between">
                                    <div>
                                        <div className="h-32 bg-slate-900 relative">
                                            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-80 mix-blend-screen" alt="Retail Case Study" />
                                        </div>
                                        <div className="p-5">
                                            <span className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1 block">Retail</span>
                                            <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">Unified Communications Driving Retail</h3>
                                            <p className="text-[10px] text-slate-500 mb-4 line-clamp-2">Implemented UCaaS to connect 500+ stores.</p>
                                        </div>
                                    </div>
                                    {/* Linked to retail-unified-communications slug */}
                                    <div className="p-5 pt-0 mt-auto">
                                        <Link href="/resources/casestudies/retail-unified-communications" className="text-primary font-bold text-[10px] uppercase hover:underline">Read More &rarr;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-darkBg text-white border border-slate-800 rounded-xl p-6 shadow-sm mb-6">
                                <h3 className="text-sm font-bold mb-6 border-b border-white/10 pb-4">Business Impact</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center"><i className="fa-solid fa-arrow-trend-up text-primary text-xl w-8"></i> <div><div className="font-bold text-lg">150+</div><div className="text-[9px] text-slate-400 uppercase tracking-wider">Success Stories</div></div></div>
                                    <div className="flex items-center"><i className="fa-solid fa-building text-primary text-xl w-8"></i> <div><div className="font-bold text-lg">30+</div><div className="text-[9px] text-slate-400 uppercase tracking-wider">Industries Served</div></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
