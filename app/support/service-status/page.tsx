import React from 'react';

export default function ServiceStatusPage() {
    return (
        <div className="animate-fade-in">
             <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Support <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Service Status</div>
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Service Status</h1>
                            <p className="text-lg text-slate-300 mb-8">Real-time status and performance of CloudCom Networks services and platforms.</p>
                            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 flex items-center shadow-lg">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mr-4 shadow-sm flex-shrink-0"><i className="fa-solid fa-check"></i></div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">All Systems Operational</h3>
                                    <p className="text-green-200 text-sm">All services are running normally.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-xl font-bold text-slate-900 mb-6">Service Status</h2>
                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm divide-y divide-slate-100">
                                <div className="p-6 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center text-lg mr-4"><i className="fa-solid fa-cloud"></i></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Cloud Platform</h4>
                                            <p className="text-[10px] text-slate-500">Compute, storage, database</p>
                                        </div>
                                    </div>
                                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full"><i className="fa-solid fa-check mr-1"></i> Operational</span>
                                </div>
                                <div className="p-6 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center text-lg mr-4"><i className="fa-solid fa-network-wired"></i></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Network Services</h4>
                                            <p className="text-[10px] text-slate-500">Core network, routing, DNS</p>
                                        </div>
                                    </div>
                                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full"><i className="fa-solid fa-check mr-1"></i> Operational</span>
                                </div>
                                <div className="p-6 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center text-lg mr-4"><i className="fa-solid fa-comments"></i></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">UCaaS Platform</h4>
                                            <p className="text-[10px] text-slate-500">Voice, video, messaging</p>
                                        </div>
                                    </div>
                                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full"><i className="fa-solid fa-check mr-1"></i> Operational</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
                                <h3 className="text-sm font-bold text-slate-900 mb-4">Uptime Overview</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-[10px] mb-1"><span className="font-bold">Cloud Platform</span> <span className="text-green-600">100.00%</span></div>
                                        <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-green-500 h-1.5 rounded-full" style={{ width: '100%' }}></div></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[10px] mb-1"><span className="font-bold">Network Services</span> <span className="text-green-600">99.99%</span></div>
                                        <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-green-500 h-1.5 rounded-full" style={{ width: '99.9%' }}></div></div>
                                    </div>
                                </div>
                                <p className="text-center text-[9px] text-slate-400 mt-4">30-day uptime percentage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
