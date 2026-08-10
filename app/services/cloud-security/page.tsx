import React from 'react';
import Link from 'next/link';

export default function CloudSecurityPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero pt-20 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Services <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Cloud Security</div>
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cloud Security</h1>
                            <h2 className="text-3xl font-bold text-blue-400 mb-6">Protect. Detect. Respond. Assure.</h2>
                            <p className="text-slate-300 mb-8 text-sm leading-relaxed">CloudCom Networks helps organizations build secure, resilient, and compliant cloud environments with a security-first approach across people, processes, and technology.</p>
                            <Link href="/contact?interest=Consultation:%20Cloud%20Security" className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors inline-block">Request Consultation &rarr;</Link>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <i className="fa-solid fa-shield-halved text-9xl text-white/90 drop-shadow-[0_0_50px_rgba(59,130,246,0.6)]"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Cloud Security Services</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-magnifying-glass-chart text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Cloud Security Assessment</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">Identify risks, gaps, and misconfigurations in your environment.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-network-wired text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Infrastructure Protection</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">Protect workloads and networks from evolving threats.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-user-lock text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Identity & Access Management</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">Secure access, enforce least privilege effectively.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-file-shield text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Data Protection</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">Encrypt, classify, and safeguard data across its lifecycle.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-eye text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Security Monitoring</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">24/7 monitoring, SIEM integration, and advanced detection.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-truck-medical text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Incident Response & Recovery</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">Rapid response to minimize impact and downtime.</p>
                        </div>
                    </div>
                    
                    <div className="mt-20">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-slate-900">Our Security Approach</h3>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between relative bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-slate-200 -translate-y-1/2 z-0"></div>
                            <div className="relative z-10 flex flex-col items-center text-center px-4 bg-white">
                                <div className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center text-lg mb-3"><i className="fa-solid fa-magnifying-glass"></i></div>
                                <h4 className="font-bold text-slate-900 text-xs">Assess</h4>
                            </div>
                            <div className="relative z-10 flex flex-col items-center text-center px-4 bg-white">
                                <div className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center text-lg mb-3"><i className="fa-solid fa-shield"></i></div>
                                <h4 className="font-bold text-slate-900 text-xs">Protect</h4>
                            </div>
                            <div className="relative z-10 flex flex-col items-center text-center px-4 bg-white">
                                <div className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center text-lg mb-3"><i className="fa-solid fa-eye"></i></div>
                                <h4 className="font-bold text-slate-900 text-xs">Detect</h4>
                            </div>
                            <div className="relative z-10 flex flex-col items-center text-center px-4 bg-white">
                                <div className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center text-lg mb-3"><i className="fa-solid fa-truck-fast"></i></div>
                                <h4 className="font-bold text-slate-900 text-xs">Respond</h4>
                            </div>
                            <div className="relative z-10 flex flex-col items-center text-center px-4 bg-white">
                                <div className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center text-lg mb-3"><i className="fa-solid fa-check-double"></i></div>
                                <h4 className="font-bold text-slate-900 text-xs">Assure</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
