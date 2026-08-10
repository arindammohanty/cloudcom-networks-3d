import React from 'react';

export default function SLAPoliciesPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> SLA & Policies</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SLA & Policies</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Clear commitments you can trust. We stand behind our services with transparent guarantees.</p>
                </div>
            </section>
            
            <section className="py-16 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        
                        {/* SLA Section */}
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <i className="fa-solid fa-handshake text-2xl text-primary"></i>
                                    <h2 className="text-2xl font-bold text-slate-900">Service Level Agreement</h2>
                                </div>
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">99.9% Uptime Guarantee</h3>
                                    <p className="text-xs text-slate-600">For critical infrastructure (with credits if we fall short).</p>
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-4">Response Time Targets</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                        <span className="text-xs font-semibold text-red-600 flex items-center"><i className="fa-solid fa-circle-exclamation mr-2"></i> Critical Incidents</span>
                                        <span className="text-xs font-bold text-slate-700">15 minutes</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                        <span className="text-xs font-semibold text-orange-500 flex items-center"><i className="fa-solid fa-arrow-up mr-2"></i> High Priority</span>
                                        <span className="text-xs font-bold text-slate-700">1 hour</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                        <span className="text-xs font-semibold text-blue-500 flex items-center"><i className="fa-solid fa-minus mr-2"></i> Standard Priority</span>
                                        <span className="text-xs font-bold text-slate-700">4 business hours</span>
                                    </div>
                                </div>
                                <ul className="text-xs text-slate-600 space-y-2">
                                    <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-0.5 mr-2"></i> Resolution Time Goals based on severity.</li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-0.5 mr-2"></i> Monthly performance reports delivered automatically.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Policies Section */}
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <i className="fa-solid fa-file-contract text-2xl text-primary"></i>
                                    <h2 className="text-2xl font-bold text-slate-900">Corporate Policies</h2>
                                </div>
                                <p className="text-sm text-slate-600 mb-6">Access our formalized documentation defining our operational and compliance protocols.</p>
                                
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { title: "Privacy & Data Protection Policy", icon: "fa-shield-halved" },
                                        { title: "Acceptable Use Policy", icon: "fa-user-check" },
                                        { title: "Change Management Policy", icon: "fa-code-pull-request" },
                                        { title: "Backup & Retention Policy", icon: "fa-database" },
                                        { title: "Incident Response Policy", icon: "fa-truck-medical" }
                                    ].map((policy, idx) => (
                                        <a href="#" key={idx} className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-primary hover:bg-slate-50 transition-colors group">
                                            <div className="flex items-center">
                                                <i className={`fa-solid ${policy.icon} text-slate-400 group-hover:text-primary w-6 mr-2 transition-colors`}></i>
                                                <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">{policy.title}</span>
                                            </div>
                                            <i className="fa-solid fa-download text-slate-300 group-hover:text-primary transition-colors"></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
